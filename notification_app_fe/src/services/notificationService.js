import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Get all notifications
export const getNotifications = async () => {
  try {
    const response = await apiClient.get('/notifications');
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

// Get notification by ID
export const getNotificationById = async (id) => {
  try {
    const response = await apiClient.get(`/notifications/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notification:', error);
    throw error;
  }
};

// Create notification
export const createNotification = async (data) => {
  try {
    const response = await apiClient.post('/notifications', data);
    return response.data;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

// Update notification
export const updateNotification = async (id, data) => {
  try {
    const response = await apiClient.put(`/notifications/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating notification:', error);
    throw error;
  }
};

// Delete notification
export const deleteNotification = async (id) => {
  try {
    const response = await apiClient.delete(`/notifications/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting notification:', error);
    throw error;
  }
};

export default apiClient;
