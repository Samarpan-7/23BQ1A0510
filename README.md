# Notification System - Full Stack Application

A complete notification system built with React (Frontend), Node.js/Express (Backend), and comprehensive logging middleware.

## 📁 Project Structure

```
23BQ1A0510/
├── notification_app_fe/         # React Frontend Application
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom hooks
│   │   ├── services/            # API services
│   │   └── styles/              # CSS files
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── notification_app_be/         # Node.js/Express Backend
│   ├── src/
│   │   ├── controllers/         # Route controllers
│   │   ├── routes/              # API routes
│   │   ├── middleware/          # Express middleware
│   │   ├── utils/               # Database utilities
│   │   └── config.js            # Configuration
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
├── logging_middleware/          # Reusable Logging Module
│   ├── index.js                 # Main Log function
│   ├── test.js                  # Test examples
│   ├── package.json
│   └── README.md
│
├── notification_system_design.md # System design documentation
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install all modules at once
cd notification_middleware && npm install
cd ../notification_app_be && npm install
cd ../notification_app_fe && npm install
```

### 2. Start Backend Server
```bash
cd notification_app_be
npm run dev
# Server runs on http://localhost:5000
```

### 3. Start Frontend Application
```bash
cd notification_app_fe
npm run dev
# App runs on http://localhost:3000
```

### 4. Test Logging Middleware
```bash
cd logging_middleware
node test.js
```

---

## 📊 Technology Stack

### Frontend
- **React 18** - UI Framework
- **Vite** - Build tool
- **Material UI** - Component library
- **Axios** - HTTP client
- **JavaScript** - Programming language

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Axios** - HTTP client
- **CORS** - Cross-origin support
- **dotenv** - Environment variables

### Logging Middleware
- **Axios** - API communication
- **Reusable Package** - Can be imported in any JS/TS project

---

## 📝 API Endpoints

### Notifications API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notifications` | Get all notifications |
| GET | `/api/notifications/:id` | Get notification by ID |
| POST | `/api/notifications` | Create new notification |
| PUT | `/api/notifications/:id` | Update notification |
| DELETE | `/api/notifications/:id` | Delete notification |

### Health Check
```
GET /health
```

---

## 🔐 Logging Integration

All backend operations are automatically logged to the external logging service:

**Log API:** `http://4.224.186.213/evaluation-service/logs`

**Log Levels:** `debug`, `info`, `warn`, `error`, `fatal`

**Stacks:** `backend`, `frontend`

---

## 📦 Dependencies Summary

### Frontend (notification_app_fe)
- react: ^18.2.0
- axios: ^1.6.0
- @mui/material: ^5.14.0
- @emotion/react: ^11.11.0
- vite: ^4.4.0

### Backend (notification_app_be)
- express: ^4.18.2
- cors: ^2.8.5
- axios: ^1.6.0
- dotenv: ^16.3.1
- nodemon: ^3.0.1

### Logging Middleware
- axios: ^1.6.0

---

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000
LOG_API_URL=http://4.224.186.213/evaluation-service/logs
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 📋 Features

✅ Create, Read, Update, Delete (CRUD) notifications
✅ Real-time API integration
✅ Comprehensive logging system
✅ Material UI responsive design
✅ Error handling and validation
✅ CORS enabled
✅ Environment configuration
✅ Modular architecture

---

## 🧪 Testing

### Test Logging Middleware
```bash
cd logging_middleware
npm run test
```

### Test with Postman
1. Import the API endpoints
2. Test backend endpoints on `http://localhost:5000/api/notifications`
3. Test logging API on `http://4.224.186.213/evaluation-service/logs`

---

## 📚 Documentation

- [Frontend README](notification_app_fe/README.md)
- [Backend README](notification_app_be/README.md)
- [Logging Middleware README](logging_middleware/README.md)
- [System Design](notification_system_design.md)

---

## 📝 Git Commit Strategy

```bash
# Stage all changes
git add .

# Commit
git commit -m "Complete notification system setup"

# Push to main
git push origin main
```

---

## 🎯 Track: Frontend

This project uses:
- **React** for frontend framework
- **JavaScript** for programming language
- **Material UI** for styling (as per requirements)

---

## 📞 Support

For issues or questions:
1. Check the README files in each module
2. Review the system design documentation
3. Check logs from the logging middleware
4. Test endpoints with Postman

---

## ⚖️ License

ISC License

---

**Project Completion Date:** June 5, 2026
**Status:** ✅ Ready for Development