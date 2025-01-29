const express=require("express"
)

const app=express()
const port=3000
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get("/",(req,res)=>{
    const pixel={
        x:50
        ,y:100
        ,color:"black"
    }
    res.send(pixel)
})
app.listen(port,()=>{
    console.log(1)
})