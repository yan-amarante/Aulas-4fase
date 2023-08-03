const express = require("express");
const router = express.Router();
const controller = require("../controllers/heroi");

router.get("/", controller.getHerois);
router.post("/cadastrar-heroi", controller.cadastrarHeroi)

module.exports = router;