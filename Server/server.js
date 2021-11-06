'use strict';
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require("cors");
app.use(cors());

const LoginDataFile = 'LoginDataFile.json';
const PcDataFile = 'PcDataFile.json';
app.use(express.json());

const port = 8080;
let userLoginData = {};
let userPcData = {};

if(fs.existsSync(LoginDataFile)) {
    userLoginData = JSON.parse(fs.readFileSync(LoginDataFile));
}
else {userLoginData = {};}


if(fs.existsSync(PcDataFile)) {
    userPcData = JSON.parse(fs.readFileSync(PcDataFile));
}
else {userPcData = {};}




app.get('/', (req, res) => {
    res.sendFile(path.resolve('./client/Homepage.html'));
});

app.get('/Login', (req, res) => {
    let userName= req.query.name;
    let password= req.query.password;
    if(!(userName in userLoginData)){
        res.send("userName not found");
    }else{
        if(userLoginData[userName] !== password){
            console.log(password);
            res.send("incorrect password");
        }else{
            res.send("login");
        }
    }
});

app.post('/Register', (req, res) =>{
    //by Yuchen Liu
    let userName = req.body.name;
    let password = req.body.password;
    if(userLoginData[userName] === undefined){
        userLoginData[userName] = password;
        fs.writeFileSync(LoginDataFile,JSON.stringify(userLoginData));
        console.log(`Set ${userName} to ${password}`);
        res.send('Regist');
    }
    else{
        res.send('this username already exists');
    }
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
    res.send('Already add to the cart.');
});

app.get('/getShoppingCart/:user', (req, res) =>{
    let userName = req.query.name;
    res.send(PcDataFile[userName]);
})

app.get('*', (request, response) => {
    response.send(JSON.stringify({ result : 'command-not-found' }));
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


