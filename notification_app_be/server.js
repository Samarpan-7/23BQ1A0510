import express from 'express';
import { PORT, NODE_ENV } from './src/config.js';
import { corsMiddleware, errorHandler, requestLogger } from './src/middleware/index.js';
import notificationRoutes from './src/routes/notificationRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(corsMiddleware);
app.use(requestLogger);

// Routes
app.use('/api/notifications', notificationRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${NODE_ENV}`);
  console.log(`✅ Press Ctrl+C to stop\n`);
});

export default app;
