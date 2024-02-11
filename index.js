
const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

//This is middleware => .use() - which is used to we can fetch the json data.
app.use(express.json());

const blog = require('./routes/blogs');

//mount

app.use("/api/v1/",blog);

const dbConnect = require("./config/database");

dbConnect();


//server start 

app.listen(PORT,() => {

    console.log(`app is runing at the ${PORT}`);

})

//default route

app.get('/',(req,res) => {

    res.send(`<h1>this is homepage baby...</h1>`)

})
