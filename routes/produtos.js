const express = require('express');
const router = express.Router();
const models = require('../models');
const produtos = models.produtos;

router.get('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const request = await produtos.findOne({ where: { id } });
    res.json(request);
  } catch (error) {
    console.log(error.message) 
  }
});

router.get('/products', async (req, res) => {
  try {
    const request = await produtos.findAll({
      order: [
        ['nome', 'ASC']
    ],
    });
    res.json(request);
  } catch (error) {
    console.log(error.message) 
  }
});

router.post('/insertProduct', async (req, res) => {
  try {
    const { quantidade, nome, marca, custo, preco } = req.body;
    const request = await produtos.create({ quantidade, nome, marca, custo, preco });
    res.json(request);
  } catch (error) {
   console.log(error.message) 
  }
});

router.put('/updateProduct', async (req, res) => {
  try {
    const { id, quantidade, nome, marca, custo, preco } = req.body;
    const request = await produtos.update(
      {
        quantidade, nome, marca, custo, preco
      },
      { where: { id } }
    );
    request[0] ? res.json(true) : res.json(false);
  } catch (error) {
    console.log(error.message) 
  }
});

router.delete('/deleteProduct/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const request = await produtos.destroy({ where: { id } });
    request ? res.json(true) : res.json(false);
  } catch (error) {
    console.log(error.message) 
  }
});

module.exports = router;