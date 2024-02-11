
const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

//middleware here is .use() isse jo bhi apni http request aayi hai usmai kuch data hoga to use hum fetch/get kr skte hai...
// apne http request ke upar middleware kuch addition task perform krte hai jayse ki,-> logging,authentication,parsing,error handling...
// to basically apne server pr jo http request aayi hai usmai kuch data hoga to middleware se hum use easyly fetch kr sakte hai..
//uska kam yaha hai ki bas json ko pass krna..

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
