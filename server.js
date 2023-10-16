const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    console.log("hello world");
    res.send("hello from jekins enviorment")
})
app.listen(3000,(req,res)=>{
    console.log("listening to 3000 port");
    res.sendStatus(200);
} )
    
