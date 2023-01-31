const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index');
});

router.get('/login', (req,res)=>{
    res.render('login',{error: null});
});
router.get('/session/expired', (req,res)=>{
    res.render('sessionull');
})

router.get('/home/visit', (req,res)=>{
    if(req.session != null){
        res.redirect('/home/visit')
    }else{
        res.redirect('/session/expired')
    }
});
router.get('/user/register', (req, res)=>{
    res.render('register', {error : null,exito: null});
});



module.exports = router;