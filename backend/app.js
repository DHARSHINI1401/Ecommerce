const express=require('express');
const dotenv=require('dotenv');
const path =require('path');
const app=express();
dotenv.config({ path: path.join( __dirname, 'config', 'config.env' ) })



app.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})