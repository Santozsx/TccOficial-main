const express = require('express');
const router = express.Router();
const {register} = require('../controllers/authcontroller');

router.post('/register', register)

module.exports = router

//Aqui dizemos que quando for feito um POST para /auth/register, ele deve chamar a função register do controller.