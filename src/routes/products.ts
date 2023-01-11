import express from "express";
import { createProduct, getProduct } from "../controllers/products";
import { validatorCreateProduct, validatorGetProduct } from "../validators/products";
const router = express.Router();

router.get("/:id", validatorGetProduct, getProduct)
router.post("/", validatorCreateProduct, createProduct);

export {router};