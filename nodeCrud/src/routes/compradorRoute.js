const express = require('express');
const router = express.Router();

const compradorController = require('../controllers/compradorController');

//consultar data
router.get('/', compradorController.list)

//add data
router.post('/addComprador', compradorController.saveComprador);

//delete data
router.get('/delete/:id', compradorController.eliminar);

//ConsultaUnDato
router.get('/update/:id', compradorController.consult);

//actualizar dato consultado
router.post('/up/:id', compradorController.edit);




module.exports = router;

