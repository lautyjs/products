import mongoose from "mongoose";

const productsColl="products"
const productsSchema=new mongoose.Schema(
    {
        
        title: String,
        photo: String,
        stock: Number,
        price: Number,
        category: String
    },
    {
        timestamps: true, 
        strict: false, 
    }
)

export const productsModel=mongoose.model(
    productsColl,
    productsSchema
)

productsModel.find()
