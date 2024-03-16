import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryController.js";
import auth from "../middlewares/authMiddleware.js";
import { validateCategory } from "../middlewares/categoryValidator.js";

const categoryRoutes = express.Router();
categoryRoutes.post("/create", auth, validateCategory, createCategory);
categoryRoutes.put("/update/:id", auth, validateCategory, updateCategory);
categoryRoutes.delete("/delete/:id", auth, deleteCategory);
categoryRoutes.get("/", auth, getCategories);

export default categoryRoutes;
