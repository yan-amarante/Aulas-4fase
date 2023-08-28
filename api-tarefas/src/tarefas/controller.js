const database = require("../../database")

const listarTarefas = (req, res) => {
    const query = "SELECT * FROM tarefas";

    database.query(query).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const adicionarTarefa = (req, res) => {
    const values = [req.body.tarefa]
    const query = "INSERT INTO tarefas (tarefa) VALUES ($1);";

    database.query(query, values).then(
        () => {
            res.status(200).send({ menssagem: "Tarefa cadastrada" });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const listarTarefa = (req, res) => {
    const values = [req.params.id]
    const query = "SELECT * FROM tarefas WHERE id=$1";

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ tarefas: resultado.rows });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const deletarTarefa = (req, res) => {
    const values = [req.params.id]
    const query = "DELETE FROM tarefas WHERE id=$1";

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ menssagem: "Tarefa deletada" });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const marcarAndamento = (req, res) => {
    const values = [req.params.id, req.body.andamento]
    const query = "UPDATE tarefas SET status_andamento=$2 WHERE id=$1";

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ menssagem: "Tarefa em andamento" });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

const marcarConcluida = (req, res) => {
    const values = [req.params.id, req.body.concluida]
    const query = "UPDATE tarefas SET status_concluida=$2 WHERE id=$1";

    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({ menssagem: "Tarefa em andamento" });
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
};

module.exports = {
    listarTarefas,
    adicionarTarefa,
    listarTarefa,
    deletarTarefa,
    marcarAndamento,
    marcarConcluida
};