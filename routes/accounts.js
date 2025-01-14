const express = require("express");
const router = express.Router();
const controller = require("../controllers/accounts");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllAccounts(pageSize, page));
});

router.get("/:id", async (req, res) => {
  res.json(await controller.getAccount(req.params.id));
});

// Punto 3 - necesitamos conocer las cuentas que tengan un limite de 10.000
router.get("/nlimite/:lim", async (req, res) => {
  res.json(await controller.getAccountWithLimit(req.params.lim));
});

module.exports = router;
