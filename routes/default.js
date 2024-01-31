const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json('Hello this E-commerce API..')
});

module.exports = router;
