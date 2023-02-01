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
    console.log(req.session)
    res.send('perra')
});
router.get('/user/register', (req, res)=>{
    res.render('register', {error : null,exito: null});
});



module.exports = router;