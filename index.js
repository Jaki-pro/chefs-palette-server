import express from 'express'
import cors from 'cors'
const app = express() 
import * as chefsData from 'file:///C:/react/firebase/Big%20Project/palette-server/data/chefs.json' assert { type: 'json' };
app.use(cors()); 
const port = 5000;  
app.get('/',(req, res)=>{
    req='no-cors'
    res.send(chefsData)
})

//Find chef using chefId
//Find recipes of Chef

app.listen(5000, ()=>{
    console.log('running on port', port);
}) 