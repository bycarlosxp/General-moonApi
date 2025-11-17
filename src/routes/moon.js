import { MoonController } from "../controllers/moon.js"
import { Router } from "express"


export const createMoonRouter = () => {
    const moonRouter = Router()
    const moonController = new MoonController()

    moonRouter.get("/users", moonController.getAllUsers)
    moonRouter.get("/invoices", moonController.getInvoces)
    moonRouter.get("/clients", moonController.getAllClients)
    moonRouter.get("/products", moonController.getallproducts)
    moonRouter.get("/config", moonController.getConfig)
    moonRouter.get("/ping", moonController.ping)

    return moonRouter
}
