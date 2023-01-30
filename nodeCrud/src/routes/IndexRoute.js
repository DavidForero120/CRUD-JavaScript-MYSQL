const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/login', (req,res)=>{
    res.render('login',{error: ''});
});

router.get('/home/visit', (req,res)=>{
    if(req.session != null){
        res.redirect('/home/visit')
    }else{
        res.send('no')
    }
});

router.get('/user/register', (req, res)=>{
    res.render('register', {error : null});
});



module.exports = router;