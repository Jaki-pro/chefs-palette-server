import express from "express"
const app = express();
import cors from 'cors'
app.use(cors());
const port = 5000;
import chefs from './data/chefs.json'
import recipes from './data/recipes.json'
app.get('/',(req, res)=>{
    res.json({message:'okk'})
})

//Find chef using chefId
app.get('/chef-details/:chefId',  (req, res) => {
    
        const chefExist = chefs.find(chef => chef.chefId == req.params.chefId) || {}
        res.send(chefExist);
})

//Find recipes of Chef
app.get('/chef/:chefId', (req, res) => {
    if (req.params.chefId == 0) res.send(recipes);
    else {
        const selectedRecipes = recipes.filter(recipe => recipe.chefId == req.params.chefId) || {}
        res.send(selectedRecipes);
    }
})

app.get('/recipes', (req, res) => {
    res.send(recipes);
})
app.get('/chefs', (req, res) => {
    res.send(chefs);
})

//Find recipes of id
app.get('/recipe-details/:recipeId', (req, res) => {

    const selectedRecipes = recipes.find(recipe => recipe.id == req.params.recipeId) || {}
    res.send(selectedRecipes);

})

//Find recipes of period
app.get('/period/:time',  (req, res) => {

    const selectedRecipes = recipes.filter(recipe => recipe.period == req.params.time) || {}
    res.send(selectedRecipes);

}) 

 
app.listen(5000, ()=>{
    console.log('running on port', port);
}) 