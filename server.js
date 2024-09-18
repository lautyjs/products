import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import morgan from "morgan";
import { engine } from "express-handlebars";
import {router as usuariosRouter} from './src/routers/usuariosRouter.js'
import {router as productsRouter} from "./src/routers/productsRouter.js";

import indexRouter from "./src/routers/index.router.js";
import socketCb from "./src/routers/index.socket.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import { connDB } from "./src/connDB.js";
import { config } from "./src/config/config.js";

//http server
const server = express();
const port = config.PORT;
const ready = () => console.log("server ready on port " + port);
const nodeServer = createServer(server);
nodeServer.listen(port, ready);

//tcp server
const socketServer = new Server(nodeServer);
socketServer.on("connection", socketCb);
export { socketServer };

//template engine
server.engine("handlebars", engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault:true,
    },
}));
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));

//endpoints
server.use("/", indexRouter);
server.use("/api/usuarios", usuariosRouter)
server.use("/api/products", productsRouter)
server.use(errorHandler);
server.use(pathHandler);

connDB()
