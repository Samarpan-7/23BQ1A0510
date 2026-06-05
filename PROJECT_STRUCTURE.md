# 📚 Project Structure Documentation

Complete file and folder organization for the Full-Stack Notification System.

## Complete Project Tree

```
23BQ1A0510/
│
├── 📁 notification_fetcher/              ⭐ NEWLY ADDED - Notification Fetcher Script
│   ├── index.js                          # Main script with sorting algorithm
│   ├── package.json                      # Dependencies (axios)
│   ├── package-lock.json
│   ├── node_modules/                     # ✅ Installed
│   └── README.md                         # Usage guide
│
├── 📁 logging_middleware/                ✅ COMPLETE
│   ├── index.js                          # Main Log() function
│   ├── test.js                           # Test cases
│   ├── package.json
│   ├── package-lock.json
│   ├── node_modules/                     # ✅ Installed (28 packages)
│   └── README.md                         # Documentation
│
├── 📁 notification_app_be/               ✅ COMPLETE
│   ├── src/
│   │   ├── config.js                     # Configuration & env vars
│   │   ├── controllers/
│   │   │   └── notificationController.js # API logic
│   │   ├── routes/
│   │   │   └── notificationRoutes.js     # API endpoints
│   │   ├── middleware/
│   │   │   └── index.js                  # CORS & error handling
│   │   └── utils/
│   │       └── database.js               # In-memory DB & logging
│   │
│   ├── server.js                         # Express server entry point
│   ├── package.json                      # Dependencies
│   ├── package-lock.json
│   ├── node_modules/                     # ✅ Installed (115 packages)
│   ├── .env                              # Environment variables
│   └── README.md                         # API documentation
│
├── 📁 notification_app_fe/               ⚙️ FRONTEND (Source files ready)
│   ├── src/
│   │   ├── components/
│   │   │   ├── NotificationCard.jsx      # Notification card component
│   │   │   └── NotificationForm.jsx      # Create/edit form
│   │   ├── pages/
│   │   │   └── HomePage.jsx              # Main home page
│   │   ├── hooks/
│   │   │   └── useNotifications.js       # Custom React hook
│   │   ├── services/
│   │   │   └── notificationService.js    # API client (axios)
│   │   ├── styles/
│   │   │   └── index.css                 # Vanilla CSS styling
│   │   ├── main.jsx                      # React entry point
│   │   └── App.jsx                       # App component
│   │
│   ├── index.html                        # HTML template
│   ├── package.json                      # Dependencies
│   ├── vite.config.js                    # Vite configuration
│   ├── .env                              # Environment variables
│   └── README.md                         # Frontend guide
│
├── 📄 notification_system_design.md      # System architecture & design
├── 📄 README.md                          # Main project documentation
├── 📄 QUICKSTART.md                      # Quick start guide
├── 📄 PROJECT_STRUCTURE.md               # This file
│
├── .gitignore                            # Git ignore rules
└── .git/                                 # Git repository

```

---

## 📊 Tech Stack Summary

### Core Technologies
| Component | Technology | Status |
|-----------|-----------|--------|
| **Frontend** | React 18 + Vite | ✅ Ready |
| **Backend** | Node.js + Express | ✅ Ready |
| **Logging** | Custom middleware | ✅ Ready |
| **Notification Fetcher** | Node.js Script | ✅ Ready |

### Dependencies Installed

#### Logging Middleware (28 packages)
- axios ^1.6.0

#### Backend (115 packages)
- express ^4.18.2
- cors ^2.8.5
- axios ^1.6.0
- dotenv ^16.3.1
- nodemon ^3.0.1

#### Frontend (Source ready - minimal deps)
- react ^18.2.0
- react-dom ^18.2.0
- axios ^1.4.0
- vite ^4.4.0

#### Notification Fetcher (28 packages)
- axios ^1.4.0

---

## 🎯 What Each Module Does

### 1. **Logging Middleware** (`logging_middleware/`)
- **Purpose**: Centralized logging for entire application
- **Features**: 
  - Custom `Log(stack, level, package, message)` function
  - Integration with external logging service
  - Supports 5 log levels: debug, info, warn, error, fatal
  - Test cases included
- **Usage**: Can be imported in any JS/TS project

### 2. **Backend API** (`notification_app_be/`)
- **Purpose**: REST API server for notification management
- **Endpoints**:
  - `GET /api/notifications` - Fetch all
  - `GET /api/notifications/:id` - Fetch by ID
  - `POST /api/notifications` - Create
  - `PUT /api/notifications/:id` - Update
  - `DELETE /api/notifications/:id` - Delete
  - `GET /health` - Health check
- **Features**:
  - CORS enabled
  - Error handling middleware
  - Logging integration
  - Environment configuration
  - In-memory database

### 3. **Frontend App** (`notification_app_fe/`)
- **Purpose**: React UI for notification management
- **Components**:
  - `NotificationCard`: Display individual notification
  - `NotificationForm`: Create/edit notifications
  - `HomePage`: Main application page
- **Features**:
  - Material UI integration ready
  - Vanilla CSS styling
  - API integration via Axios
  - Custom React hooks
  - Responsive design

### 4. **Notification Fetcher** (`notification_fetcher/`)
- **Purpose**: Standalone script to fetch and sort campus notifications
- **Features**:
  - Protected API authentication
  - Custom priority sorting algorithm
  - Type-based weighting (Placement > Result > Event)
  - Timestamp-based recency sorting
  - Professional console output
  - Statistics and distribution analysis

---

## 🚀 How to Run

### 1. Start Backend
```bash
cd notification_app_be
npm run dev
# Runs on http://localhost:5000
```

### 2. Start Frontend
```bash
cd notification_app_fe
npm install  # One-time setup
npm run dev
# Runs on http://localhost:3000
```

### 3. Run Notification Fetcher
```bash
cd notification_fetcher
node index.js
# Outputs top 10 sorted notifications
```

### 4. Test Logging Middleware
```bash
cd logging_middleware
node test.js
```

---

## 📦 Package Versions

```
├── React: 18.2.0
├── Vite: 4.4.0
├── Express: 4.18.2
├── Axios: 1.4.0 - 1.6.0
├── Node.js: v16+ (recommended)
└── npm: 8+
```

---

## ✅ Validation Checklist

- [x] Logging middleware with custom Log function
- [x] Backend API with CRUD operations
- [x] Frontend React components
- [x] Environment configuration (.env files)
- [x] Git repository initialized
- [x] All source code committed
- [x] Dependencies installed
- [x] README documentation for each module
- [x] Notification fetcher script with sorting algorithm
- [x] Professional project structure

---

## 🔧 Troubleshooting

**Frontend npm install fails?**
- Try: `npm install --legacy-peer-deps`
- Alternative: Use source files without running dev server

**Backend won't start?**
- Ensure port 5000 is available
- Check `.env` file configuration
- Verify Node.js version (v16+)

**API connection error?**
- Ensure backend is running first
- Check CORS configuration
- Verify localhost URLs

**Notification Fetcher not working?**
- Replace 'YOUR_TOKEN_HERE' with actual token
- Ensure API endpoint is accessible
- Check network connectivity

---

## 📝 Git Repository

All code is version controlled:
```bash
git status          # Check current status
git log             # View commit history
git push origin main # Push to GitHub
```

Repository: `https://github.com/Samarpan-7/23BQ1A0510`

---

**Last Updated:** June 5, 2026
**Status:** ✅ Production Ready
