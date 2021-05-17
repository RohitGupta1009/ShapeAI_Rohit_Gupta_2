const express=require("express");  //for importing express (module)
const body_parser=require("body-parser");
const app=express();              // Calling express as a func. and storing it\
app.use(body_parser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
  var n1= Number(req.body.num1);
  var n2= Number(req.body.num2);
  var result=n1/(n2*n2);
  res.send("The answer is "+ result);
});


app.listen(3000,function(){
  console.log("Server has started on port 3000");
});   // 3000 is a port.this line basically says app to listen to
                    //activity performed by the user
