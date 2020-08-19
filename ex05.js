const express = require('express')
const router = require('./ex05_router')
const server = express()

server.use('/main', router)

server.listen(8080, () => console.log("Running"))
