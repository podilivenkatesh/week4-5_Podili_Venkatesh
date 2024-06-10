import express from 'express';
import { Router } from 'express';
import * as sowController from '../controllers/sowcontroller';

const router: Router = express.Router();

router.get('/', sowController.getAllSOWsController);
router.post('/', sowController.createSOWController);

export default router;
