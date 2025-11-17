import { MySQLModel } from "../models/mysql-model.js"

export class MoonController {
   getAllUsers = async (req, res) => {
        try {
            const [rows] = await MySQLModel.getAll('users')
            res.json(rows);
        } catch (error) {
            console.error("Error fetching moons:", error)
            res.status(500).json({ error: "Internal Server Error" })
        }
    }
    getInvoces = async (req, res) => {
        try {
            const [rows] = await MySQLModel.getInvoices('invoice')
            res.json(rows);
        }
        catch (error) {
            console.error("Error fetching invoices:", error)
            res.status(500).json({ error: "Internal Server Error" })
        }
    }

    getallproducts = async (req, res) => {
        try {
            const [rows] = await MySQLModel.getAll('products')
            res.json(rows);
        } catch (error) {
            console.error("Error fetching products:", error)
            res.status(500).json({ error: "Internal Server Error" })
        }
    }

    getAllClients = async (req, res) => {
        try {
            const [rows] = await MySQLModel.getAll('clients')
            res.json(rows);
        } catch (error) {
            console.error("Error fetching clients:", error)
            res.status(500).json({ error: "Internal Server Error" })
        }   
    }
    getConfig = async (req, res) => {
        try {
            const [rows] = await MySQLModel.getAll('config')
            res.json(rows);
        } catch (error) {
            console.error("Error fetching config:", error)
            res.status(500).json({ error: "Internal Server Error" })
        }   
    }


    ping = (req, res) => {
        res.json({ message: "pong" })
    }


}