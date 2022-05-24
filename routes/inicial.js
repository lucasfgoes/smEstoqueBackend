const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ msg: "Bem-vindo ao SME" }));

module.exports = router;