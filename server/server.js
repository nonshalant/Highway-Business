const express = require('express');  
const routes = require('./Routes/api/api');    
const connectDB = require('./config/db');
const cors = require('cors');

// setup express 
const app = express();

// Connect DB
connectDB();
const PORT = process.env.PORT || 5000
 
// Middleware 
app.use(express.json({extended: true}))
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend domain
    credentials: true, // Allow credentials (cookies)
};

// RESTFUL ROUTES 
app.use('/delivery-orders', require('./Routes/api/deliveryOrders'));  


app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(routes); 

app.listen(PORT, ()=>{
    console.log('listen', PORT)  
});  