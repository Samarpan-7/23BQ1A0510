import express from 'express';
import * as notificationController from '../controllers/notificationController.js';

const router = express.Router();

// GET all notifications
router.get('/', notificationController.getAllNotifications);

// GET notification by ID
router.get('/:id', notificationController.getNotification);

// POST create notification
router.post('/', notificationController.createNotification);

// PUT update notification
router.put('/:id', notificationController.updateNotification);

// DELETE notification
router.delete('/:id', notificationController.deleteNotification);

export default router;
