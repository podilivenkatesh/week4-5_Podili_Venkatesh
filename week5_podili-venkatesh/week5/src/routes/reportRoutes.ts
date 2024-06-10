import { Router } from 'express';
import { getReport } from '../controller/reportController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, getReport);

export default router;
