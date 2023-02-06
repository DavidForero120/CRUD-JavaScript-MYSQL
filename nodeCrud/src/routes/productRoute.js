const express = require('express');
const router = express.Router();
const validation = require('../auth/authUser');
const productController = require('../controllers/productController');
const multer = require('multer');
const sharp = require('sharp');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads')
    }, 
    filename: (req, file, cb)=>{
        const ext = file.originalname.split('.').pop(); //capture extension for image
        cb(null, `${Date.now()}.${ext}`);
    }
});

const upload = multer({storage});

router.get('/products', validation.sessiValidation, productController.list);

router.get('/newProduct', (req,res)=>{
    res.render('product/newProduct');
})
router.post('/sendData', upload.single('image'), (req, res)=>{
    res.send({data: 'image upload'})
});
module.exports = router