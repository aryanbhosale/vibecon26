# VibeCon26 - DevSoc Team Website

## 🚀 Successfully Deployed!

This is the VibeCon26 team website for DevSoc - a collective of developers contributing to major open-source projects.

### 📱 Live Application
- **Preview URL**: https://test-branch-42.preview.emergentagent.com
- **Status**: ✅ Fully Operational

### 🛠 Technology Stack
- **Frontend**: React 19 with Create React App (CRACO)
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **UI Framework**: Tailwind CSS + Radix UI Components
- **Routing**: React Router DOM

### ✨ Features
- **Hero Section**: Clean landing page with tagline
- **Interactive Team Cards**: Flip cards showing team member profiles
- **Team Achievements**: Display of accomplishments and contributions
- **Timeline View**: Journey visualization
- **Responsive Design**: Mobile-friendly layout

### 🎯 Architecture
```
/app
├── backend/          # FastAPI server on port 8001
│   ├── server.py    # Main API with /api prefix routes
│   └── .env         # Backend environment variables
├── frontend/        # React app on port 3000
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── data/        # Mock data
│   └── .env         # Frontend environment variables
└── tests/           # Test suite
```

### 🔧 Environment Configuration
- **Backend URL**: Configured via `REACT_APP_BACKEND_URL` in frontend/.env
- **MongoDB**: Configured via `MONGO_URL` in backend/.env
- **CORS**: Set to allow all origins

### 📦 Deployment Information
- **Platform**: Emergent (Kubernetes)
- **Services**: All services running (frontend, backend, MongoDB)
- **Deployment Status**: Ready for production
- **Replicas**: 2 pods with 250m CPU and 1Gi memory each

### 👥 Team Members Featured
- Tanish Desai - MCP Contributor, QEMU Contributor, Full-Stack Developer
- Mahir Ghadiali - AI Agents, Rust Backend, Distributed Systems, Full-Stack Developer
- Aryan Bhosale - GSoC '24, GitHub CLI Contributor, Open Source, Backend Engineer

### 📝 Original Repository
Source: https://github.com/aryanbhosale/vibecon26

---
*Deployed successfully on Emergent Platform*
