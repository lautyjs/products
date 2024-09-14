import { productsModel } from "./models/productsModel.js";


export class productsManager{
    static async getProducts(){
        return await productsModel.find()
    }

    static async getProductBy(filtro={}){
        return await productsModel.findOne(filtro)
    }

    static async createProduct(product){
        return await productsModel.create(product)
    }

    static async UpdateProduct(id,product){
        return await productsModel.updateOne({_id:id}, usuario)
    }

    static async deleteProduct(id){
        return await productsModel.findByIdAndDelete(id, {new:true})
    }
}