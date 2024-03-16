import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { jwtSecretKey } from "../config/initialConfig.js";

export async function registerUser(req, res) {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashed = await hashPassword(password);
    user = await User.create({ name, email, password: hashed });
    if (!user) {
      return res.status(404).json({ message: "something went wrong" });
    }
    return res.status(201).json({ message: "User successfully created" });
  } catch (error) {
    console.log("error creating user", error);
    return res.status(500).json({ message: "error creating user" });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "invalid email and password" });
    }
    const compared = await comparePassword(password, user.password);
    if (!compared) {
      return res.status(400).json({ message: "invalid email and password" });
    }
    const payload = { userId: user._id };
    const token = await jwt.sign(payload, jwtSecretKey, { expiresIn: '1hr'});
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: false,
    });
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Error creating auth token" });
  }
}

export async function getUser(req, res) {
  const userId = req.userId;
  try {
    let user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(400).json({ message: "Not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Error getting user" });
  }
}
