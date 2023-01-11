import mongoose from "mongoose";

export default interface IProduct {
    name        : string,
    description : string,
    price       : mongoose.Types.Decimal128,
    status      : string,
    category_id : string,
}