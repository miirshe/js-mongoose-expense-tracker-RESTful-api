import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../controllers/categoryController.js";
import auth from "../middlewares/authMiddleware.js";

const categoryRoutes = express.Router();
categoryRoutes.post("/create", auth , createCategory);
categoryRoutes.put("/update/:id", updateCategory);
categoryRoutes.delete("/delete/:id", deleteCategory);
categoryRoutes.get("/", auth , getCategories);

export default categoryRoutes;
