const express = require("express");
const app = express();
const cors=require("cors")
const port = 3002;
const a=[]
app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    
    res.send(a);
});
app.post("/",(req,res)=>{
    a.push(req.body)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});