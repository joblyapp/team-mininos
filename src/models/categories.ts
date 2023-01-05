import { model, Schema } from "mongoose";
import ICategory from "../interfaces/category.interface";

const CategoriesSchema = new Schema<ICategory>(
    {
        name: {type: String, unique: true},
        description: {type: String}
    },{
        timestamps: true,
    }
)

const categoriesModel = model<ICategory>('categories', CategoriesSchema);
export default categoriesModel;