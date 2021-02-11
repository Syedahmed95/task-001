const express = require("express"),
    mongoose = require("mongoose"),
    cors = require("cors"),
    path = require("path"),
    bodyParser = require("body-parser");
require("dotenv").config()

const app = express(),
    router = express.Router();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.connection.on("connected", () => {
    console.log('Mongoose connection open');
})
mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection Error: ", err)
})
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose Connection got disconnected")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static("public"))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use("/", router)

require("./app/routes/routes")(app, router)
require("./app/models/models")(app, mongoose)

app.use((req, res) => {
    res.status(404).send({
        message: "Not Found"
    })
})

module.exports = app