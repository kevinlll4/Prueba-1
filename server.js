var express=require("express");
var app=express();
var config=require("./config/config.cfg");

app.get("/holax",function(req,res){
	res.send("Probando holax");
})
app.get("/",function(req,res){
res.send("Prueba 1");
});


app.get("/hola",function(req,res){
res.send("Prueba3");
});


app.listen(9000);
