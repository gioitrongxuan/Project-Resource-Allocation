import networkx as nx
from collections import defaultdict

def fast_count_max_parallel(jobs, dependencies):
    """
    Tính nhanh số luồng song song tối đa mà không cần tạo lịch chi tiết.
    
    Args:
        jobs: Dict[str, int] - Từ điển ánh xạ từ tên công việc đến thời gian thực hiện
        dependencies: Dict[str, List[str]] - Từ điển ánh xạ từ tên công việc đến danh sách các công việc tiên quyết
        
    Returns:
        int - Số luồng song song tối đa
    """
    # Tạo đồ thị
    G = nx.DiGraph()
    for job in jobs:
        G.add_node(job)
    for job, prereqs in dependencies.items():
        for prereq in prereqs:
            if prereq in jobs:
                G.add_edge(prereq, job)
    
    # Tính earliest start time (EST)
    est = {}
    
    # Sắp xếp topo các công việc
    topo_order = list(nx.topological_sort(G))
    
    # Khởi tạo EST cho tất cả các công việc là 0
    for job in jobs:
        est[job] = 0
    
    # Tính EST cho từng công việc theo thứ tự topo
    for job in topo_order:
        # Nếu công việc có các công việc tiên quyết
        if job in dependencies and dependencies[job]:
            # EST là thời điểm trễ nhất mà một công việc tiên quyết hoàn thành
            est[job] = max([est[prereq] + jobs[prereq] for prereq in dependencies[job] if prereq in jobs], default=0)
    
    # Tạo danh sách các sự kiện (thời điểm, loại)
    # Loại: 1 = bắt đầu công việc, -1 = kết thúc công việc
    events = []
    
    for job in jobs:
        start_time = est[job]
        end_time = start_time + jobs[job]
        events.append((start_time, 1))  # Sự kiện bắt đầu
        events.append((end_time, -1))   # Sự kiện kết thúc
    
    # Sắp xếp sự kiện theo thời gian
    events.sort()
    
    # Tính số luồng song song tối đa
    current_parallel = 0
    max_parallel = 0
    
    for time, event_type in events:
        current_parallel += event_type  # +1 khi bắt đầu, -1 khi kết thúc
        max_parallel = max(max_parallel, current_parallel)
    
    return max_parallel

def sweep_line_max_parallel(jobs, dependencies):
    """
    Thuật toán quét đường thẳng (sweep line) để tính số luồng song song tối đa.
    Phiên bản cực kỳ tối ưu cho bài toán có hàng nghìn công việc.
    
    Độ phức tạp: O(n log n) với n là số lượng công việc
    """
    # Tạo đồ thị
    G = nx.DiGraph()
    for job in jobs:
        G.add_node(job)
    for job, prereqs in dependencies.items():
        for prereq in prereqs:
            if prereq in jobs:
                G.add_edge(prereq, job)
    
    # Kiểm tra chu trình
    if not nx.is_directed_acyclic_graph(G):
        return "Đồ thị có chu trình, không thể tính được số luồng song song!"
    
    # Tính earliest start time (EST) cho mỗi công việc
    est = {}
    
    # Khởi tạo EST cho tất cả các công việc là 0
    for job in jobs:
        est[job] = 0
    
    # Tính EST cho từng công việc theo thứ tự topo
    for job in nx.topological_sort(G):
        pred = list(G.predecessors(job))
        if pred:
            est[job] = max(est[p] + jobs[p] for p in pred)
    
    # Tạo danh sách các sự kiện
    events = []
    
    for job in jobs:
        start = est[job]
        end = start + jobs[job]
        # Thêm sự kiện bắt đầu và kết thúc
        events.append((start, 1))    # 1 = bắt đầu
        events.append((end, -1))     # -1 = kết thúc
    
    # Sắp xếp các sự kiện theo thời gian
    events.sort()
    
    # Quét qua các sự kiện để tìm số luồng song song tối đa
    max_parallel = 0
    current = 0
    
    for _, event_type in events:
        current += event_type  # +1 cho bắt đầu, -1 cho kết thúc
        max_parallel = max(max_parallel, current)
    
    return max_parallel

# Ví dụ sử dụng
if __name__ == "__main__":
    # Ví dụ dữ liệu nhỏ để kiểm thử
   # Ví dụ minh họa với dữ liệu của bạn
    jobs_test = {
        'T1': 1, 'T2': 1, 'T3': 2, 'T4': 3, 'T5': 4, 'T6': 3, 'T7': 6,
        'T8': 1, 'T9': 1, 'T10': 2, 'T11': 3, 'T12': 4, 'T13': 3, 'T14': 6,
        'T15': 1, 'T16': 1, 'T17': 2, 'T18': 3, 'T19': 4, 'T20': 3, 'T21': 6,
        'T22': 1, 'T23': 1, 'T24': 2, 'T25': 3, 'T26': 4, 'T27': 3, 'T28': 6,
        'T29': 1, 'T30': 1, 'T31': 2, 'T32': 3, 'T33': 4, 'T34': 3, 'T35': 6,
        'T36': 1, 'T37': 1, 'T38': 2, 'T39': 3, 'T40': 4, 'T41': 3, 'T42': 6,
        'T43': 1, 'T44': 1, 'T45': 2, 'T46': 3, 'T47': 4, 'T48': 3, 'T49': 6,
        'T50': 1, 'T51': 1, 'T52': 2, 'T53': 3, 'T54': 4, 'T55': 3, 'T56': 1,
        'T57': 1, 'T58': 1, 'T59': 2, 'T60': 3, 'T61': 4, 'T62': 3, 'T63': 1,
        'T64': 1, 'T65': 1, 'T66': 2, 'T67': 3, 'T68': 4, 'T69': 6, 'T70': 1,
        # Tiếp tục cho đến 1000 task, lặp lại mẫu 1,1,2,3,4,3,6
        'T995': 1, 'T996': 1, 'T997': 2, 'T998': 3, 'T999': 4, 'T1000': 3,'T1001': 6
    }

    dependencies_test = {
        'T2': ['T1'],
        'T4': ['T1'],
        'T6': ['T4'],
        'T9': ['T8'],
        'T11': ['T8'],
        'T13': ['T11'],
        'T16': ['T15'],
        'T18': ['T15'],
        'T20': ['T18'],
        'T23': ['T22'],
        'T25': ['T22'],
        'T27': ['T25'],
        'T30': ['T29'],
        'T32': ['T29'],
        'T34': ['T32'],
        'T37': ['T36'],
        'T39': ['T36'],
        'T41': ['T39'],
        'T44': ['T43'],
        'T46': ['T43'],
        'T48': ['T46'],
        'T51': ['T50'],
        'T53': ['T50'],
        'T55': ['T53'],
        'T58': ['T57'],
        'T60': ['T57'],
        'T62': ['T60'],
        'T65': ['T64'],
        'T67': ['T64'],
        'T69': ['T67'],
        # Tiếp tục theo mẫu B-A, D-A, F-D
        'T996': ['T995'],
        'T998': ['T995'],
        'T1000': ['T998']
    }
    # Tính nhanh số luồng song song tối đa
    max_parallel = fast_count_max_parallel(jobs_test, dependencies_test)
    print(f"Số lượng công việc song song tối đa: {max_parallel}")
    
    # Sử dụng thuật toán quét đường thẳng
    sweep_max = sweep_line_max_parallel(jobs_test, dependencies_test)
    print(f"Số lượng công việc song song tối đa (sweep line): {sweep_max}")
    
    # Ví dụ với dữ liệu lớn hơn
    import time
    import random
    
    # Tạo dữ liệu giả lập lớn
    def generate_large_test(n_jobs):
        jobs_large = {f'T{i}': random.randint(1, 10) for i in range(1, n_jobs+1)}
        dependencies_large = {}
        
        # Tạo đồ thị có hướng không chu trình ngẫu nhiên
        for i in range(2, n_jobs+1):
            # Mỗi công việc phụ thuộc vào tối đa 3 công việc có chỉ số nhỏ hơn
            possible_deps = [f'T{j}' for j in range(1, i)]
            if possible_deps:
                n_deps = min(len(possible_deps), random.randint(0, 3))
                if n_deps > 0:
                    deps = random.sample(possible_deps, n_deps)
                    dependencies_large[f'T{i}'] = deps
        
        return jobs_large, dependencies_large
    
    # Test với 1000 công việc
    print("\nTest với 1000 công việc:")
    jobs_large, deps_large = generate_large_test(1000)
    
    start_time = time.time()
    max_parallel_large = sweep_line_max_parallel(jobs_large, deps_large)
    end_time = time.time()
    
    print(f"Số lượng công việc song song tối đa: {max_parallel_large}")
    print(f"Thời gian xử lý: {end_time - start_time:.4f} giây")