import { usuariosModelo } from "./models/usuariosModelo.js";


export class UsuariosManager{
    static async getUsers(){
        return await usuariosModelo.find()
    }

    static async getUsersBy(filtro={}){
        return await usuariosModelo.findOne(filtro)
    }

    static async createUser(usuario){
        return await usuariosModelo.create(usuario)
    }

    static async updateUser(id,usuario){
        return await usuariosModelo.updateOne({_id:id}, usuario)
    }

    static async deleteUser(id){
        return await usuariosModelo.findByIdAndDelete(id, {new:true})
    }
}