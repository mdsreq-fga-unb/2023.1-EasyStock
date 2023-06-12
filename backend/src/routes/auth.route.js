import { Router } from 'express';
const router = Router();

import { loginAdmin, getUsername } from '../controllers/auth.controller.js';

router.post('/admin', loginAdmin);
router.post('/validate', getUsername);

export default router;

