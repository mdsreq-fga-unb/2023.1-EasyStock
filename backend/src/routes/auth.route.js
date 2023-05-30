import { Router } from 'express';
const router = Router();

import { loginAdmin } from '../controllers/auth.controller.js';

router.post('/admin', loginAdmin);

export default router;

