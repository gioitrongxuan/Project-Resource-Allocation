from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Hoặc ["*"] nếu muốn cho phép tất cả
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load mô hình NLP
model = SentenceTransformer('all-MiniLM-L6-v2')

# Định nghĩa nhóm kỹ năng + từ khóa
skills = {
    "Backend": ["API", "microservice", "RESTful", "backend", "upstream", "java", "amq", "kafka", "spring", "hibernate", "jpa", "algorithm"],
    "Frontend": ["React", "Vue", "UI/UX", "console", "frontend", "web", "javascript", "html", "css"],
    "Database": ["SQL", "NoSQL", "database", "query", "data warehouse"],
    "DevOps": ["CI/CD", "Docker", "Kubernetes", "cloud", "infrastructure", "log", "info"],
    "AI/ML": ["machine learning", "deep learning", "AI", "data science", "ML pipeline"],
    "Testing": ["test", "systemtest", "automation", "unit test", "integration test"],
    "Issue Tracking": ["issue", "github", "jira", "bug tracking"]
}

# Tạo vector trung bình cho từng nhóm kỹ năng
skill_vectors = {}
for skill, keywords in skills.items():
    embeddings = model.encode(keywords)
    centroid = np.mean(embeddings, axis=0)
    skill_vectors[skill] = centroid

# Request model
class TaskInput(BaseModel):
    id: Optional[int]
    name: str
    description: str
    assignee: str

@app.post("/analyze")
def analyze_tasks(tasks: List[TaskInput]):
    all_results = []
    all_vectors = []
    emp_task_counts = {}  # đếm số task mỗi nhân viên nhận
    employee_scores_summary = {}

    # Khởi tạo danh sách nhân viên dựa trên dữ liệu input
    assignees = set([task.assignee for task in tasks])
    for emp in assignees:
        employee_scores_summary[emp] = {skill: 0 for skill in skills.keys()}
        emp_task_counts[emp] = 0

    # Phân tích task
    for idx, task in enumerate(tasks):
        full_text = (task.name or '') * 2 + " " + (task.description or '')
        job_vector = model.encode([full_text])[0]
        sims = []
        for skill, centroid in skill_vectors.items():
            sim = cosine_similarity([job_vector], [centroid])[0][0]
            sims.append(sim)
        all_vectors.append(sims)

    # Chuẩn hóa
    scaler = MinMaxScaler(feature_range=(1, 5))
    scaled_vectors = scaler.fit_transform(all_vectors)
    skill_names = list(skills.keys())

    # Gán điểm kỹ năng cho task và nhân viên theo assignee
    for idx, task in enumerate(tasks):
        task_scores = {skill_names[i]: round(scaled_vectors[idx][i], 2) for i in range(len(skill_names))}
        assignee = task.assignee

        emp_task_counts[assignee] += 1
        for skill in skill_names:
            employee_scores_summary[assignee][skill] += task_scores[skill]

        all_results.append({
            "id": task.id,
            "name": task.name,
            "description": task.description,
            "task_scores": task_scores,
            "assignee": assignee
        })

    # Tính trung bình điểm kỹ năng của mỗi nhân viên dựa trên số task đã nhận
    for emp in employee_scores_summary:
        count = emp_task_counts[emp]
        if count > 0:
            for skill in skill_names:
                employee_scores_summary[emp][skill] = round(employee_scores_summary[emp][skill] / count, 2)

    return {
        "results": all_results,
        "all_employee_scores": employee_scores_summary
    }
