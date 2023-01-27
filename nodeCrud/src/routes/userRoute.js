const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/newUser', userController.newUser );
router.post('/auth', userController.iniciar );

module.exports = router;