const express=require("express");
// const routerImageList=require("./router/imagelist");model as follows↓
//const msite=require('./router/msite');


//the above example
const bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
const cors=require("cors");
app.use(cors({
    origin:["http://localhost:8080"],//解决跨域问题
    origin:["http://www.ordershow.top"],
    credentials:true
    }));
var server=app.listen(80);
app.use(express.static(__dirname+"/public"));
//app.use("/imagelist",routerImageList);model as follows↓
//app.use('/msite',msite);
