import express from 'express';
import { google, me, signin, signup } from '../controller/auth.controller.js';
import { verifyToken } from '../middleware/verify-user.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', verifyToken, me);
router.post('/google', google);

export default router;
