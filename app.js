var express = require("express");
var app = express();

var calculatorRequest = {
  operation: req.params.operation,
  n1: Number(req.params.n1),
  n2: Number(req.params.n2)
}

app.get("/api/calculator/*",function(req,res){
  


app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
});
