import express from 'express';
import {  create, deletepost, getPost, updatepost } from '../controller/post.controller.js';
import { verifyToken } from '../middleware/verify-user.js';

const router = express.Router();
router.post('/create', verifyToken, create)
router.get('/getposts', getPost)
router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)

export default router;
