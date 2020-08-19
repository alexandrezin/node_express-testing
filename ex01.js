const express = require('express')
const server = express()

server.get('/', function(requisition, response){
    response.send('<h1> Index </h1>')
})

server.all(/teste/, function(req, res){
    res.send('<h1> Teste </h1>')
})

server.listen(8080, () => console.log("Running"))
