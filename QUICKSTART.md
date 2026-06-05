# 🚀 Quick Start Guide - Notification System

## ✅ What's Already Installed

1. **✅ Logging Middleware** (`logging_middleware/`)
   - Reusable Log function
   - Test cases ready
   - Dependencies installed

2. **✅ Backend** (`notification_app_be/`)
   - Express server configured
   - API endpoints ready
   - Database utilities set up
   - Dependencies installed
   - Environment configured

3. **⚙️ Frontend** (`notification_app_fe/`)
   - React + Vite structure
   - Material UI components
   - All source files created
   - Dependencies: installing...

---

## 🏃 How to Run

### Terminal 1: Start Backend
```bash
cd d:\23BQ1A0510\notification_app_be
npm run dev
```
✅ Backend will run on: `http://localhost:5000`

### Terminal 2: Start Frontend
```bash
cd d:\23BQ1A0510\notification_app_fe
npm run dev
```
✅ Frontend will run on: `http://localhost:3000`

### Terminal 3: Test Logging Middleware
```bash
cd d:\23BQ1A0510\logging_middleware
node test.js
```

---

## 📡 Test with Postman

### Create a Notification
```
POST http://localhost:5000/api/notifications
Content-Type: application/json

{
  "title": "Test Notification",
  "message": "This is a test",
  "type": "info",
  "status": "pending"
}
```

### Get All Notifications
```
GET http://localhost:5000/api/notifications
```

### Delete a Notification
```
DELETE http://localhost:5000/api/notifications/{id}
```

---

## 📁 Project Structure

```
23BQ1A0510/
├── logging_middleware/          ✅ DONE
│   ├── index.js
│   ├── test.js
│   └── package.json
│
├── notification_app_be/         ✅ DONE
│   ├── server.js
│   ├── src/
│   │   ├── config.js
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── package.json
│   └── .env
│
├── notification_app_fe/         ⚙️ INSTALLING
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── styles/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── notification_system_design.md
```

---

## 🔧 Troubleshooting

### Frontend npm install fails?
Try:
```bash
cd notification_app_fe
npm install --legacy-peer-deps
```

### Port already in use?
- Backend: Change PORT in `.env` (default 5000)
- Frontend: Vite will prompt for different port (default 3000)

### API connection error?
- Ensure backend is running on `http://localhost:5000`
- Check `.env` files for correct URLs

---

## 📊 Features Ready

✅ CRUD operations for notifications
✅ REST API with Express
✅ React UI with Material Design
✅ Logging integration
✅ CORS enabled
✅ Environment configuration
✅ Error handling

---

## 🔗 GitHub Repository

All code committed and pushed to:
```
https://github.com/Samarpan-7/23BQ1A0510
```

---

## 📝 API Documentation

See [notification_app_be/README.md](notification_app_be/README.md) for full API details.

---

**Last Updated:** June 5, 2026
**Status:** Ready for Development ✅
