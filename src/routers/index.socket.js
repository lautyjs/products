import { productsManager } from "../dao/ProductsManager.js"; 

export default async (socket) => {
  console.log("client id: " + socket.id);
  socket.emit("products", await productsManager.getProducts());
  }