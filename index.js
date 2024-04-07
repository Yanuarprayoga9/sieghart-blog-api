import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middleware/error.js";
import { verifyToken } from "./middleware/verify-user.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sieghart-blog-api.vercel.app"],
    credentials: true,
  })
);
// const allowedOrigins = ['https://sieghart-blog.vercel.app','http://localhost:5173/sign-in'];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

/// /// ROUTES /////
app.use("/v1/auth", authRoutes);
app.use(postRoutes);
/// / ROUTES END ///

app.get("/", (req, res) => {
  res.send({ status: "OK", message: "API SERVICE RUNNING" });
});
app.get("/v1", (req, res) => {
  res.send({ status: "OK", message: "API SERVICE RUNNING" });
});
app.get("/auth-check", verifyToken, (req, res) => {
  res.send(req.user);
});
app.get("*", (req, res, next) => {
  next(errorHandler(404, "NOT FOUND"));
});

app.listen(5000, () => console.log("Server ready "));

// app.use((err, req, res) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || 'Internal Server Error';
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
