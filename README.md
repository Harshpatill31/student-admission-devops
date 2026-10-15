# Student Admission System — End-to-End DevOps Mini Project

A working API-based **Student Admission System** backend, containerized with **Docker**, tested with **Jest**, automated with **GitHub Actions**, deployed on **Render**, and monitored with **Prometheus + Grafana**.

| 🌐 Live API Health Check | https://student-admission-backend-latest.onrender.com/api/health |
| :--- | :--- |
| 💻 Source Code | https://github.com/Harshpatill31/student-admission-devops |

## CI/CD Pipeline Architecture
Every time code is pushed to the `main` branch, the GitHub Actions pipeline automatically:
1. Checks out the code.
2. Installs Node.js dependencies.
3. Runs Jest unit tests.
4. Builds a Docker image.
5. Pushes the image to GitHub Container Registry (GHCR).
6. Triggers a live deployment on Render.

## Run Locally (With Docker)
To run the backend isolated on your own machine:
```bash
docker run -d -p 5000:5000 --name backend student-admission-backend
