const pg = require("pg");
const URL = require('./dbConfig')

const database = new pg.Client(URL);

database.connect((erro) => {
    if(erro){
        return console.log("Não foi possivel conectar com o ElephantSQL", erro);
    }else {
        return console.log("Conectado ao ElephantSQL!");
    }
})

module.exports = database