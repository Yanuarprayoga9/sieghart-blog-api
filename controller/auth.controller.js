/* eslint-disable no-underscore-dangle */
/* eslint-disable new-cap */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcryptjs from 'bcryptjs';
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
    if (!validUser) {
      return next(errorHandler(404, 'User Not Found'));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET,
    );
    const { password: pass, ...rest } = validUser._doc;
    return res
      .status(200)
      .cookie('access_token', token)
      .json(rest);
  } catch (error) {
    return next(error);
  }
};

export const me = async (req, res) => {
  const { page } = req.query;
  const perPage = 1;
  let userDoc;
  if (page !== '') {
    userDoc = await User.find({}).limit(perPage).skip(page);
  }
  userDoc = await User.find({});
  res.json(userDoc);
};
