import { check } from "express-validator";
import validateResults from "../utils/handleValidator";

const validatorGetCategory = [
    check("id").exists().notEmpty().isMongoId().withMessage("Must be a valid id"),
    (req:any, res:any, next:any) => {
        return validateResults(req,res,next);
    },
]

const validatorCreateCategory = [
    check("name").exists().notEmpty().isString(),
    check("description").exists(),
    (req:any, res:any, next:any) => {
        return validateResults(req,res,next);
    },
];

const validatorUpdateCategory = [
    check("id").exists().notEmpty().isMongoId().withMessage("Must be a valid id"),
    check("name").exists().notEmpty().isString(),
    check("description").exists(),
    (req:any, res:any, next:any) => {
        return validateResults(req,res,next);
    },
];

export {validatorCreateCategory, validatorGetCategory, validatorUpdateCategory};