import 'dotenv/config';

export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
export const LOG_API_URL = process.env.LOG_API_URL || 'http://4.224.186.213/evaluation-service/logs';
