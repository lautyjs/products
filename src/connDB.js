import mongoose from "mongoose"
import { config } from "./config/config.js"

    export const connDB=async()=>{
        try {
            await mongoose.connect(
                config.MONGO_URL,
                {dbName:config.DN_NAME}
            )
            console.log("DB OK")
        } catch (error) {
            console.log('Error al conectar al DB: ${error.message}')
        }
}