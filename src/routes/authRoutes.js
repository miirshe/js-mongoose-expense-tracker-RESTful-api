import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import auth from "../middlewares/authMiddleware.js";
import {
  validateUserLogin,
  validateUserRegister,
} from "../middlewares/validator/authValidator.js";

const authRoutes = express.Router();
authRoutes.post("/register", validateUserRegister, registerUser);
authRoutes.post("/login", validateUserLogin, loginUser);
authRoutes.get("/", auth, getUser);

export default authRoutes;
