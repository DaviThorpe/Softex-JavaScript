const { Router } = require('express');
var express = require('express');
var router = express.Router()

router.get('/', (request, response) => {
    return response.send(' Alow Mundo! Aqui quem fala é de Marte');
});

module.exports = router
