const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRegst = require('./data/userRegst');
const userLog = require('./data/userLog');
const dashBord = require('./data/dashBord');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

connectDB() //database connections

app.use(bodyParser()) //body perser.

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

app.get('/',(req,res)=>{
    res.send("welcome to LINK_LIFE");
})

app.use('/api',userRegst);
app.use('/api',userLog);
app.use('/dashBord',dashBord);

app.listen(PORT,()=>console.log(`Backend server run with port ${PORT}`));