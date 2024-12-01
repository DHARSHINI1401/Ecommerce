const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors');
const connectDb=require('./config/connectDb');

dotenv.config({path:path.join(__dirname,'config','config.env')})

connectDb();

const products=require('./routes/product');
const orders=require('./routes/order');

app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`Server running to ${process.env.PORT}`);
})