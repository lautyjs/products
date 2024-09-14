import mongoose from "mongoose";

const usuariosColl="users"
const usuariosSchema=new mongoose.Schema(
    {
        nombre: String,
        email: {
            typer: String,
        },
        edad: Number,
        rol: {
            type: String, default: "user"
        },
        materias: []
    },
    {
        timestamps: true, 
        strict: false, 
    }
)

export const usuariosModelo=mongoose.model(
    usuariosColl,
    usuariosSchema
)

usuariosModelo.find()
