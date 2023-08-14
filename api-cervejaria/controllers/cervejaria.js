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

const cadastarCerveja = (req, res) => {
    const values = [req.body.nome, req.body.abv, req.body.tipo, req.body.nacionalidade];
    const query = "INSERT INTO cervejas (nome, abv, tipo, nacionalidade) VALUES ($1, $2, $3, $4);";

    database.query(query, values).then(
        () => {
            res.status(200).send({ menssagem: "Cerveja cadastrada com sucesso" });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const atualizarCerveja = (req, res) => {
    const values = [req.params.id, req.body.nome, req.body.abv, req.body.tipo, req.body.nacionalidade];
    const query = "UPDATE cervejas SET nome=$2, abv=$3, tipo=$4, nacionalidade=$5 WHERE id=$1";

    database.query(query, values).then(
        () => {
            res.status(200).send({ menssagem: "Cerveja atualizada com sucesso" });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const deletarCerveja = (req, res) => {
    const values = [req.params.id]
    const query = "DELETE FROM cervejas WHERE id=$1";

    database.query(query, values).then(
        () => {
            res.status(200).send({ menssagem: "Cerveja deletada com sucesso" });
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
    buscarTipo,
    cadastarCerveja,
    atualizarCerveja,
    deletarCerveja
};