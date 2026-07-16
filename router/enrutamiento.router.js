const express = require('express')
const clienteController = require('../controllers/cliente.controller')
const usuarioController = require('../controllers/usuario.controller')
const servicioController = require('../controllers/servicio.controller')
const productoController = require('../controllers/producto.controller')

const router = express.Router();

router.get('/clientes', clienteController.listar)
router.get('/clientes/:correo', clienteController.consultarCorreo) 
router.post('/clientes', clienteController.registrar) 
router.put('/clientes/:correo', clienteController.actualizar) 
router.delete('/clientes/:correo', clienteController.eliminar) 
router.get('/formulario', clienteController.formulario)

router.post('/enviar', usuarioController.contactar)
router.get('/formusuario', usuarioController.formusuario)
router.get('/listarUsuario', usuarioController.listar)

router.get('/servicios', servicioController.listar)
router.get('/formservicio', servicioController.formServicio)
router.get('/servicios/:nombre', servicioController.consultarNombre) 
router.post('/servicios', servicioController.registrar) 
router.put('/servicios/:nombre', servicioController.actualizar) 
router.delete('/servicios/:nombre', servicioController.eliminar) 

router.get('/productos', productoController.listar)
router.get('/formproducto', productoController.formProducto)
router.get('/productos/:id', productoController.consultarId) 
router.post('/productos', productoController.registrar) 
router.put('/productos/:id', productoController.actualizar) 
router.delete('/productos/:id', productoController.eliminar) 

module.exports = router;
