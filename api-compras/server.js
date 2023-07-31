const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const compras = [
    {
        id: 1, descricao: "Playstation 5", preco: 5000.00
    },
    {
        id: 2, descricao: "Camisa do Grêmio", preco: 250.99
    },
    {
        id: 3, descricao: "Coxinha do Araújo", preco: 7.65
    },
]
// /deletar-compra (DELETE)
app.get("/", (req, res) => {
    res.status(200).send({ message: "Teste" })
});

app.get("/compras", (req, res) => {
    res.status(200).send({ compras })
});

app.get("/valor-total", (req, res) => {
    const valorInicial = 0;
    const arrayValores = compras.map(lista => { return lista.preco })
    let valorTotal = arrayValores.reduce((valor1, valor2) => {
        return valor1 + valor2;
      }, valorInicial);
    res.status(200).send({ valorTotal })
});

app.post("/cadastrar-compra", (req, res) => {
    const {id, descricao, preco} = req.body;
    compras.push({id:id,descricao:descricao,preco:preco})
    res.status(200).send({ message: "Executou um put" })
});

app.delete("/deletar-compra/:id", (req, res) => {
    const id = req.params.id;
    const listaFiltrada = compras.filter((item) => {
        let index;
        if(id == item.id){
            index = compras.indexOf(item);
            compras.splice(index, 1);
        }
    }
    );
    res.status(200).send({ message: "Executou um delete" })
    //deletar-compra/3
})

app.listen(port, () => console.log(`servidor rodando na porta:  ${port}`))