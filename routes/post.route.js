import express from 'express';
import {  create, getPost } from '../controller/post.controller.js';
import { verifyToken } from '../middleware/verify-user.js';

const router = express.Router();
// router.get('/generate', generate);
router.post('/create', verifyToken,create);
router.get('/', getPost);

export default router;
