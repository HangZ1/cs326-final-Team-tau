'use strict';
const express = require('express');
const fs = require('fs');
const app = express();
const LoginDataFile = 'LoginDataFile.json';
const PcDataFile = 'PcDataFile.json';
app.use(express.json());

const port = 8080;
const userLoginData = {};
const userPcData = {};

app.get('/Login', (req, res) => {
  //TODO
});

app.post('/Register', (req, res) =>{
  //by Yuchen Liu
    let userName = req.body.name;
    let password = req.body.password;
    userLoginData[userName] = password;
    fs.writeFileSync(LoginDataFile,JSON.stringify(userLoginData));
    console.log(`Set ${userName} to ${password}`);
    res.send('Set.');
});

app.get('/getPC/:component', (req, res) => {
  //TODO
});

app.post('/addtoShoppingCart/:user', (req,res) => {
  //by Yuchen Liu
    let pcSet = {};
    pcSet.processor = req.body.processor;
    pcSet.motherBoard = req.body.motherBoard;
    pcSet.graphiccard = req.body.graphiccard;
    pcSet.memory = req.body.memory;
    pcSet.storage = req.body.storage;
    pcSet.pccase = req.body.pccase;
    pcSet.powersupply = req.body.powersupply;
    pcSet.cpucooler = req.body.cpucooler;
    userPcData[req.body.name] = pcSet;
    fs.writeFileSync(PcDataFile,JSON.stringify(userPcData));
    console.log(`Set ${userName} to ${password}`);
    res.send('Set.');
});

app.get('/getShoppingCart/:user', (req, res) =>{
  //TODO
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
