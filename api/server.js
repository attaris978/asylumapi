const express = require('express');
const data = require('./data');

const server = express();

server.use(express.json());

server.get('/api', (req, res) => {
    console.log("Well we're there")
    res.status(201).json(data)
})

module.exports = server;