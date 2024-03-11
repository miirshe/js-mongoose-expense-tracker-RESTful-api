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
    userId: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = model.Category || new model("Category", categorySchema);
