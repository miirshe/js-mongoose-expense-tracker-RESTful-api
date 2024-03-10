import mongoose from "mongoose";

const { model, Schema } = mongoose;

const expenseSchema = Schema(
  {
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    date: {
      type: Date,
      default: () => Date.now(),
    },
    description: {
      type: String,
    },
    payment: {
      type: String,
    },
    category_id: {
      type: Schema.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

export const Expense = model.Expense || new model("Expense", expenseSchema);
