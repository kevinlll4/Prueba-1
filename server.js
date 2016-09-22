var express=require("express");
var app=express();

app.get("/",function(req,res){
res.send("Prueba 1");
});

app.get("/Prueba2",function(req,res){
res.send("Prueba 2");
});


app.get("/hola",function(req,res){
res.send("Prueba3");
});


app.listen(9000);
