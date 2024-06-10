import express from 'express';
import { Router } from 'express';
import * as clientController from '../controllers/clientcontroller';

const router: Router = express.Router();

router.get('/', clientController.getAllClientsController);
router.post('/', clientController.createClientController);

export default router;
