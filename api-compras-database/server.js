const express = require("express");
const app = express();
const port = 3000;
const database = require("./dabase")

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/compras", (req, res) => {
    database.query('SELECT * FROM compras').then(
        (resultado) => {
            res.status(200).send({ compras: resultado.rows })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
});

app.get("/valor-total", (req, res) => {

    database.query('SELECT preco FROM compras').then(
        (resultado) => {
            const resultadoVetor = resultado.rows
            const valorInicial = 0;
            const vetorValores = resultadoVetor.map(lista => { return parseInt(lista.preco) })
            const valorTotal = vetorValores.reduce((acumulador, valorAtual) => {
                return acumulador + valorAtual;
              }, valorInicial);
            res.status(200).send({ valorTotal: valorTotal })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
});

app.post("/cadastrar-compra", (req, res) => {
    
    const query = 'INSERT INTO compras(descricao, preco) VALUES ($1, $2);'
    const values = [req.body.descricao, req.body.preco]

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "compra cadastrada com sucesso!"})
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
});

app.delete("/deletar-compra/:id", (req, res) => {
    const query = 'DELETE FROM compras WHERE id=$1;'
    const values = [req.params.id]

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "compra removida com sucesso!"})
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
})

app.put("/atualizar-compra/:id", (req, res) => {
    const query = 'UPDATE compras SET descricao=$2, preco=$3 WHERE id=$1;'
    const values = [req.params.id, req.body.descricao, req.body.preco];

    database.query(query, values).then(
        () => {
            res.status(200).send({ mensagem: "compra atualizada com sucesso!"})
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
})

app.listen(port, () => console.log(`servidor rodando na porta:  ${port}`))