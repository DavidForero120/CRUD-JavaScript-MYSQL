const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/login', (req,res)=>{
    res.render('login',{error: ''});
});

router.get('/user/register', (req, res)=>{
    res.render('register', {error : null});
});



module.exports = router;