import express from "express";
import { createCategory, getCategories, deleteCategory, updateCategory } from "../controllers/categories";
import { validatorCreateCategory, validatorGetCategory, validatorUpdateCategory } from "../validators/categories";
const router = express.Router();

router.get("/", getCategories);
router.post("/", validatorCreateCategory, createCategory);
router.put("/:id", validatorUpdateCategory, updateCategory);
router.delete("/:id", validatorGetCategory, deleteCategory);

export {router};