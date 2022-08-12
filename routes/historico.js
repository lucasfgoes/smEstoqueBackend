const express = require('express');
const router = express.Router();
const models = require('../models');
const historico = models.historico;

router.get('/historico', async (req, res) => {
    try {
      const request = await historico.findAll({
        order: [
          ['id', 'DESC']
      ], 
      });
      res.json(request);
    } catch (error) {
      console.log(error.message) 
    }
  });

  router.post('/insertHistorico', async (req, res) => {
    try {
      const { produto_id, nome, quantidade, valor, preco, tipo, data } = req.body;
      const request = await historico.create({ produto_id, nome, quantidade, valor, preco, tipo, data });
      res.json(request);
    } catch (error) {
     console.log(error.message) 
    }
  });

  router.put('/updateHistorico', async (req, res) => {
    try {
      const { produto_id, nome } = req.body;
      const request = await historico.update(
        {
          nome
        },
        { where: { produto_id } }
      );
      request[0] ? res.json(true) : res.json(false);
    } catch (error) {
      console.log(error.message) 
    }
  });

  router.delete('/deleteHistorico/:produto_id', async (req, res) => {
    try {
      const { produto_id } = req.params;
      const request = await historico.destroy({ where: { produto_id } });
      request ? res.json(true) : res.json(false);
    } catch (error) {
      console.log(error.message) 
    }
  });

module.exports = router;