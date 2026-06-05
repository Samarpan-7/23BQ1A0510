import React, { useState, useEffect } from 'react';
import {
  Container,
  Button,
  Box,
  Typography,
  CircularProgress,
  Stack,
  AppBar,
  Toolbar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationCard from '../components/NotificationCard';
import NotificationForm from '../components/NotificationForm';
import useNotifications from '../hooks/useNotifications';
import * as notificationService from '../services/notificationService';
import '../styles/index.css';

const HomePage = () => {
  const { notifications, loading, error, refetch } = useNotifications();
  const [openForm, setOpenForm] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleEdit = (notification) => {
    setSelectedNotification(notification);
    setOpenForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notification?')) {
      try {
        await notificationService.deleteNotification(id);
        refetch();
      } catch (err) {
        console.error('Error deleting notification:', err);
      }
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (selectedNotification?.id) {
        await notificationService.updateNotification(selectedNotification.id, formData);
      } else {
        await notificationService.createNotification(formData);
      }
      setSelectedNotification(null);
      refetch();
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSelectedNotification(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            📬 Notification System
          </Typography>
          <Button
            color="inherit"
            startIcon={<AddIcon />}
            onClick={() => setOpenForm(true)}
            variant="outlined"
          >
            New Notification
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        {error && (
          <Box className="error">
            Error: {error}
          </Box>
        )}

        {loading ? (
          <Box className="loading">
            <CircularProgress />
            <Typography sx={{ marginTop: 2 }}>Loading notifications...</Typography>
          </Box>
        ) : notifications.length === 0 ? (
          <Box className="loading">
            <Typography>No notifications yet. Create one to get started!</Typography>
          </Box>
        ) : (
          <Stack spacing={2}>
            {notifications.map(notification => (
              <NotificationCard
                key={notification.id}
                notification={notification}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </Stack>
        )}
      </Container>

      <NotificationForm
        open={openForm}
        notification={selectedNotification}
        onClose={handleCloseForm}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default HomePage;
