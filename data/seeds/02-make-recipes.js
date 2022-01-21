//DATA SECTIONR

const recipes = [
    { recipe_name: 'Broccoli Zest'},
    { recipe_name: 'Lemon Salmon Delight'},
    { recipe_name : 'Lemon Salmon Terror'}
]

const ingredients = [
    { ingredient_name: 'Broccoli', ingredient_measurement: 'Grams'},
    { ingredient_name: 'Lemon', ingredient_measurement: 'Slices'},
    { ingredient_name: 'Pasta', ingredient_measurement: 'Lbs'},
    { ingredient_name: 'Salmon', ingredient_measurement: 'Grams'},
    { ingredient_name: 'Delight', ingredient_measurement: 'Ounces'},
    { ingredient_name: 'Terror', ingredient_measurement: 'Ouches'},
]

const step_ingredients = [
    //BROCOCOCLOR zest!
    { step_id: 1, ingredient_id: 1, quantity: 0.2},
    { step_id: 1, ingredient_id: 2, quantity: 5},

    //uhh the salmon DELIGHT
    {step_id: 1, ingredient_id: 4, quantity: 1},
    {step_id: 2, ingredient_id: 3, quanity: 0.8},
    {step_id: 2, ingredient_id: 5, quantity: 78}

    //uh too, used too much DELIGHT! time for TERROR!
    {step_id: 1, ingredient_id: 4, quantity: 1},
    {step_id: 2, ingredient_id: 3, quanity: 0.8},
    {step_id: 2, ingredient_id: 4, quantity: 666}
]

const steps = [
    //Brocooli zest !
    { step_text: 'cut your brocolli and get ready', step_number: 1, recipe_id : 1 },
    { step_text: 'Do the needful to the brocoolii', step_number: 2, recipe_id: 1 },
    { step_text: 'Just cook it you nerd!!', step_number: 3, recipe_id: 1},

    //Lemon Salmon DELIGHT!
    { step_text: 'cut your SALMON and get ready', step_number: 1, recipe_id : 2 },
    { step_text: 'Do the needful to the salmon', step_number: 2, recipe_id: 2 },
    { step_text: 'DELIGHT at your creation!', step_number: 3, recipe_id: 2},

    //Lemon Salmon TERROR!
    { step_text: 'cut your SALMNNRN and get ready dweeb.', step_number: 1, recipe_id : 3 },
    { step_text: 'Do the needful to the salmon.', step_number: 2, recipe_id: 3 },
    { step_text: 'TERROR! At your creation!!', step_number: 3, recipe_id: 3},
]