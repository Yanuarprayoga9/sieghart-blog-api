import jwt from "jsonwebtoken";
import errorHandler from "./error.js";
// eslint-disable-next-line import/prefer-default-export, consistent-return
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token;
  // Memeriksa apakah header "Authorization" ada
  if (typeof authHeader !== "undefined") {
    // Token biasanya disimpan dalam format "Bearer <token>"
    // Jadi kita memisahkan token dari string dengan spasi
    token = authHeader.split(" ")[1];

    // Menambahkan token ke objek permintaan untuk digunakan di rute berikutnya jika diperlukan
    req.token = token;
  }

  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }
  // eslint-disable-next-line consistent-return
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized"));
    }
    req.user = user;
    next();
  });
};
