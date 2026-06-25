const mongoose = require('../config/connectiondb');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: { type: String }
},{versionKey:false});

module.exports = mongoose.model('clientes', clienteSchema); 