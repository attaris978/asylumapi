const express = require('express');
const generateData = require('./data');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    let data = generateData();    
    res.status(201).json(data)
})

server.get('/:numberOfEntries', (req, res) => {
    let numberOfEntries = +req.params.numberOfEntries;
    let data = generateData(numberOfEntries);    
    res.status(201).json(data)
})

module.exports = server;