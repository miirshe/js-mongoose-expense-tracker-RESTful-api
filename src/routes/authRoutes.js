import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import auth from "../middlewares/authMiddleware.js";

const authRoutes = express.Router();
authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/", auth, getUser);

export default authRoutes;
