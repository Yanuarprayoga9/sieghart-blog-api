import express from 'express';
import { verifyToken } from '../middleware/verify-user.js';
import { deleteUser, updateUser } from '../controller/user.controller.js';

const router = express.Router();
router.put('/update/:userId',verifyToken, updateUser);
router.delete('/delete/:userId',verifyToken,deleteUser);

export default router;
