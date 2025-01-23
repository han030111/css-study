const express=require("express")
const app=express()
const port=3000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    next();
  });
app.get("/",(req,res)=>{
    a={
        name:"최두영"
    }
    res.send(a)
})
app.listen(port,()=>{
    console.log(port)
})