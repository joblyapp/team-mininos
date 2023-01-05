import { check } from "express-validator";
import validateResults from "../utils/handleValidator";

const validatorCreateCategory = [
    check("name").exists().notEmpty().isString(),
    check("description").exists(),
    (req:any, res:any, next:any) => {
        return validateResults(req,res,next);
    },
];

export {validatorCreateCategory};