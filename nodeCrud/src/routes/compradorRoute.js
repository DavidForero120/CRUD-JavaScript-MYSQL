const express = require('express');
const router = express.Router();

const compradorController = require('../controllers/compradorController');

//consultar data
router.get('/', compradorController.list)

//add data
router.post('/addComprador', compradorController.saveComprador)


module.exports = router;

