const listaHeroi = require("../database/heroi")
let id = 1;

const getHerois = (req, res, next) => {
    res.status(200).send({ listaHeroi });
};

const cadastrarHeroi = (req, res, next) => {
    const {nome, pontosDePoder} = req.body;
    let idNovo = id++;
    listaHeroi.push({id: idNovo, nome: nome, pontosDePoder: pontosDePoder})
    res.status(201).send({ message: "executou um post" })
}

module.exports = {
    getHerois,
    cadastrarHeroi
};