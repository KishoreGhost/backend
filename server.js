const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 6969;
const connectToDB = require("./database");

app.use(express.Router());
app.use(cors());

// connectToDB(); P.S: Uncomment after adding the mongoURI

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})