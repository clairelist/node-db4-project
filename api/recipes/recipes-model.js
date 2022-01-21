//what do I have to do?
//WRAP IT UP !
const db = require('../../data/db-config.js');

async function getRecipeById(recipe_id){
    const rowes = await db('recipes as r')
        .where('recipe_id',recipe_id);
    return rowes;
}

module.exports = {
    getRecipeById
}