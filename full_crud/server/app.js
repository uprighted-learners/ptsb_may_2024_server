const express = require("express");
const app = express();
const cors = require("cors")

const crudController = require("./controllers/crud-controller")

const PORT = 8080;

// Required to parse through JSON data that the server receives
app.use(express.json())

// Using the cors library, our separate client can communicate with our server
app.use(cors())

app.use("/crud", crudController)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})