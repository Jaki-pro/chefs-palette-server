import express from "express"
const app = express();
import cors from 'cors'
app.use(cors());
const port = 5000;  
app.get('/',(req, res)=>{
    res.json({message:'okk'})
})

//Find chef using chefId
 
//Find recipes of Chef

app.listen(5000, ()=>{
    console.log('running on port', port);
}) 