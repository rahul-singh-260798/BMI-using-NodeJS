const express = require('express');
const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));

app.listen(3000,function (){
 console.log("Server is working fine");
});

app.get("/", function (req,res){
 res.sendFile(__dirname+"/bmi.html");
});

app.post("/",function (req,res){
  var num1 = parseFloat(req.body.Weight);
  var num2 = parseFloat(req.body.Height);

  var result = (num1)/(num2*num2);
  res.send("<h1> Your BMI is <h1>"+ result);

});