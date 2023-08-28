const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/listar-tarefas", controller.listarTarefas);
router.post("/adicionar-tarefa", controller.adicionarTarefa);
router.get("/listar-tarefa/:id", controller.listarTarefa);
router.delete("/deletar-tarefa/:id", controller.deletarTarefa);
router.put("/marcar-andamento/:id", controller.marcarAndamento);
router.put("/marcar-concluida/:id", controller.marcarConcluida);

module.exports = router;