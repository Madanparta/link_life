const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRegst = require('./router/userRegst');
const userLog = require('./router/userLog');
const dashBord = require('./router/dashBord');
const getUsers = require('./router/getUsers');
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
app.use('/api',getUsers);

app.listen(PORT,()=>console.log(`Backend server run with port ${PORT}`));