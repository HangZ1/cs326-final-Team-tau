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




app.get('/', async function(req, res) {
    res.sendFile(path.resolve('./Client/Homepage.html'));
     //res.sendFile(__dirname + "/Client/Homepage.html");
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
    let passWord = req.body['password'];
    const collection = await client.db("User").collection("ID&password");
    let userLogin = await collection.findOne({name:userName});
    console.log(userLogin);
    if(userLogin === null){
        collection.insertOne({name: userName, password: passWord})
        res.send("Regist");
    }
    else{
        res.send('this username already exists');
    }
});

//toDO
app.get('/getPC/:component', async (req, res) => {
    let userName = req.query.name;
    const component = await client.db("User").collection("perferance");
    let user = await component.findOne({"name":userName});
    res.send(user);
});

app.get('/getCPUbyCompany', async(req,res) => {
    let company = req.query.company;
    const Cpu = await client.db("PCComponentData").collection("CPU");
    let getCpu = await Cpu.find({"company":company}).toArray();
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
app.get('/getCPUfanbyprice', async(req,res) => {
    let price = req.query.price;
    const M = await client.db("PCComponentData").collection("Cpu Cooler");
    let getM = await M.findOne({'price':price});
    res.send(getM);
});
app.get('/getCPUfanbyscore', async(req,res) => {
    let score= req.query.score;
    const M = await client.db("PCComponentData").collection("Cpu Cooler");
    let getM = await M.findOne({'score':score});
    res.send(getM);
});
app.get('/getmbbyprice', async(req,res) => {
    let price= req.query.price;
    const M = await client.db("PCComponentData").collection("MotherBoard");
    let getM = await M.findOne({'score':score});
    res.send(getM);
});
app.get('/getmbbyscore', async(req,res) => {
    let score= req.query.score;
    const M = await client.db("PCComponentData").collection("MotherBoard");
    let getM = await M.findOne({'score':score});
    res.send(getM);
});





//TODO
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


async function getUserPreference(preference, userName){
    const collection = await client.db("UserPerference").collection(preference);
    let component  = await collection.findOne({name: userName});
    if(component === null){
        return false;
    }else {
        return component.Item;
    }
}

app.get('/getShoppingCart/:user', async (req, res) =>{
    let userName = req.query.name;
    let out ={}
    if(await getUserPreference('CPU', userName)!== false){
        out["CPU"] =await getUserPreference('CPU', userName);
    }else {
        out["CPU"] ='';
    }
    if(await getUserPreference('Cpu cooler', userName)!== false){
        out["Cpu cooler"] =await getUserPreference('Cpu cooler', userName);
    }else{
        out["Cpu cooler"] = '';
    }
    if(await getUserPreference('GPU', userName)!== false){
        out["GPU"] =await getUserPreference('GPU', userName);
    }else{
        out["GPU"] = '';
    }
    if(await getUserPreference('Memory', userName)!== false){
        out["Memory"] =await getUserPreference('Memory', userName);
    }else{
        out["Memory"] = '';
    }
    if(await getUserPreference('MotherBoard', userName)!== false){
        out["MotherBoard"] =await getUserPreference('MotherBoard', userName);
    }else{
        out["MotherBoard"] = '';
    }
    if(await getUserPreference('Pc Case', userName)!== false){
        out["Pc Case"] =await getUserPreference('Pc Case', userName);
    }else{
        out["Pc Case"] = '';
    }
    if(await getUserPreference('Power Supply', userName)!== false){
        out["Power Supply"] =await getUserPreference('Power Supply', userName);
    }else{
        out["Power Supply"] = '';
    }
    if(await getUserPreference('Storage', userName)!== false){
        out["Storage"] =await getUserPreference('Storage', userName);
    }else{
        out["Storage"] = '';
    }
    res.send(out);
});

app.post('/updateCPU', async (req, res) => {
    let userName= req.body['name'];
    let newCPU = req.body['new'];
    const collection = await client.db("UserPerference").collection('CPU');
    await collection.updateOne({name: userName}, {$set: {Item: newCPU}});
    res.send("CPU updated");
});

app.post('/updateCPUcooler', async (req, res) => {
    let userName= req.body['name'];
    let newCooler = req.body['new'];
    const collection = await client.db("UserPerference").collection('Cpu cooler');
    await collection.updateOne({name: userName}, {$set: {Item: newCooler}});
    res.send("Cooler updated");
});

app.post('/updateGPU', async (req, res) => {
    let userName= req.body['name'];
    let newGPU = req.body['new'];
    const collection = await client.db("UserPerference").collection('GPU');
    await collection.updateOne({name: userName}, {$set: {Item: newGPU}});
    res.send("GPU updated");
});

app.post('/updateGPU', async (req, res) => {
    let userName= req.body['name'];
    let newMemory = req.body['new'];
    const collection = await client.db("UserPerference").collection('Memory');
    await collection.updateOne({name: userName}, {$set: {Item: newMemory}});
    res.send("Memory updated");
});

app.post('/updateMotherBoard', async (req, res) => {
    let userName= req.body['name'];
    let newMotherBoard = req.body['new'];
    const collection = await client.db("UserPerference").collection('MotherBoard');
    await collection.updateOne({name: userName}, {$set: {Item: newMotherBoard}});
    res.send("MotherBoard updated");
});

app.post('/updatePcCase', async (req, res) => {
    let userName= req.body['name'];
    let newPcCase = req.body['new'];
    const collection = await client.db("UserPerference").collection('Pc Case');
    await collection.updateOne({name: userName}, {$set: {Item: newPcCase}});
    res.send("Pc Case updated");
});

app.post('/updatePowerSupply', async (req, res) => {
    let userName= req.body['name'];
    let newPowerSupply = req.body['new'];
    const collection = await client.db("UserPerference").collection('Power Supply');
    await collection.updateOne({name: userName}, {$set: {Item: newPowerSupply}});
    res.send("Power Supply updated");
});

app.post('/updateStorage', async (req, res) => {
    let userName= req.body['name'];
    let newStorage = req.body['new'];
    const collection = await client.db("UserPerference").collection('Storage');
    await collection.updateOne({name: userName}, {$set: {Item: newStorage}});
    res.send("Storage updated");
});

app.get('/removeCPU', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('CPU');
    await collection.deleteOne({name:userName});
    res.send("CPU removed");
})

app.get('/removeCooler', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Cpu cooler');
    await collection.deleteOne({name:userName});
    res.send("Cpu cooler removed");
})

app.get('/removeGPU', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('GPU');
    await collection.deleteOne({name:userName});
    res.send("GPU removed");
})

app.get('/removeMemory', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Memory');
    await collection.deleteOne({name:userName});
    res.send("Memory removed");
})

app.get('/removeMotherBoard', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('MotherBoard');
    await collection.deleteOne({name:userName});
    res.send("MotherBoard removed");
})

app.get('/removeCase', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Pc Case');
    await collection.deleteOne({name:userName});
    res.send("PC Case removed");
})

app.get('/removePower', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Power Supply');
    await collection.deleteOne({name:userName});
    res.send("Power Supply removed");
})

app.get('/removeStorage', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Storage');
    await collection.deleteOne({name:userName});
    res.send("Storage removed");
})

app.get('*', (request, response) => {
    response.send(JSON.stringify({ result : 'command-not-found' }));
});


client.connect(err => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })

});




