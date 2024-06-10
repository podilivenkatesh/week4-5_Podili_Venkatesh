import express from 'express';
import { Router } from 'express';
import * as sowPaymentPlanController from '../controllers/sowpaymentplancontroller';

const router: Router = express.Router();

router.get('/', sowPaymentPlanController.getAllSOWPaymentPlansController);
router.post('/', sowPaymentPlanController.createSOWPaymentPlanController);

export default router;
