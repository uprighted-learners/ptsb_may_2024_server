const express = require("express"); // Being pulled from node_modules
const app = express(); // Simplifying the method call
const PORT = 3001;

const practiceController = require("./controllers/practicecontroller")
const authController = require("./controllers/authcontroller")

app.use(express.urlencoded({ extended: true})) // Parses the body from our browser so it can display the response

app.use(express.json()) // Provides us access to use JSON within our routes

app.use("/practice", practiceController)
app.use("/auth", authController)



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})