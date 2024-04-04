import express from 'express';
import { me, signin, signup } from '../controller/auth.controller.js';
import { verifyToken } from '../middleware/verify-user.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', verifyToken, me);
router.get('/signout', verifyToken, me);

export default router;
