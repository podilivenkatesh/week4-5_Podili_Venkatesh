import { Router } from 'express';
import { createTimesheet, getTimesheets } from '../controller/timesheetController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createTimesheet);
router.get('/', authMiddleware, getTimesheets)

export default router;
