const mongoose = require('mongoose')
const Product = require('../models/Products')



module.exports= {
    async index (req,res){
        const products = await Product.find()

        return res.json(products)
    }
,


async store ( req, res){

    const product = await Product.create(req.body);


    return res.json(product)

}
,

async show(req,res){

    const product = await Product.findById(req.params.id);

    return res.json(product)

},

async update(req,res){
 const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})

 return res.json(product);
}
,


async destroy(req,res){

     await Product.findByIdAndRemove(req.params.id)

     return res.send("Sucesso")
}



}