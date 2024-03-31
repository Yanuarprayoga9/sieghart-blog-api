import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/error.js";
import { verifyToken } from "./middleware/verify-user.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
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

app.use(express.json());
app.use(cookieParser());

////// ROUTES /////
app.use(authRoutes);
//// ROUTES END ///

app.get("/", (req, res) => {
  res.send({ status: "OK", message: "API SERVICE RUNNING" });
});

app.get("/auth-check", verifyToken, (req, res, next) => {
  res.send(req.user);
});
app.get("*", (req, res, next) => {
  next(errorHandler(404, "NOT FOUND"));
});

app.listen(3000, () => console.log("Server ready on port 3000."));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
