import { Router } from 'express';
const router = Router();

import { login, getUsername } from '../controllers/auth.controller.js';

router.post('/login', login);
//router.post('/funcionario', login);
router.post('/validate', getUsername);

export default router;

