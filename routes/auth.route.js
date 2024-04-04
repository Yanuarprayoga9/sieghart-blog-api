import express from 'express';
import { me, signin, signout, signup } from '../controller/auth.controller.js';
import { verifyToken } from '../middleware/verify-user.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', verifyToken, me);
router.delete('/signout', verifyToken, signout);

export default router;
