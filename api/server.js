const express = require('express');
const cors = require('cors');
const {generateData, generateTestData} = require('./data');
const documentsList = require('./documents');
const filterData = require('./filters');
const {generatedSummary, abbreviatedSummary} = require('./dataSummary');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/cases', (req, res) => {        
    let data = req.query?.count ? generateData(req.query.count) : generateData(1000);    
    let filteredData = filterData(req,data);
    res.status(201).json(filteredData)
})

server.get('/testing', (req, res) => {        
    let data = generateTestData(10000);        
    res.status(201).json(data)
})

server.get('/summary', (req, res) => {                  
    res.status(201).json(generatedSummary);
})

server.get('/shortsummary', (req, res) => {                  
    res.status(201).json(abbreviatedSummary.map(each => ({c: each.c, y: each.y})));
})


server.get('/documents', (req, res) => {                  
    res.status(201).json(documentsList);
})

server.delete('/documents/owner_account/:owner_account_id/document/:uuid', (req, res) => {    
    res.status(200).send(`Deleted ${req.params.uuid} from account ${req.params.owner_account_id}`);
})

module.exports = server;