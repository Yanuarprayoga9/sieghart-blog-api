import jwt from 'jsonwebtoken';
import errorHandler from './error.js';
// eslint-disable-next-line import/prefer-default-export, consistent-return
export const verifyToken = (req, res, next) => {
  console.log(req.cookies)
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
