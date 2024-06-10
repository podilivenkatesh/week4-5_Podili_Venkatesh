import express from 'express';
import { Router } from 'express';
import * as organizationController from '../controllers/organizationcontroller';

const router: Router = express.Router();

router.get('/', organizationController.getAllOrganizationsController);
router.post('/', organizationController.createOrganizationController);

export default router;
