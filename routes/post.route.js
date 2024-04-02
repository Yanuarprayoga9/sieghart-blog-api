import express from 'express';
import { generate, getPost } from '../controller/post.controller.js';

const router = express.Router();
router.get('/generate', generate);
router.get('/post', getPost);

export default router;
