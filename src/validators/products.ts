import { check } from "express-validator";
import validateResults from "../utils/handleValidator";

const validatorGetProduct = [
    check("id").exists().notEmpty().isMongoId().withMessage("Must be a valid id"),
    (req:any, res:any, next:any) => {
        return validateResults(req,res,next);
    },
]

const validatorCreateProduct = [
    check("name").exists().notEmpty().isString(),
    check("description").exists(),
    check("price").exists().notEmpty().isNumeric(),
    check("category_id").exists().notEmpty().isMongoId(),
    (req:any, res:any, next:any) => {
        return validateResults(req,res,next);
    },
];

export {validatorCreateProduct, validatorGetProduct};