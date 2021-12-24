const express = require("express");

const app = express();
const port = 3000

app.post("/",(req, res)=>{

})

app.get("/get/:name",(req,res)=>{
    const param = req.params.name;
    res.send({Name: param})
})

app.listen(port,()=>{
    console.log("listening to port ", port)
})