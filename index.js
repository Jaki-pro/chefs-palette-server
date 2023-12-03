import express from "express"
const app = express();
import cors from 'cors'
app.use(cors());
const port = 5000;
app.use("/", (req, res)=>{
    res.json({message:"Hello"})
})
app.listen(5000, ()=>{
    console.log('running on port', port);
}) 