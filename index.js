const express = require('express')
const mongoose = require('mongoose')
const requireDir=require('require-dir')

const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://USER:PASSWORD@cluster0-wuis8.mongodb.net/NOMEDOBANCO?retryWrites=true&w=majority',{useNewUrlParser:true})


app.use('/api',require('./src/routes'))
app.listen('3000');