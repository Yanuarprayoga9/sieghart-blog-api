<<<<<<< HEAD
import jwt from 'jsonwebtoken';
=======
/* eslint-disable no-underscore-dangle */
/* eslint-disable new-cap */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
>>>>>>> dev
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import errorHandler from '../middleware/error.js';
import User from '../model/user.model.js';

dotenv.config();
<<<<<<< HEAD

=======
>>>>>>> dev
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
<<<<<<< HEAD
    const { password, ...rest } = validUser._doc;

    console.log(rest);
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign(validUser._doc, process.env.JWT_SECRET);
    const t = jwt.sign(validUser._doc, process.env.JWT_SECRET);
    res.json({ validUser, token });
=======
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
>>>>>>> dev
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
