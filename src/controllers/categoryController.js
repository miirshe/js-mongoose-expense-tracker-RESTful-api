import { Category } from "../models/categoryModel.js";
import {
  sendErrorResponse,
  sendSuccessResponse,
} from "../utils/responseUtils.js";
export async function createCategory(req, res) {
  const { name, budget } = req.body;
  const userId = req.userId;
  try {
    let category = await Category.create({ name, budget, userId });
    if (!category) {
      return sendErrorResponse(res, new Error("Category creation failed"));
    }
    return sendSuccessResponse(res, "Category successfully created");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function updateCategory(req, res) {
  const { name, budget } = req.body;
  const id = req.params.id;

  try {
    let category = await Category.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: name,
          budget: budget,
        },
      }
    );
    if (!category) {
      return sendErrorResponse(res, new Error("Category not found"));
    }
    return sendSuccessResponse(res, "Category successfully updated");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function deleteCategory(req, res) {
  const id = req.params.id;
  try {
    const category = await Category.findByIdAndDelete({ _id: id });
    if (!category) {
      return res.status(401).json({ message: "Category not found" });
    }
    return sendSuccessResponse(res, "Category successfully deleted");
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

export async function getCategories(req, res) {
  try {
    const userId = req.userId;
    const categories = await Category.find({ userId }).sort({ name: "desc" });
    if (categories.length == 0) {
      return sendErrorResponse(res, "Categories not found");
    }
    return sendSuccessResponse(res, categories);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
