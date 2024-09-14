import { Router } from "express";
import { UsuariosManager } from "../dao/UsuariosManager.js";
import { isValidObjectId } from "mongoose";
export const router=Router()

router.get('/', async(req,res)=>{
    try {
        let usuarios= await UsuariosManager.getUsers()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarios})
    } catch (error) {
        return next(error)
    }
})

router.get('/:id', async(req,res)=>{

    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-type', 'application/json')
        return res.status(400).json({error: `ID invalido`})
    }

    try {
        let usuario= await UsuariosManager.getUserBy({_id:id})
        if(!usuario){
            res.setHeader('Content-type', 'application/json')
            return res.status(400).json({error:`No existe ningun usuario con ID ${id}`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuario})
    } catch (error) {
        next(error)
    }
})

router.post("/", async(req,res)=>{
    let {nombre, email, ...otros}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json')
        return res.status(400).json({error:`nombre | email estan mal`})
    }
})
