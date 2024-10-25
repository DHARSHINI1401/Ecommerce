exports.getProducts=(req,res,next)=>{
    res.json({
        success:true,
        message:'Get Products Working!'
    })
}

exports.getSingleProduct=(req,res,next)=>{
    res.json({
        success:true,
        message:'Get Single Product Working!'
    })
}