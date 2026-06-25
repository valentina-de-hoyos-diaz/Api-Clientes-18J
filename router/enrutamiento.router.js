const express = require('express')
const clienteController = require('../controllers/cliente.controller')

const router = express.Router();

router.get('/clientes', clienteController.listar)
router.get('/clientes/:correo', clienteController.consultarCorreo) 
router.post('/clientes', clienteController.registrar) 
router.put('/clientes/:correo', clienteController.actualizar) 
router.delete('/clientes/:correo', clienteController.eliminar) 

router.get('/formulario', clienteController.formulario)

module.exports = router;