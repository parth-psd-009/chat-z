const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(dotenv());

app.use(express.json());

app.listen(3000, () => {
    console.log("Server on port 3000");
});
