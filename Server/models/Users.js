const mongoose =require('mongoose')

const DataSchema= new mongoose.Schema({
    h3: String,
    p : String,
    img: String
})

const DataModel =mongoose.model('CategoryListData',DataSchema)
module.exports= DataModel