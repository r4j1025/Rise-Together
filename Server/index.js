const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const DataModel=require('./models/Users')

const app = express()
app.use(cors())
app.use(express.json)

mongoose.connect('mongodb://localhost:27017/test')

app.get('/getData',(req,res)=>{
    DataModel.find().then(users=>res.json(users)).catch(err =>res.json())

})

app.listen(3001,()=>{
    console.log('server is running')
})