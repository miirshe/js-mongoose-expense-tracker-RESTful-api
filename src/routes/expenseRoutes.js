import express from "express";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "../controllers/expenseController.js";
import { validateExpense } from "../middlewares/expenseValidator.js";
import auth from "../middlewares/authMiddleware.js";

const expenseRoutes = express.Router();
expenseRoutes.post("/create", auth, validateExpense, createExpense);
expenseRoutes.put("/update/:id", auth, validateExpense, updateExpense);
expenseRoutes.delete("/delete/:id", deleteExpense);
expenseRoutes.get("/", auth, getExpenses);
export default expenseRoutes;
