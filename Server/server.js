'use strict';
const express = require('express');
const app = express();

app.use(express.json());

const port = 8080;

app.post('/Login', (req, res) => {
  // TODO
});

app.post('/Register', (req, res) =>{
  //TODO
});

app.get('/getPC/:component', (req, res) => {
  //TODO
});

app.post('/addtoShoppingCart/:user', (req,res) => {
  //TODO
});

app.get('/getShoppingCart/:user', (req, res) =>{
  //TODO
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
