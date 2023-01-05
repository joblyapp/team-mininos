import { Request, Response } from "express";
import { matchedData } from "express-validator/src/matched-data";
import categoriesModel from "../models/categories";
import handleHttpError from "../utils/handleError";

async function getCategories(req: Request, res: Response): Promise<void>{
    try{
        const data = await categoriesModel.find({});
        res.send(data);
    }
    catch(error){
        handleHttpError(res, "ERROR_GETS_CATEGORIES");
    }
}

async function createCategory(req: Request, res: Response): Promise<void>{
    try{
        const body = matchedData(req);
        const data = await categoriesModel.create(body);
        res.send(data);
    }catch(error){
        handleHttpError(res, "ERROR_CREATE_CATEGORY");
    }
}

export {getCategories, createCategory};