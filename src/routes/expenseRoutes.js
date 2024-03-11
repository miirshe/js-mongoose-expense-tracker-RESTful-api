import express from "express";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "../controllers/expenseController.js";

const expenseRoutes = express.Router();
expenseRoutes.post("/create", createExpense);
expenseRoutes.put("/update/:id", updateExpense);
expenseRoutes.delete("/delete/:id", deleteExpense);
expenseRoutes.delete("/", getExpenses);
export default expenseRoutes;
