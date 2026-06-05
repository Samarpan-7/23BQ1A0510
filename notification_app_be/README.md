# Backend API Notification Service

Backend server for the Notification System built with Node.js and Express.

## Setup

```bash
npm install
npm run dev
```

## API Endpoints

### Get All Notifications
```
GET /api/notifications
```

### Get Notification by ID
```
GET /api/notifications/:id
```

### Create Notification
```
POST /api/notifications
Content-Type: application/json

{
  "title": "Notification Title",
  "message": "Notification Message",
  "type": "info",
  "status": "pending"
}
```

### Update Notification
```
PUT /api/notifications/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "message": "Updated Message",
  "type": "info",
  "status": "sent"
}
```

### Delete Notification
```
DELETE /api/notifications/:id
```

## Environment Variables

Create `.env` file:
```
PORT=5000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000
LOG_API_URL=http://4.224.186.213/evaluation-service/logs
```

## Logging Integration

The backend automatically logs events to the external logging service:
- All notification operations are logged
- Errors are captured with stack trace
- Uses the logging middleware package
