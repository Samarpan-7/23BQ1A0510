import * as db from '../utils/database.js';

export const getAllNotifications = (req, res) => {
  try {
    const notifications = db.getAllNotifications();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getNotification = (req, res) => {
  try {
    const { id } = req.params;
    const notification = db.getNotificationById(id);
    
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }
    
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNotification = (req, res) => {
  try {
    const { title, message, type, status } = req.body;
    
    if (!title || !message) {
      return res.status(400).json({ error: 'Title and message are required' });
    }
    
    const notification = db.createNotification({
      title,
      message,
      type: type || 'info',
      status: status || 'pending'
    });
    
    // Log the event
    db.logEvent('backend', 'info', 'controller', `Notification created: ${title}`);
    
    res.status(201).json(notification);
  } catch (error) {
    db.logEvent('backend', 'error', 'controller', `Error creating notification: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

export const updateNotification = (req, res) => {
  try {
    const { id } = req.params;
    const { title, message, type, status } = req.body;
    
    const notification = db.updateNotification(id, {
      title,
      message,
      type,
      status
    });
    
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }
    
    db.logEvent('backend', 'info', 'controller', `Notification updated: ${id}`);
    
    res.json(notification);
  } catch (error) {
    db.logEvent('backend', 'error', 'controller', `Error updating notification: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

export const deleteNotification = (req, res) => {
  try {
    const { id } = req.params;
    const deleted = db.deleteNotification(id);
    
    if (!deleted) {
      return res.status(404).json({ error: 'Notification not found' });
    }
    
    db.logEvent('backend', 'info', 'controller', `Notification deleted: ${id}`);
    
    res.json({ message: 'Notification deleted successfully' });
  } catch (error) {
    db.logEvent('backend', 'error', 'controller', `Error deleting notification: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};
