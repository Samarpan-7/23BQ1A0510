# Frontend Notification Application

React-based frontend for the Notification System with Material UI styling.

## Setup

```bash
npm install
npm run dev
```

The app will run on `http://localhost:3000`

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── NotificationCard.jsx
│   └── NotificationForm.jsx
├── pages/            # Page components
│   └── HomePage.jsx
├── hooks/            # Custom React hooks
│   └── useNotifications.js
├── services/         # API services
│   └── notificationService.js
├── styles/           # CSS stylesheets
│   └── index.css
└── main.jsx          # Entry point
```

## Features

- ✅ View all notifications
- ✅ Create new notifications
- ✅ Edit existing notifications
- ✅ Delete notifications
- ✅ Material UI components
- ✅ Responsive design
- ✅ Axios API integration

## Build & Deploy

```bash
npm run build
npm run preview
```

## Technologies Used

- React 18
- Vite
- Material UI 5
- Axios
- Vanilla CSS

## API Integration

The frontend connects to the backend API at `http://localhost:5000/api`

All requests are handled through the `notificationService.js` which provides:
- `getNotifications()` - Fetch all notifications
- `getNotificationById(id)` - Fetch single notification
- `createNotification(data)` - Create new notification
- `updateNotification(id, data)` - Update notification
- `deleteNotification(id)` - Delete notification
