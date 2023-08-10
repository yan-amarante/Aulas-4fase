const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const cervejariaRoutes = require("./routes/cervejaria");

const app = express();
app.use(bodyParser.json());

app.use("/cervejaria", cervejariaRoutes);


app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
});