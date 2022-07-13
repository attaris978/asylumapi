const express = require('express');
const generateData = require('./data');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    let data = generateData();    
    res.status(201).json(data)
})

module.exports = server;