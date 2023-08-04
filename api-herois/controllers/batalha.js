const listaHeroi = require("../models/heroi");
const listaVilao = require("../models/vilao");

const batalhar = (req, res, next) => {

    let vencedor;
    let perdedor;

    const {idHeroi, idVilao} = req.body;
    
    const heroi = listaHeroi.map(objeto => {
        if(idHeroi === objeto.id){
            return objeto
        }
    })

    const vilao = listaVilao.map(objeto => {
        if(idVilao === objeto.id){
            return objeto
        }
    })

    if(vilao[0].pontosDePoder > heroi[0].pontosDePoder){
        vencedor = vilao[0].nome;
        perdedor = heroi[0].nome;
    }else if (vilao[0].pontosDePoder < heroi[0].pontosDePoder){
        vencedor = heroi[0].nome;
        perdedor = vilao[0].nome;
    }

        res.status(201).send({ message: `batalha: ${vencedor} venceu ${perdedor}!`})

}

module.exports = {
    batalhar
};