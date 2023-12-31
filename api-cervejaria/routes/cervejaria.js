const express = require("express");
const router = express.Router();
const controller = require("../controllers/cervejaria");

router.get("/buscar-nome/:nome", controller.buscarNome);
router.get("/buscar-nacionalidade/:nacionalidade", controller.buscarNacionalidade);
router.get("/ordenar-abv", controller.ordenarABV);
router.get("/buscar-tipo/:tipo", controller.buscarTipo);
router.post('/cadastrar-cerveja', controller.cadastarCerveja);
router.put('/atualizar-cerveja/:id', controller.atualizarCerveja);
router.delete('/deletar-cerveja/:id', controller.deletarCerveja);

module.exports = router;