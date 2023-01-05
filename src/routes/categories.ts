import express from "express";
import { createCategory, getCategories } from "../controllers/categories";
import { validatorCreateCategory } from "../validators/categories";
const router = express.Router();

router.get("/", getCategories)
router.post("/", validatorCreateCategory, createCategory)

export {router};