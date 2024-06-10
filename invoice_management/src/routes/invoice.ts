import express from 'express';
import { Router } from 'express';
import * as invoiceController from '../controllers/invoicecontroller';

const router: Router = express.Router();

router.get('/', invoiceController.getAllInvoicesController);
router.post('/', invoiceController.createInvoiceController);

export default router;
