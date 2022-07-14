const express = require('express');
const cors = require('cors');
const generateData = require('./data');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/cases', (req, res) => {
    let data = generateData();    
    res.status(201).json(data)
})

server.get('/cases/:numberOfEntries', (req, res) => {
    let numberOfEntries = +req.params.numberOfEntries;
    let data = generateData(numberOfEntries);    
    res.status(201).json(data)
})

module.exports = server;