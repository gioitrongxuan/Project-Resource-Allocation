const mainMRA = (projects, employees, assets, kpiTargets) => {
    // Bước 1: Sắp xếp thứ tự tô-pô cho từng dự án
    //  Tasks: [{ id: 1, 
    const topologicalSort = (tasks) => {
        const indegree = new Map(); // Lưu số lượng cạnh vào của mỗi task
        const graph = new Map(); // Biểu đồ lưu các task và các cạnh
        const queue = []; // Hàng đợi để xử lý các task
        const result = []; // Kết quả sắp xếp tô-pô

        // Khởi tạo đồ thị và số lượng cạnh vào
        tasks.forEach(task => {
            indegree.set(task.id, 0);
            graph.set(task.id, []);
        });

        // Xây dựng đồ thị và cập nhật số lượng cạnh vào
        tasks.forEach(task => {
            task.predecessors.forEach(pre => {
                graph.get(pre).push(task.id);
                indegree.set(task.id, indegree.get(task.id) + 1);
            });
        });

        // Thêm các task không có cạnh vào vào hàng đợi
        indegree.forEach((value, key) => {
            if (value === 0) queue.push(key);
        });

        // Xử lý hàng đợi để sắp xếp tô-pô
        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            graph.get(current).forEach(neighbor => {
                indegree.set(neighbor, indegree.get(neighbor) - 1);
                if (indegree.get(neighbor) === 0) queue.push(neighbor);
            });
        }

        // Kiểm tra nếu có chu trình trong đồ thị
        if (result.length !== tasks.length) {
            throw new Error("Phát hiện chu trình trong các task của dự án");
        }

        return result;
    };

    const sortedTasksByProject = {};
    projects.forEach(project => {
        sortedTasksByProject[project.id] = topologicalSort(project.tasks);
    });

    // Bước 2: Áp dụng phương pháp đường găng (Critical Path Method - CPM)
    const applyCPM = (allTasks) => {
        const taskMap = new Map();
        allTasks.forEach(task => taskMap.set(task.id, task));

        // Pass xuôi (Forward Pass)
        allTasks.forEach(task => {
            if (task.predecessors.length === 0) {
                task.ES = task.projectStart; // Thời gian bắt đầu sớm nhất
            } else {
                task.ES = Math.max(...task.predecessors.map(pre => taskMap.get(pre).EF));
            }
            task.EF = task.ES + task.duration; // Thời gian kết thúc sớm nhất
        });

        // Pass ngược (Backward Pass)
        [...allTasks].reverse().forEach(task => {
            if (task.successors.length === 0) {
                task.LF = task.projectEnd; // Thời gian kết thúc muộn nhất
            } else {
                task.LF = Math.min(...task.successors.map(suc => taskMap.get(suc).LS));
            }
            task.LS = task.LF - task.duration; // Thời gian bắt đầu muộn nhất
        });

        // Xác định đường găng
        allTasks.forEach(task => {
            task.slack = task.LS - task.ES; // Độ trễ
            task.isCritical = task.slack === 0; // Task thuộc đường găng nếu độ trễ bằng 0
        });
    };

    const allTasks = projects.flatMap(project => project.tasks);
    applyCPM(allTasks);

    // Bước 3: Phân bổ tài sản
    const assignAssets = (tasks, assets) => {
        tasks.forEach(task => {
            const availableAsset = assets.find(asset => 
                asset.isAvailable(task.ES, task.EF) // Kiểm tra tài sản có sẵn trong khoảng thời gian
            );
            if (availableAsset) {
                task.asset = availableAsset.id; // Gán tài sản cho task
                availableAsset.reserve(task.ES, task.EF); // Đặt trước tài sản
            } else {
                throw new Error(`Không có tài sản khả dụng cho task ${task.id}`);
            }
        });
    };

    assignAssets(allTasks, assets);

    // Bước 4: Phân bổ nhân viên bằng DLHS
    const assignEmployees = (tasks, employees, kpiTargets) => {
        // Khởi tạo Harmony Memory (HM)
        let harmonyMemory = initializeHarmonyMemory(tasks, employees);

        // Quá trình tìm kiếm Harmony
        while (!isConverged(harmonyMemory)) {
            const newSolution = generateNewSolution(harmonyMemory, tasks, employees);
            harmonyMemory = updateHarmonyMemory(harmonyMemory, newSolution);
        }

        // Gán nhân viên dựa trên giải pháp tốt nhất
        const bestSolution = getBestSolution(harmonyMemory);
        tasks.forEach((task, index) => {
            task.employee = bestSolution[index];
        });
    };

    assignEmployees(allTasks, employees, kpiTargets);

    // Bước 5: Giải quyết xung đột
    const resolveConflicts = (tasks) => {
        const employeeSchedule = new Map();

        tasks.forEach(task => {
            const schedule = employeeSchedule.get(task.employee) || [];
            schedule.push(task);
            employeeSchedule.set(task.employee, schedule);
        });

        employeeSchedule.forEach((schedule, employee) => {
            schedule.sort((a, b) => a.ES - b.ES); // Sắp xếp theo thời gian bắt đầu
            for (let i = 1; i < schedule.length; i++) {
                if (schedule[i].ES < schedule[i - 1].EF) { // Nếu có xung đột thời gian
                    schedule[i].ES = schedule[i - 1].EF; // Điều chỉnh thời gian bắt đầu
                    schedule[i].EF = schedule[i].ES + schedule[i].duration; // Điều chỉnh thời gian kết thúc
                }
            }
        });
    };

    resolveConflicts(allTasks);

    // Trả về kết quả phân bổ cuối cùng
    return allTasks.map(task => ({
        taskId: task.id,
        employee: task.employee,
        asset: task.asset,
        ES: task.ES,
        EF: task.EF,
        isCritical: task.isCritical
    }));
};

// const initializeHarmonyMemory = (tasks, employees) => { /* ... */ };
// const isConverged = (harmonyMemory) => { /* ... */ };
// const generateNewSolution = (harmonyMemory, tasks, employees) => { /* ... */ };
// const updateHarmonyMemory = (harmonyMemory, newSolution) => { /* ... */ };
// const getBestSolution = (harmonyMemory) => { /* ... */ };
// Triển khai các hàm hỗ trợ cho DLHS

const initializeHarmonyMemory = (tasks, employees) => {
    const harmonyMemory = [];
    const numSolutions = 10; // Số lượng giải pháp trong Harmony Memory

    for (let i = 0; i < numSolutions; i++) {
        const solution = tasks.map(() => {
            const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
            return randomEmployee.id;
        });
        harmonyMemory.push(solution);
    }

    return harmonyMemory;
};

const isConverged = (harmonyMemory) => {
    const uniqueSolutions = new Set(harmonyMemory.map(solution => solution.join(',')));
    return uniqueSolutions.size === 1; // Hội tụ khi chỉ còn một giải pháp duy nhất
};

const generateNewSolution = (harmonyMemory, tasks, employees) => {
    const HMCR = 0.9; // Harmony Memory Consideration Rate
    const PAR = 0.3; // Pitch Adjustment Rate
    const newSolution = [];

    tasks.forEach(() => {
        if (Math.random() < HMCR) {
            // Chọn ngẫu nhiên từ Harmony Memory
            const randomSolution = harmonyMemory[Math.floor(Math.random() * harmonyMemory.length)];
            const randomEmployee = randomSolution[Math.floor(Math.random() * randomSolution.length)];
            newSolution.push(randomEmployee);
        } else {
            // Chọn ngẫu nhiên từ tập nhân viên
            const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
            newSolution.push(randomEmployee.id);
        }

        // Điều chỉnh ngẫu nhiên (Pitch Adjustment)
        if (Math.random() < PAR) {
            const randomEmployee = employees[Math.floor(Math.random() * employees.length)];
            newSolution[newSolution.length - 1] = randomEmployee.id;
        }
    });

    return newSolution;
};

const updateHarmonyMemory = (harmonyMemory, newSolution) => {
    const maxMemorySize = 10; // Kích thước tối đa của Harmony Memory
    harmonyMemory.push(newSolution);

    // Loại bỏ giải pháp kém nhất nếu vượt quá kích thước tối đa
    if (harmonyMemory.length > maxMemorySize) {
        harmonyMemory.sort((a, b) => evaluateSolution(a) - evaluateSolution(b));
        harmonyMemory.pop();
    }

    return harmonyMemory;
};

const getBestSolution = (harmonyMemory) => {
    return harmonyMemory.reduce((best, current) => {
        return evaluateSolution(current) < evaluateSolution(best) ? current : best;
    });
};

const evaluateSolution = (solution) => {
    // Hàm đánh giá giải pháp (giả định KPI càng thấp càng tốt)
    return solution.reduce((score, employeeId) => {
        // Tính điểm dựa trên KPI của nhân viên
        const employee = employees.find(emp => emp.id === employeeId);
        return score + (employee ? employee.kpi : 0);
    }, 0);
};

module.exports = mainMRA;
