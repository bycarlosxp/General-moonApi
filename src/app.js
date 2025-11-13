import e from "express"

const app = e()
const PORT = process.env.PORT || 3000

export const createApp = () => {
    app.get("/", (req, res) => {
        res.json({message: "Welcome to the General Moon API"})
    })

    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    })

}   
