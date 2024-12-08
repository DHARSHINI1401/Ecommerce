const ProductModel = require('../models/ProductModel');

// Get product API - /api/v1/product
exports.getProduct = async (req, res, next) => {
    try {
        // Create a query object based on the keyword
        const query = req.query.keyword 
            ? { name: { $regex: req.query.keyword, $options: "i" } } 
            : {};

        const products = await ProductModel.find(query);

        res.json({
            success: true,
            products,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// Get single product API - /api/v1/product/:id 
exports.getSingleProduct = async (req, res, next) => {
    try {
        // Fetch product by ID
        const product = await ProductModel.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }

        
        res.json({
            success: true,
            product,
        });
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
