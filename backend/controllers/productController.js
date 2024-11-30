const ProductModel = require('../models/ProductModel');

//Get product api - /api/v1/product
exports.getProduct = async(req, res, next)=>{

    const products = await ProductModel.find({});

    res.json({
        sucess: true,
        products
    })
}
//Get single product api - /api/v1/product/:id 
exports.getSingleProduct=async(req, res, next)=>{
    try{
        const product= await ProductModel.findById(req.params.id);
        res.json({
            sucess:true,
            product
        })
    }catch(error){
        res.json({
            sucess:false,
            message:"product not found!"
        })
    }
    
    
}