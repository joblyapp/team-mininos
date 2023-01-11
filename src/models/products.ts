import mongoose, { model, Schema } from "mongoose";
import IProduct from "../interfaces/product.interface";

const ProductsSchema = new Schema<IProduct>(
    {
        name        : { type: String, unique: true },
        description : { type: String },
        price       : { type: mongoose.Types.Decimal128 },
        status      : { type: String, enum: ['OK', 'NO_STOCK'], default: 'OK' },
        category_id : { type: String },
    },{
        timestamps  : true,
    }
)

const productsModel = model<IProduct>('products', ProductsSchema);
export default productsModel;