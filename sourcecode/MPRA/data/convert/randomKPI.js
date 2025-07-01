const fs = require('fs');
const path = require('path');

// Hàm sinh trọng số có tổng bằng 1
function randomWeightSumToOne(count) {
    let weights = Array.from({ length: count }, () => Math.random());
    const sum = weights.reduce((a, b) => a + b, 0);
    return weights.map(w => parseFloat((w / sum).toFixed(6)));
}

// Hàm xử lý chuẩn hóa KPI
function normalizeKpiTasks(tasks, n) {
    const kpiTypes = Array.from({ length: n }, (_, i) => String.fromCharCode(65 + i));

    // Bước 1: Gán mỗi task chỉ có 1 KPI duy nhất

    tasks.forEach(task => {
        const kpiIndex = Math.floor(Math.random() * kpiTypes.length);
        const type =  kpiTypes[kpiIndex];
        task.kpiInTask = [{
            id: kpiIndex,
            type: type,
            weight: 1 // tạm thời
        }];
    });

    // Bước 2: Đếm số lượng task theo từng loại KPI
    const tasksByType = {};

    tasks.forEach(task => {
        const type = task.kpiInTask[0].type;
        if (!tasksByType[type]) tasksByType[type] = [];
        tasksByType[type].push(task);
    });

    // Bước 3: Gán lại weight sao cho tổng mỗi loại = 1
    Object.entries(tasksByType).forEach(([type, group]) => {
        const weights = randomWeightSumToOne(group.length);
        group.forEach((task, index) => {
            task.kpiInTask[0].weight = weights[index];
        });
    });

    return tasks;
}

// Đọc dữ liệu từ input.json
const inputPath = path.resolve(__dirname, 'input.json');
const outputPath = path.resolve(__dirname, 'output.json');

fs.readFile(inputPath, 'utf8', (err, data) => {
    if (err) {
        console.error("Lỗi đọc file:", err);
        return;
    }

    try {
        const tasks = JSON.parse(data);
        const n = 3; // Số loại KPI bạn muốn (vd: A, B)
        const updatedTasks = normalizeKpiTasks(tasks, n);

        // Ghi ra file output.json
        fs.writeFile(outputPath, JSON.stringify(updatedTasks, null, 2), 'utf8', (err) => {
            if (err) {
                console.error("Lỗi ghi file:", err);
            } else {
                console.log("✅ Xuất file thành công:", outputPath);
            }
        });
    } catch (e) {
        console.error("Lỗi phân tích JSON:", e);
    }
});