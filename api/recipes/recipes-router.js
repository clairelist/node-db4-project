const router = require('express').Router();
const Recipe = require('./recipes-model');

router.get('/:recipe_id',(req,res,next)=>{
    Recipe.getRecipeById(req.params.recipe_id)
        .then(resource=>{
            res.status(200).json(resource)
        }).catch(next);
})

//catchall endpoint, for error handling !
router.use('*',(req,res) => {
    res.json({api: 'up!'});
});

//error handle here !
router.use((err,req,res,next)=>{ //eslint-disable-line
    res.status(500).json({
        claireMessage: 'something BAD happened to recipes router!',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;