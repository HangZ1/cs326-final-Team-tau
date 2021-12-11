'use strict';
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://3tham:123@cluster0.3kbzw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('Client'));

const port = process.env.PORT || 8080;



app.get('/', async function(req, res) {
     res.sendFile(__dirname +'/Client/Homepage.html');
});


app.get('/Login', async (req, res) => {
    let userName= req.query.name;
    let password= req.query.password;
    const userLoginData = await client.db("User").collection("ID&password");
    let userLogin = await userLoginData.findOne({name:userName});
    if(!userLogin){
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




app.get('/getAllcooler', async(req,res) => {
    const ccler = await client.db("PCComponentData").collection("Cpu Cooler");
    let cool = await ccler.find().toArray();
    res.send(cool);
});

app.get('/getAllGPU', async(req,res) => {
    const GPU = await client.db("PCComponentData").collection("GPU");
    let g = await GPUr.find().toArray();
    res.send(g);
});


app.get('/getAllMEM', async(req,res) => {
    const MEM = await client.db("PCComponentData").collection("Memory");
    let m = await MEM.find().toArray();
    res.send(m);
});

app.get('/getAllMotherBoard', async(req,res) => {
    const mo = await client.db("PCComponentData").collection("MotherBoard");
    let m = await mo.find().toArray();
    res.send(m);
});

app.get('/getAllPCCase', async(req,res) => {
    const Pcc = await client.db("PCComponentData").collection("Pc Case");
    let p = await Pcc.find().toArray();
    res.send(p);
});

app.get('/getAllPS', async(req,res) => {
    const po = await client.db("PCComponentData").collection("Power Supply");
    let s = await po.find().toArray();
    res.send(s);
});

app.get('/getAllStorage', async(req,res) => {
    const st = await client.db("PCComponentData").collection("Storage");
    let s = await st.find().toArray();
    res.send(s);
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

async function addUserPreference(preference, userName, item){
    const collection = await client.db("UserPerference").collection(preference);
    collection.insertOne({name: userName, Item: item});
}

async function updateUserpreference(preference, userName, item){
    const collection = await client.db("UserPerference").collection(preference);
    await collection.updateOne({name: userName}, {$set: {Item: item}});
};

app.post('/addShoppingCart', async (req, res) =>{
    let userName = req.body.name;
    let CPU = req.body.cpu;
    let cooler = req.body.cool;
    let GPU = req.body.gpu;
    let memory = req.body.mem;
    let moterboard = req.body.mb;
    let pccase = req.body.pcase;
    let power = req.body.ps;
    let storage = req.body.st;

    if(await getUserPreference('CPU', userName)!== false){
        await updateUserpreference('CPU', userName, CPU);
    }else{
        await addUserPreference('CPU', userName, CPU);
    }

    if(await getUserPreference('Cpu cooler', userName)!== false){
        await updateUserpreference('Cpu cooler', userName, cooler);
    }else{
        await addUserPreference('Cpu cooler', userName, cooler);
    }

    if(await getUserPreference('GPU', userName)!== false){
        await updateUserpreference('GPU', userName, GPU);
    }else{
        await addUserPreference('GPU', userName, GPU);
    }

    if(await getUserPreference('Memory', userName)!== false){
        await updateUserpreference('Memory', userName, memory);
    }else{
        await addUserPreference('Memory', userName, memory);
    }

    if(await getUserPreference('MotherBoard', userName)!== false){
        await updateUserpreference('MotherBoard', userName, moterboard);
    }else{
        await addUserPreference('MotherBoard', userName, moterboard);
    }

    if(await getUserPreference('Pc Case', userName)!== false){
        await updateUserpreference('Pc Case', userName, pccase);
    }else{
        await addUserPreference('Pc Case', userName, pccase);
    }

    if(await getUserPreference('Power Supply', userName)!== false){
        await updateUserpreference('Power Supply', userName, power);
    }else{
        await addUserPreference('Power Supply', userName, power);
    }

    if(await getUserPreference('Storage', userName)!== false){
        await updateUserpreference('Storage', userName, storage);
    }else{
        await addUserPreference('Storage', userName, storage);
    }

    res.send('added to the cart.');
})

app.post('/addUserCPU', async(req, res) => {
    let userName = req.body.name;
    let CPU = req.body.cpu;
    if(await getUserPreference('CPU', userName)!== false){
        await updateUserpreference('CPU', userName, CPU);
    }else{
        await addUserPreference('CPU', userName, CPU);
    }
})

app.post('/addUsercooler', async(req, res) => {
    let userName = req.body.name;
    let cooler = req.body.cool;
    if(await getUserPreference('Cpu cooler', userName)!== false){
        await updateUserpreference('Cpu cooler', userName, cooler);
    }else{
        await addUserPreference('Cpu cooler', userName, cooler);
    }
})

app.post('/addUserGPU', async(req, res) => {
    let userName = req.body.name;
    let GPU = req.body.gpu;
    if(await getUserPreference('GPU', userName)!== false){
        await updateUserpreference('GPU', userName, GPU);
    }else{
        await addUserPreference('GPU', userName, GPU);
    }
})

        app.post('/addUserMemory', async(req, res) => {
    let userName = req.body.name;
    let memory = req.body.mem;
    if(await getUserPreference('Memory', userName)!== false){
        await updateUserpreference('Memory', userName, memory);
    }else{
        await addUserPreference('Memory', userName, memory);
    }
})

app.post('/addUserMoterboard', async(req, res) => {
    let userName = req.body.name;
    let moterboard = req.body.mb;
    if(await getUserPreference('MotherBoard', userName)!== false){
        await updateUserpreference('MotherBoard', userName, moterboard);
    }else{
        await addUserPreference('MotherBoard', userName, moterboard);
    }
})

app.post('/addUserPCcase', async(req, res) => {
    let userName = req.body.name;
    let pccase = req.body.pcase;
    if(await getUserPreference('Pc Case', userName)!== false){
        await updateUserpreference('Pc Case', userName, pccase);
    }else{
        await addUserPreference('Pc Case', userName, pccase);
    }
})

app.post('/addUserPower', async(req, res) => {
    let userName = req.body.name;
    let power = req.body.ps;
    if(await getUserPreference('Power Supply', userName)!== false){
        await updateUserpreference('Power Supply', userName, power);
    }else{
        await addUserPreference('Power Supply', userName, power);
    }
})

app.post('/addUserStorage', async(req, res) => {
    let userName = req.body.name;
    let storage = req.body.st;
    if(await getUserPreference('Storage', userName)!== false){
        await updateUserpreference('Storage', userName, storage);
    }else{
        await addUserPreference('Storage', userName, storage);
    }
})

app.get('/getShoppingCart', async (req, res) =>{
    let userName = req.query.name;
    let out ={}
    if(await getUserPreference('CPU', userName)!== false){
        out["CPU"] =await getUserPreference('CPU', userName);
    }else {
        out["CPU"] ='';
    }
    if(await getUserPreference('Cpu cooler', userName)!== false){
        out["cooler"] =await getUserPreference('Cpu cooler', userName);
    }else{
        out["cooler"] = '';
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
        out["Case"] =await getUserPreference('Pc Case', userName);
    }else{
        out["Case"] = '';
    }
    if(await getUserPreference('Power Supply', userName)!== false){
        out["Power"] =await getUserPreference('Power Supply', userName);
    }else{
        out["Power"] = '';
    }
    if(await getUserPreference('Storage', userName)!== false){
        out["Storage"] =await getUserPreference('Storage', userName);
    }else{
        out["Storage"] = '';
    }
    res.send(out);
});
//update
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

app.post('/updateMemory', async (req, res) => {
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
    res.send("removed");
})

app.get('/removeCooler', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Cpu cooler');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('/removeGPU', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('GPU');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('/removeMemory', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Memory');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('/removeMotherBoard', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('MotherBoard');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('/removeCase', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Pc Case');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('/removePower', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Power Supply');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('/removeStorage', async (req, res) => {
    let userName = req.query.name;
    const collection = await client.db('UserPerference').collection('Storage');
    await collection.deleteOne({name:userName});
    res.send("removed");
})

app.get('*', (request, response) => {
    response.send(JSON.stringify({ result : 'command-not-found' }));
});


client.connect(err => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })

});




