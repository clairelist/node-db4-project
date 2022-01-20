const router = require('express').Router();

//catchall endpoint, for error handling !
router.use('*',(req,res,next) => {
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