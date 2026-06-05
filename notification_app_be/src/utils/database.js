import axios from 'axios';
import { LOG_API_URL } from '../config.js';

// In-memory database (replace with real DB in production)
let notifications = [
  {
    id: '1',
    title: 'Welcome',
    message: 'Welcome to Notification System',
    type: 'info',
    status: 'read',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

let nextId = 2;

export const getAllNotifications = () => {
  return notifications;
};

export const getNotificationById = (id) => {
  return notifications.find(n => n.id === id);
};

export const createNotification = (data) => {
  const notification = {
    id: String(nextId++),
    ...data,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  notifications.push(notification);
  return notification;
};

export const updateNotification = (id, data) => {
  const index = notifications.findIndex(n => n.id === id);
  if (index === -1) return null;
  
  notifications[index] = {
    ...notifications[index],
    ...data,
    updatedAt: new Date()
  };
  return notifications[index];
};

export const deleteNotification = (id) => {
  const index = notifications.findIndex(n => n.id === id);
  if (index === -1) return false;
  
  notifications.splice(index, 1);
  return true;
};

// Log to external logging service
export const logEvent = async (stack, level, packageName, message) => {
  try {
    const response = await axios.post(LOG_API_URL, {
      stack,
      level,
      package: packageName,
      message
    });
    return response.data;
  } catch (error) {
    console.error('Logging failed:', error.message);
  }
};
