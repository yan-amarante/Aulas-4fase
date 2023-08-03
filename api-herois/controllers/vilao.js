const listaVilao = require("../database/vilao")
let id = 1;

const getViloes = (req, res, next) => {
    res.status(200).send({ listaVilao });
};

const cadastrarVilao= (req, res, next) => {
    const {nome, pontosDePoder} = req.body;
    let idNovo = id++;
    listaVilao.push({id: idNovo, nome: nome, pontosDePoder: pontosDePoder})
    res.status(201).send({ message: "executou um post" })
}

module.exports = {
    getViloes,
    cadastrarVilao
};
