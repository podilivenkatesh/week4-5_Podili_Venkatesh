import express from 'express';
import { Router } from 'express';
import * as invoiceLineItemController from '../controllers/invoicelineitemcontroller';

const router: Router = express.Router();

router.get('/', invoiceLineItemController.getAllInvoiceLineItemsController);
router.post('/', invoiceLineItemController.createInvoiceLineItemController);

export default router;

