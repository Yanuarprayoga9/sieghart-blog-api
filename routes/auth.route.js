import express from 'express';
<<<<<<< HEAD
import { signin, signup } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
=======
import { me, signin, signup } from '../controller/auth.controller.js';
import { verifyToken } from '../middleware/verify-user.js';

const router = express.Router();
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/me', verifyToken, me);
>>>>>>> dev

export default router;
