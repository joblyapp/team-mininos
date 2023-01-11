import { Request, Response } from "express";
import { matchedData } from "express-validator/src/matched-data";
import { formatToDecimal } from "../helpers/formatValues";
import productsModel from "../models/products";
import handleHttpError from "../utils/handleError";

async function getProduct(req: Request, res: Response): Promise<void> {
  try {
    const { id } = matchedData(req);
    const data = await productsModel.find({_id: id})

    !!data.length ? (res.send(data)) : (res.status(404), res.send({}))
    
  } catch (error:any) {
    handleHttpError(res, error.message);
  }
}

async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const body = matchedData(req);
    body.price = formatToDecimal(body.price)

    const data = await productsModel.create(body);
    res.status(201);
    res.send(data);
  } catch (error: any) {
    handleHttpError(res, error.message);
  }
}

export { createProduct, getProduct };
