import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const NotificationCard = ({ notification, onEdit, onDelete }) => {
  return (
    <Card sx={{ marginBottom: 2, '&:hover': { boxShadow: 6 } }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {notification.type || 'Notification'}
        </Typography>
        <Typography variant="h5" component="div">
          {notification.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
          {notification.message}
        </Typography>
        <Box sx={{ marginTop: 2, display: 'flex', gap: 1 }}>
          <Typography variant="caption" color="textSecondary">
            Status: {notification.status || 'Pending'}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Created: {new Date(notification.createdAt).toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          startIcon={<EditIcon />}
          onClick={() => onEdit(notification)}
          color="primary"
        >
          Edit
        </Button>
        <Button
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(notification.id)}
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default NotificationCard;
