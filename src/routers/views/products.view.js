import { Router } from "express";
import { productsManager } from "../../dao/ProductsManager.js";

const productsRouter = Router();

productsRouter.get("/", async (req, res, next) => {
  try {
    return res.render("products", { title: "products" });
  } catch (error) {
    return next(error);
  }
});

productsRouter.get("/:pid", async (req, res, next) => {
  try {
    const { pid } = req.params;
    const profile = await productsManager.readOne(pid);
    return res.render("profile", { title: "REAL", profile });
  } catch (error) {
    return next(error);
  }
});

export default productsRouter;
