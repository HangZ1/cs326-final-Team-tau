'use strict';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://3tham:bdm3tXWrE5LabZp@cluster0.3kbzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const path = require('path');
const url = require("url");
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

// if(fs.existsSync(LoginDataFile)) {
//     userLoginData = JSON.parse(fs.readFileSync(LoginDataFile));
// }
// else {userLoginData = {};}
//
//
// if(fs.existsSync(PcDataFile)) {
//     userPcData = JSON.parse(fs.readFileSync(PcDataFile));
// }
// else {userPcData = {};}




app.get('/', (req, res) => {
    res.sendFile(path.resolve('/cs326-final-Team-tau/Client/Homepage.html'));
    // res.sendFile(__dirname + "/Client/Homepage.html");
});

app.get('/Login', async (req, res) => {
    let userName= req.query.name;
    let password= req.query.password;
    const userLoginData = await client.db("User").collection("ID&password");
    let userLogin = await userLoginData.findOne({name:userName});
    if(userLogin === undefined){
        res.send("userName not found");
    }else{
        if(userLogin.password !== password){
            res.send("incorrect password");
        }else{
            res.send("login");
        }
    }
});

app.post('/Register', async (req, res) =>{
    //by Yuchen Liu
    let userName = req.body['name'];
    let password = req.body['password'];
    const collection = await client.db("PCComponentData").collection("CPU");
// perform actions on the collection object
    let a = await collection.findOne({name:'5800X'});
    console.log('a')
    if(userLoginData[userName] === undefined){
        userLoginData[userName] = password;
        fs.writeFileSync(LoginDataFile,JSON.stringify(userLoginData));
        console.log(`Set ${userName} to ${password}`);
    }
    else{
        res.send('this username already exists');
    }
});

app.get('/getPC/:component', async (req, res) => {
    //TODO
    let userName = req.query.name;
    const component = await client.db("User").collection("perferance");
    let user = await component.findOne({"name":userName});
    res.send(user);
});
app.get('/getCPUbyCompany', async(req,res) => {
    let company = req.query.company;
    const Cpu = await client.db("PCComponentData").collection("CPU");
    let getCpu = await Cpu.findOne({"company":company});
    res.send(getCpu);
});
app.get('/getCPUbyCompanyAndPrice', async(req,res) => {
    let company = req.query.company;
    let price = req.query.price;
    const Cpu = await client.db("PCComponentData").collection("CPU");
    let getCpu = await Cpu.findOne({"company":company,"price":price});
    res.send(getCpu);
});
app.get('/getCPUbyCompanyAndScore', async(req,res) => {
    let company = req.query.company;
    let score = req.query.score;
    const Cpu = await client.db("PCComponentData").collection("CPU");
    let getCpu = await Cpu.findOne({"company":company,'score':score });
    res.send(getCpu);
});
app.get('/getGPUbyPrice', async(req,res) => {
    let price = req.query.price;
    let name = req.query.name;
    const Gpu = await client.db("PCComponentData").collection("GPU");
    let getGpu = await Gpu.findOne({"GPU":name,'PRICE':price });
    res.send(getGpu);
});
app.get('/getMemory', async(req,res) => {
    let price = req.query.price;
    let name = req.query.name;
    let GB = req.query.gb;
    const M = await client.db("PCComponentData").collection("Memory");
    let getM = await M.findOne({"name":name,'price':price,'GB':GB });
    res.send(getM);
});

app.post('/addtoShoppingCart/:user', (req,res) => {
    //by Yuchen Liu
    let pcSet = {};
    pcSet.processor = req.body['processor'];
    pcSet.motherBoard = req.body['motherBoard'];
    pcSet.graphiccard = req.body['graphiccard'];
    pcSet.memory = req.body['memory'];
    pcSet.storage = req.body['storage'];
    pcSet.pccase = req.body['pccase'];
    pcSet.powersupply = req.body['powersupply'];
    pcSet.cpucooler = req.body['cpucooler'];
    userPcData[req.body.name] = pcSet;
    fs.writeFileSync(PcDataFile,JSON.stringify(userPcData));
    res.send('Already add to the cart.');
});

app.get('/getShoppingCart/:user', (req, res) =>{
    let userName = req.query.name;
    res.send(userPcData[userName]);
})

app.get('*', (request, response) => {
    response.send(JSON.stringify({ result : 'command-not-found' }));
});


client.connect(err => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })

});




