const mongoose=require('mongoose');

const productSchema =new mongoose.Schema({
    name:String,
    price:String,
    ratings:String,
    description:String,
    image:[
        {
            image:String
        }
    ],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
});

const productModel= mongoose.model('product',productSchema);

module.exports = productModel;
