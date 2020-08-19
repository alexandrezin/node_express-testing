const express = require('express')
const server = express()

server.route('/clientes')
    .get(function(req, res){
        console.log('getClients')
        res.send('<h1> List Clients </h1>') 
    })
    .post(function(req, res){
        console.log('postClients')
        res.send('<h1> Set new Client </h1>') 
    })
    .put(function(req, res){
        console.log('putClients')
        res.send('<h1> Update Client </h1>') 
    })
    .delete(function(req, res){
        console.log('deleteClients')
        res.send('<h1> Delete Client </h1>') 
    })

server.listen(8080, () => console.log("Running"))
