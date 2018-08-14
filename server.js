const express = require('express');
const bp = require('body-parser');
const path = require('path');
var app = express();



app.use(express.static(path.join(__dirname+"/client/dist/client")));
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.listen(8000,function(){
    console.log("Now serving on 8000");
})