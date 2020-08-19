const express = require('express')
const server = express()

server.get('/', function(req, res, next){
    console.log('Inicio')
    next()
    console.log('Fim')
})

server.get('/', function(req, res){
    console.log('Resposta')
    res.send('<h1> Teste </h1>')
})

server.listen(8080, () => console.log("Running"))
