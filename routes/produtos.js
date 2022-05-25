const express = require('express');
const router = express.Router();
const models = require('../models');
const produtos = models.produtos;

router.get('/product/:id', async (req, res) => {
  const { id } = req.params;
  const request = await produtos.findOne({ where: { id } });
  res.json(request);
});

router.get('/products', async (req, res) => {
  const request = await produtos.findAll();
  res.json(request);
});

router.post('/insertProduct', async (req, res) => {
  const { quantidade, nome, marca, custo, preco } = req.body;
  const request = await produtos.create({ quantidade, nome, marca, custo, preco });
  res.json(request);
});

router.put('/updateProduct', async (req, res) => {
  const { id, quantidade, nome, marca, custo, preco } = req.body;
  const request = await produtos.update(
    {
      quantidade, nome, marca, custo, preco
    },
    { where: { id } }
  );
  request[0] ? res.json(true) : res.json(false);
});

router.delete('/deleteProduct/:id', async (req, res) => {
  const { id } = req.params;
  const request = await produtos.destroy({ where: { id } });
  request ? res.json(true) : res.json(false);
});

module.exports = router;