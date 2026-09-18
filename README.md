# InterviewPrep AI

AI-powered interview preparation platform that analyzes a resume and job description, generates role-specific interview questions, runs mock interviews, scores answers, and highlights skill gaps.

---

## 📖 About the Project

InterviewPrep AI is a full-stack application built to help candidates prepare for technical interviews using their own resume and a target job description.

The platform is designed to:

- Analyze a resume and job description
- Generate tailored interview questions
- Run streamed mock interviews through chat
- Score answers and provide feedback
- Compare resume skills with job requirements
- Identify missing skills and target questions toward those gaps
- Track interview progress over time

The project is being built incrementally as a 12-week full-stack + AI learning project.

---

## ✨ Features

### 📄 Resume & Job Analysis
- Resume upload and text extraction
- Job description management
- Resume-to-job skill matching
- Covered and missing skills

### 🤖 AI Interview Preparation
- Role-specific interview question generation
- Technical, behavioral, and project questions
- Difficulty-based questions
- Resume-aware questions

### 💬 Mock Interviews
- Chat-based mock interview sessions
- Streaming AI responses
- Question-by-question interview flow

### 📊 Answer Scoring
- Score answers on:
  - Clarity
  - Correctness
  - Depth
- Specific feedback for each answer
- Example of a stronger answer
- Overall interview score

### 🔐 User Accounts
- GitHub and Google authentication
- Per-user data isolation
- Users can create, edit, and delete their own job descriptions
- Account and data deletion

### 🧠 Semantic Matching
- Text embeddings
- PostgreSQL + pgvector
- Cosine similarity
- Resume/job chunk matching
- Missing-skill detection

### 🧪 Production Practices
- Unit tests with Vitest
- End-to-end testing with Playwright
- GitHub Actions CI
- Docker and Docker Compose
- Rate limiting
- AI provider fallback

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| TypeScript | Application language |
| Next.js | Frontend + backend |
| React | UI |
| Tailwind CSS | Styling |
| shadcn/ui | UI components |
| PostgreSQL | Database |
| pgvector | Vector similarity search |
| Drizzle ORM | Type-safe database access |
| Better Auth | Authentication |
| Gemini | Primary AI provider |
| Groq | Backup AI provider |
| Vercel AI SDK | AI streaming and structured output |
| Docker | Local containerization |
| Vitest | Unit testing |
| Playwright | End-to-end testing |
| GitHub Actions | CI/CD |
| Vercel | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js LTS
- pnpm
- Git
- Docker Desktop
- GitHub account
- Required AI and database accounts for the full application

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Akshat-sharma-official/interview-prep.git
cd interview-prep
```

2. Install dependencies:

```bash
pnpm install
```

3. Create your local environment file:

```bash
cp .env.example .env.local
```

4. Add the required environment variables.

Never commit API keys or secrets to GitHub.

5. Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

---

## 💡 How It Works

```text
Resume + Job Description
          ↓
    Text Processing
          ↓
   Resume–Job Matching
          ↓
   Missing Skill Detection
          ↓
 Tailored Question Generation
          ↓
     Mock Interview
          ↓
     Answer Scoring
          ↓
 Feedback + Progress
```

---

## 🗺️ Roadmap

The project is being developed across 12 weeks.

- [ ] Project setup and GitHub repository
- [ ] Next.js + TypeScript foundation
- [ ] Initial landing page
- [ ] TypeScript utility practice
- [ ] Authentication
- [ ] Job description CRUD
- [ ] Resume upload and storage
- [ ] AI question generation
- [ ] Streaming mock interviews
- [ ] AI answer scoring and feedback
- [ ] Resume–job matching with embeddings
- [ ] Progress tracking
- [ ] Rate limiting
- [ ] Automated tests
- [ ] Docker support
- [ ] GitHub Actions CI/CD
- [ ] Production deployment

---

## 🎯 Project Goal

By the end of development, a user should be able to:

1. Sign in
2. Upload a resume
3. Add a job description
4. See how their resume matches the job
5. Identify missing skills
6. Generate tailored interview questions
7. Complete a mock interview
8. Receive scores and feedback
9. Track their preparation progress

---

## 📌 Project Status

🚧 **In active development**

This repository is being built incrementally as part of a 12-week full-stack + AI learning roadmap.

Features will be added and improved throughout development.

---

## 🤝 Contributing

This is primarily a learning and portfolio project.

If contributing:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Commit your changes

```bash
git commit -m "Add your feature"
```

4. Push the branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

## 📄 License

License information will be added as the project progresses.

---

## 👨‍💻 Author

**Akshat Sharma**

Project:
https://github.com/Akshat-sharma-official/interview-prep
