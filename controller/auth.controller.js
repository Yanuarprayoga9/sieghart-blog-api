import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../middleware/error.js';

export const signup = async (req, res, next) => {
  const { username,email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
  try {
    const validUser = await User.findOne({ email });
    
  } catch (error) {
    next(error);
  }
};
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
    try {
      const validUser = await User.findOne({ email });
      
    } catch (error) {
      next(error);
    }
  };