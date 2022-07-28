const express = require('express');
const router = express.Router();
const models = require('../models');
const usuarios = models.usuarios;

router.post('/login', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const request = await usuarios.findOne({ where: { email, senha } })
    request ? res.json(true) : res.json(false);
  } catch (error) {
    console.log('Erro em /login: ',error.message)
  }
});

router.put('/updatePassword', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const request = await usuarios.update({ senha }, { where: { email } });
    request[0] ? res.json(true) : res.json(false);
  } catch (error) {
    console.log('Erro em /updatePassword: ',error.message)
  }
});

/* router.post('/insertUser', async (req, res) => {
  const { nome, email, senha } = req.body;
  const request = await usuarios.create({ nome, email, senha })
  res.json(request);
}); */

module.exports = router;