import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import errorHandler from '../middleware/error.js';
import User from '../model/user.model.js';

dotenv.config();

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username
    || !email
    || !password
    || username === ''
    || email === ''
    || password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) next(errorHandler(400, 'User Already registered'));
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
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
    console.log(validUser);
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign(validUser._doc, process.env.JWT_SECRET);
    const t = jwt.sign(validUser._doc, process.env.JWT_SECRET);
    res.json({ validUser, token });
  } catch (error) {
    next(error);
  }
};
