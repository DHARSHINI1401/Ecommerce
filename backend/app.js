const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const connectDatabase=require('./config/db')

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Import routes
const products = require('./routes/product');
const order = require('./routes/order'); 


connectDatabase();

// Use routes
app.use('/api/v1/', products);
app.use('/api/v1/', order); 

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});