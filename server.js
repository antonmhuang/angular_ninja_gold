const express = require('express');
const bp = require('body-parser');
const path = require('path');
var app = express();
var mongoose = require('mongoose');

// app.use(express.static(path.join(__dirname+"/client/dist/client")));
app.use(express.static(path.join(__dirname + "/public/dist/public")));
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

// -----------MONGOOSE CONNECT & SCHEMA -----------------------
mongoose.connect('mongodb://localhost:27017/ninja_gold', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var NinjaSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    gold: {type: Number},
}, {timestamps: true})

mongoose.model('Ninja', NinjaSchema);
var Ninja = mongoose.model('Ninja');

// ------------ ROUTES AND LOCATIONS BELOW -------------------











//----------PORT LISTENER ------------------------------------
app.listen(8000,function(){
    console.log("Now serving on 8000");
});