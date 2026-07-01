# ExpertHire AI

ExpertHire AI is an AI-powered interview preparation platform. This repository contains the monorepo for the project.

## Folder Structure

```
experthire-ai/
├── apps/
│   ├── api/       # FastAPI Backend (Python)
│   └── web/       # Next.js Frontend (TypeScript)
├── packages/      # Shared libraries
│   ├── ui/
│   ├── types/
│   └── utils/
├── docs/          # Documentation
├── docker/        # Docker configurations
└── scripts/       # Utility scripts
```

## Installation

### Prerequisites
- Node.js (v18+)
- Python (3.12+)
- MongoDB (running locally on port 27017 or via Docker)

### Backend (`apps/api`)
1. Navigate to the backend directory:
   ```bash
   cd apps/api
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables (copy `.env.example` to `.env`).

### Frontend (`apps/web`)
1. Navigate to the frontend directory:
   ```bash
   cd apps/web
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (copy `.env.example` to `.env.local`).

## Environment Variables
See `.env.example` in the root of this project.

## Run Instructions

### Backend
From `apps/api` with the virtual environment activated:
```bash
uvicorn app.main:app --reload
```
The API will be available at http://localhost:8000.

### Frontend
From `apps/web`:
```bash
npm run dev
```
The application will be available at http://localhost:3000.

## Future Modules
The architecture is prepared for future expansion including:
- Resume Management
- Interview Sessions
- Coding Environment
- Voice/Video Integrations
- Evaluation & Analytics
