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
        res.status(201)
        res.send(data);
    }catch(error:any){
        handleHttpError(res, error.message);
    }
}

async function updateCategory(req: Request, res: Response): Promise<void>{
    try{
        const {id, ...body} = matchedData(req);
        const data = await categoriesModel.findOneAndUpdate(id,body, {new:true});
        res.send(data);
    }catch(error:any){
        handleHttpError(res, error.message);
    }
}

async function deleteCategory(req: Request, res: Response): Promise<void>{
    try{
        const bodyResponse = matchedData(req);
        const data = await categoriesModel.deleteOne({_id: bodyResponse.id})
        if (data.deletedCount !==0)
            res.status(204);
        res.send(data);
    }catch(error:any){
        handleHttpError(res, error.message);
    }
}

export {getCategories, createCategory, updateCategory, deleteCategory};