const {Schema,model } = require('mongoose')

const ProductSchema= new Schema({
    title:{
        type:String,
        required:true,
    },

    descripition:{
        type:String,
        required:true,
    },

    url:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
    },

})

module.exports = model('products',ProductSchema)