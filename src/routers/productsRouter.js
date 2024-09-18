import { Router } from "express";
import { productsManager } from "../dao/ProductsManager.js";
import { isValidObjectId } from "mongoose";

export const router=Router()

router.get('/', async(req,res)=>{
    try {
        let products= await productsManager.getProducts()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({products})
    } catch (error) {
        return next(error)
    }
})

router.get('/:pid', async(req,res)=>{

    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-type', 'application/json')
        return res.status(400).json({error: `ID invalido`})
    }

    try {
        let product= await productsManager.getProductBy({_id:id})
        if(!product){
            res.setHeader('Content-type', 'application/json')
            return res.status(400).json({error:`No existe ningun producto con ID ${id}`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({product})
    } catch (error) {
        next(error)
    }
})

router.post("/", async(req,res)=>{
    let {title, price, ...otros}=req.body
    if(!title || !price){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error:`nombre | email estan mal`})
    }
})