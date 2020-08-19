const express = require('express')
const router = express.Router()

router.use(function(req, res, next){
    const init = Date.now()
    next()
    console.log(`Execution time: ${Date.now() - init} ms`)
})

router.get('/products/:id', function(req, res){
    res.send(`<h1> O ID do produto e: ${req.params.id} </h1>`)
})

router.get('/clients/:id', function(req, res){
    res.send(`<h1> O ID do cliente e: ${req.params.id} </h1>`)
})

module.exports = router