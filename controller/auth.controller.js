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
      process.env.JWT_SECRET
    );

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        origin: "http://localhost:5173",
        httpOnly: true,
      }).cookie("checkToken", token, {
        origin: "http://localhost:5173",
        secure: true,
        sameSite: "none",
      })
      .json(rest);
  } catch (error) {
    return next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
};