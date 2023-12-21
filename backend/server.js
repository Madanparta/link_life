const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send("hello backend")
})

app.listen(port,()=>console.log(`sever running with port number ${port}`));