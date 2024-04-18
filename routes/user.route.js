import express from 'express';
import { verifyToken } from '../middleware/verify-user.js';
import { deleteUser, getUser, getUsers, updateUser } from '../controller/user.controller.js';

const router = express.Router();
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router;
