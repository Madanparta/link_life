const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRegst = require('./data/userRegst');
const userLog = require('./data/userLog');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

connectDB() //database connections

app.use(bodyParser()) //body perser.

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send("welcome to LINK_LIFE");
})

app.use('/api',userRegst);
app.use('/api',userLog);

app.listen(PORT,()=>console.log(`Backend server run with port ${PORT}`));