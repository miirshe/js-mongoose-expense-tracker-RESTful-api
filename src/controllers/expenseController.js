import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../utils/responseUtils.js";
import { Expense } from "../models/expenseModel.js";
export async function createExpense(req, res) {
  const { amount, startDate, endDate, description, payment, categoryId } =
    req.body;
  const userId = req.userId;
  try {
    const expense = await Expense.create({
      amount,
      startDate,
      endDate,
      description,
      payment,
      categoryId,
      userId,
    });
    if (!expense) {
      return sendErrorResponse(res, new Error("Expense creation failed"));
    }
    return sendSuccessResponse(res, "Expense successfully created");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function updateExpense(req, res) {
  const { amount, startDate, endDate, description, payment, categoryId } =
    req.body;
  const id = req.params.id;
  try {
    const expense = await Expense.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          amount,
          startDate,
          endDate,
          description,
          payment,
          categoryId,
        },
      }
    );
    if (!expense) {
      return sendErrorResponse(res, new Error("Expense update failed"));
    }
    return sendSuccessResponse(res, "Expense successfully updated");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteExpense(req, res) {
  const id = req.params.id;
  try {
    const expense = await Expense.findByIdAndDelete({ _id: id });

    if (!expense) {
      return sendErrorResponse(res, new Error("Expense delete failed"));
    }
    return sendSuccessResponse(res, "Expense successfully delete");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getExpenses(req, res) {
  const userId = req.userId;
  try {
    const expenses = await Expense.find({ userId });
    if (expenses.length == 0) {
      return sendErrorResponse(res, "Expenses not found");
    }
    return sendSuccessResponse(res, expenses);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
