const express=require("express")
const app=express()
const port=3000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    next();
  });
app.get("/",(rew,res)=>{
    const a={
        x:0,
        y:0,
        color:"blue"
    }
    res.send(a)
})
app.listen(port,()=>{
    console.log(`exemple${port}`)
})
