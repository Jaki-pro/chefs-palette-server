import express from "express"
const app = express();
const port = 5000;
app.use("/", (req, res)=>{
    res.json({message:"Hello"})
})
app.listen(5000, ()=>{
    console.log('running on port', port);
}) 