const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const heroiRoutes = require("./routes/heroi");
const vilaoRoutes = require("./routes/vilao")
const batalhaRoutes = require("./routes/batalha")

const app = express();
app.use(bodyParser.json());

app.use("/heroi", heroiRoutes);
app.use("/vilao", vilaoRoutes);
app.use("/batalha", batalhaRoutes)

app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`)
});