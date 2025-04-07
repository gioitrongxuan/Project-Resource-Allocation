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


model = SentenceTransformer('all-MiniLM-L6-v2')

skills = {
    "backend": ["API", "microservice", "RESTful", "backend", "upstream", "java", "amq", "kafka", "spring", "hibernate", "jpa", "algorithm"],
    "frontend": ["React", "Vue", "UI/UX", "console", "frontend", "web", "javascript", "html", "css"],
    "database": ["SQL", "NoSQL", "database", "query", "data warehouse"],
    "devops": ["CI/CD", "Docker", "Kubernetes", "cloud", "infrastructure", "log", "info"],
    "ai_ml": ["machine learning", "deep learning", "AI", "data science", "ML pipeline"],
    "testing": ["test", "systemtest", "automation", "unit test", "integration test"],
    "issue_tracking": ["issue", "github", "jira", "bug tracking"]
}

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

    all_employee_scores = []
    for emp, qualities in employee_scores_summary.items():
        total_score = sum(qualities.values())
        avg_score = total_score / len(qualities)

        # Tính level theo avg
        if avg_score >= 4.5:
            level = 5
        elif avg_score >= 3.5:
            level = 4
        elif avg_score >= 2.5:
            level = 3
        elif avg_score >= 1.5:
            level = 2
        else:
            level = 1

        # Suy ra costPerHour
        costPerHour = round(level * 2.5, 2)

        # Tìm skill cao nhất
        top_skill = max(qualities, key=qualities.get)

        # Gán position theo skill nổi bật
        if top_skill in ["backend", "frontend", "database"]:
            position = "Dev"
        elif top_skill == "testing":
            position = "Tester"
        elif top_skill == "issue_tracking":
            position = "QA"
        elif top_skill == "devops":
            position = "DevOps"
        elif top_skill == "ai_ml":
            position = "AI Engineer"
        else:
            position = "Staff"

        employee = {
            "id": hash(emp) % 10000,
            "name": emp,
            "employeeNumber": f"MS2024{str(hash(emp) % 1000).zfill(3)}",
            "position": position,
            "tags": [],
            "level": level,
            "costPerHour": costPerHour,
            "qualities": qualities
        }
        all_employee_scores.append(employee)

    return {
        "results": all_results,
        "all_employee_scores": all_employee_scores
    }

