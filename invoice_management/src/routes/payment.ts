import express from 'express';
import { Router } from 'express';
import * as paymentController from '../controllers/paymentcontroller';

const router: Router = express.Router();

router.get('/', paymentController.getAllPaymentsController);
router.post('/', paymentController.createPaymentController);

export default router;
