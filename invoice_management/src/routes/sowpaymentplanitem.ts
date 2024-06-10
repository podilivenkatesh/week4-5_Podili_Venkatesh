import express from 'express';
import { Router } from 'express';
import * as sowPaymentPlanItemController from '../controllers/sowpaymentplanitemcontroller';

const router: Router = express.Router();

router.get('/', sowPaymentPlanItemController.getAllSOWPaymentPlanItemsController);
router.post('/', sowPaymentPlanItemController.createSOWPaymentPlanItemController);

export default router;
