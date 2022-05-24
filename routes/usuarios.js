const express = require('express');
const router = express.Router();
const models = require('../models');
const usuarios = models.usuarios;

router.post('/login', async (req, res) => {
  const { nome, email, senha } = req.body;
  const request = await usuarios.findOne({ where: { email, senha } })
  request ? res.json(true) : res.json(false);
});

module.exports = router;