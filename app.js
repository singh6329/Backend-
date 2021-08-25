const bodyParser = require('body-parser');
const express=require('express');
const mongoose=require('mongoose');
const router=require('./Routers/router');

const url="mongodb://localhost/CarService" 
const app=express()

app.use(bodyParser.json())
app.use(express.json())

mongoose.connect(url,{useNewUrlParser:true})
const conn=mongoose.connection

conn.on('open',()=>{
    console.log("Connected to database");
})

app.use(router)

app.listen(2020,()=>{
    console.log("listeining on port number:2020");
})