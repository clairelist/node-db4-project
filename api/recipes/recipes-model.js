//what do I have to do?
const lego = require('knex');

async function getRecipeById(recipe_id){
    return Promise.resolve(`recipe with id ${recipe_id} found!`)
}

module.exports = {
    getRecipeById
}