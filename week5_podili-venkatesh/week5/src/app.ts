import express from 'express';
import authRoutes from './routes/authRoutes';
import shiftRoutes from './routes/shiftRoutes';
import timesheetRoutes from './routes/timesheetRoutes';
import reportRoutes from './routes/reportRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/shift', shiftRoutes);
app.use('/timesheet', timesheetRoutes);
app.use('/report', reportRoutes);

export default app;
