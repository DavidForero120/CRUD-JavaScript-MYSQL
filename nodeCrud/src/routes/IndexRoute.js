const express = require('express');
const router = express.Router();
const validation = require('../auth/authUser');

//INITIAL ROUTE
router.get('/',validation.destroy, (req, res)=>{
    res.render('index');
});

//SING IN TO APPLICATION WEB
router.get('/login', validation.destroy, (req,res)=>{
        res.render('login', {error: null});  
});

//SESSION NO EXIST OR EXPIRED
router.get('/session/expired', validation.destroy, (req,res)=>{
    res.render('sessionull');
});


//ROL VISIT
router.get('/home/visit', validation.sessiValidation, /*validation.leave,*/ (req,res)=>{
        res.render('visit/home');
    
});

//ROL ADMIN
router.get('/home/admin', validation.sessiValidation, /*validation.leave,*/ (req,res)=>{
        res.render('admin/home');  
});
//NEW USER
router.get('/user/register', (req, res)=>{
    res.render('register', {error : null, exito: null});
});
//DELETE SESSION
router.get('/exit', (req,res)=>{
    req.session.destroy();
    res.redirect('/');
});


module.exports = router;