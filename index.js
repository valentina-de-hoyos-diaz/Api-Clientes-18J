require('dotenv').config()
const clienteController = require('./controllers/cliente.controller')

const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/clientes', clienteController.listar)

app.get('/clientes/:correo', clienteController.consultarCorreo) 

app.post('/clientes', clienteController.registrar) 

app.put('/clientes/:correo', clienteController.actualizar) 

app.delete('/clientes/:correo', clienteController.eliminar) 

app.listen(process.env.PORT);