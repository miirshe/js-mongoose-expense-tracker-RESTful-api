import mongoose from "mongoose";

const { model, Schema } = mongoose;

const expenseSchema = Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required:true
    },
    description: {
      type: String,
    },
    payment: {
      type: String,
    },
    categoryId: {
      type: Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    userId: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Expense = model.Expense || new model("Expense", expenseSchema);
