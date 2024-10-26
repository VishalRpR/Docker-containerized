const express =require("express");
const dotenv=require("dotenv");
dotenv.config();


const app= express();
app.get('/home',(req,res)=>{
    return res.json({
        message:"hey therefdfdfdf"
    })
})

app.get('/about', (req, res) => {
    return res.json({
        message: "hey about"
    })
})
app.listen(process.env.PORT,()=>{
    console.log(`server started ${process.env.PORT}`)
})