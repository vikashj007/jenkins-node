const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    console.log("hello world");
    res.send("hello from jekins enviorment")
})
app.listen(4000,()=>{
    console.log("app is running on 4000");
          );
    
