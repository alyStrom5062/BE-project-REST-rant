// Require express
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("Connected")
})

app.listen(3000)