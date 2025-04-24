const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/authcontroller');

router.post('/register', register)  
router.post('/login', login) 

module.exports = router

//Aqui dizemos que quando for feito um POST para /auth/register, ele deve chamar a função register do controller.