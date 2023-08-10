const database = require("../models/database")

const buscarNome = (req, res) => {
    const values = [req.params.nome];
    const query = `SELECT * FROM cervejas WHERE nome LIKE '%${values}%';`;

    database.query(query).then(
        (resultado) => {
            res.status(200).send({ cerveja: resultado.rows });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const buscarNacionalidade = (req, res) => {
    const query = "SELECT * FROM cervejas WHERE nacionalidade=$1";
    const values = [req.params.nacionalidade];

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ cerveja: resultado.rows });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const ordenarABV = (req, res) => {
    const query = "SELECT * FROM cervejas ORDER BY abv DESC";

    database.query(query).then(
        (resultado) => {
                res.status(200).send({ cerveja: resultado.rows });
            },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const buscarTipo = (req, res) => {
    const values = [req.params.tipo];
    const query = "SELECT * FROM cervejas WHERE tipo=$1";

    database.query(query, values).then(
        (resultado) => {
                res.status(200).send({ cerveja: resultado.rows });
            },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

module.exports = {
    buscarNome,
    buscarNacionalidade,
    ordenarABV,
    buscarTipo
};