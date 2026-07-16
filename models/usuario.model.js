const mongoose = require('../config/connectiondb');

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: [true, 'el correo es obligatorio'], unique: [true, 'el correo es único'] },
  password: { type: String, trim: true, required: true, minLength: [7, 'Ingresa una contraseña más larga'] },
  rol: { type: String,  required: [true, 'el rol es obligatorio'], default: 'invitado', enum: ['cliente', 'empleado', 'administrador']}
},{versionKey:false});

module.exports = mongoose.model('usuarios', usuarioSchema); 