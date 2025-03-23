import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity

# Load file CSV hoặc Excel chứa bảng công việc
data = pd.read_excel("Tasks.xlsx")

# Bước 1: Load mô hình NLP
model = SentenceTransformer('all-MiniLM-L6-v2')

# Bước 2: Tạo vector trung bình cho từng nhóm kỹ năng
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

# Bước 3: Phân tích công việc và gán kỹ năng với trọng số name * 2 và description * 1
def analyze_job(name, description):
    name_vector = model.encode([name])[0]
    description_vector = model.encode([description])[0]
    
    # Trung bình trọng số: name * 2 + description * 1
    combined_vector = (2 * name_vector + 1 * description_vector) / 3

    scores = {}
    for skill, centroid in skill_vectors.items():
        sim = cosine_similarity([combined_vector], [centroid])[0][0]
        scores[skill] = sim
    return scores

results = []
for idx, row in data.iterrows():
    scores = analyze_job(
        row['name'] if pd.notnull(row['name']) else '',
        row['description'] if pd.notnull(row['description']) else ''
    )
    results.append({
        "id": row['id'],
        "name": row['name'],
        "description": row['description'],
        **scores
    })

df_result = pd.DataFrame(results)

# Bước 4: Chuẩn hóa điểm từ 1 đến 5
scaler = MinMaxScaler(feature_range=(1, 5))
for skill in skills.keys():
    df_result[skill] = scaler.fit_transform(df_result[[skill]])

# Ghi kết quả ra file output.xlsx
df_result.to_excel("output.xlsx", index=False, columns=['id', 'name', 'description'] + list(skills.keys()))
