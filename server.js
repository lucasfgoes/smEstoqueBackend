const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');
const { Sequelize, QueryTypes } = require('sequelize');

// middlewares
app.use(cors());
app.use(express.json());

// routes
const rotaInicial = require('./routes/inicial');
const usuarioRotas = require('./routes/usuarios');
const produtosRotas = require('./routes/produtos');

app.use('/', rotaInicial);
app.use('/', usuarioRotas);
app.use('/', produtosRotas);

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});