const express = require('express');
const cors = require('cors');
const generateData = require('./data');
const filterData = require('./filters');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/cases', (req, res) => {        
    let data = req.query?.count ? generateData(req.query.count) : generateData(10000);    
    let filteredData = filterData(req,data);
    res.status(201).json(filteredData)
})

module.exports = server;