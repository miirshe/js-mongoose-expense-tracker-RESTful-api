import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../config/initialConfig.js";
export default function auth(req, res, next) {
  const token = req.header.Authorization;
  if (!token) {
    return res.json({ message: "Authorization  denied" });
  }
  try {
    const decoded = jwt.verify(token, jwtSecretKey);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    if (error.name == "JsonWebTokenError") {
      if (error.message.includes("expired")) {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(500).json({ message: "Token invalid" });
      }
    } else {
      console.error(error);
      return res.status(500).json({ message: "Error verifying token" });
    }
  }
}
