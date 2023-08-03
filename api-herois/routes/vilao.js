const express = require("express");
const router = express.Router();
const controller = require("../controllers/vilao");

router.get("/", controller.getViloes);
router.post("/cadastrar-vilao", controller.cadastrarVilao)

module.exports = router;