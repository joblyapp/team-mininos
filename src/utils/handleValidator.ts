import { validationResult } from "express-validator";

const validationResults = (req:any, res:any, next:any) => {
    try{
        validationResult(req).throw();
        return next();
    }
    catch(error:any)
    {
        res.status(403);
        res.send({errors: error.array()})
    }
}

export default validationResults;