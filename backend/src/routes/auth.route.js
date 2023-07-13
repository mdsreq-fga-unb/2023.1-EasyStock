import { Router } from 'express';
const router = Router();

import { loginAdmin, loginEmployee, getUsername } from '../controllers/auth.controller.js';

router.post('/admin', loginAdmin);
router.post('/funcionario', loginEmployee);
router.post('/validate', getUsername);

export default router;

