import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors()); 
const port = 5000;  
app.get('/',(req, res)=>{
    req='no-cors'
    res.send({"ok":'okk'})
})

//Find chef using chefId
 
//Find recipes of Chef

app.listen(5000, ()=>{
    console.log('running on port', port);
}) 