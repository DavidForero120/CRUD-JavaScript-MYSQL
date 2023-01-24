const express = require('express');
const router = express.Router();

const compradorController = require('../controllers/compradorController');


router.get('/', compradorController.list)




module.exports = router;

