import mongoose from "mongoose";

const { model, Schema } = mongoose;

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Category = model.Category || new model("Category", categorySchema);
