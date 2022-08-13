const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());

// routes
const rotaInicial = require('./routes/inicial');
const usuarioRotas = require('./routes/usuarios');
const produtosRotas = require('./routes/produtos');
const historicoRotas = require('./routes/historico');

app.use('/', rotaInicial);
app.use('/', usuarioRotas);
app.use('/', produtosRotas);
app.use('/', historicoRotas);

app.listen(PORT, () => console.log(`running on port: ${PORT}`));