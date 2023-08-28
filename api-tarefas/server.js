const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const tarefasRoutes = require("./src/tarefas/routes");


app.use(bodyParser.json());

app.use("/tarefas-api", tarefasRoutes);

app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`);
})