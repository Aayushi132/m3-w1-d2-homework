// const express = require('express')
import path  from 'path';
const __dirname = path.resolve()
import express  from 'express';
const app = express();
// const router = express.Router();
const PORT=5000
app.get("/home",(req,res)=>{
    res.render("home")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/",(req,res)=>{
    res.render("food_blog")
})






// SET TEMPLATE ENGINE
app.set('views', './views');
app.set('view engine','pug')
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.get('/', function(req, res) {
    res.send('hello')
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
