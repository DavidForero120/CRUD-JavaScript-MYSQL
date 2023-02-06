const express = require('express');
const router = express.Router();
const validation = require('../auth/authUser');
const productController = require('../controllers/productController');
const path = require('path');

const multer = require('multer');
let fecha = Date.now();

let ruta = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,  path.join(__dirname, '../public/uploads/'));
    },
    filename: function (req, file, cb) {
        cb(null, fecha+"_"+file.originalname);
    }
});

let cargar = multer({ storage: ruta });


router.get('/products', validation.sessiValidation, productController.list);

router.get('/newProduct', (req,res)=>{
    res.render('product/newProduct');
});

router.post('/sendData', cargar.single("image") , productController.create);

module.exports = router