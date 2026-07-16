const mongoose = require('../config/connectiondb');

const servicioPeluqueriaSchema = new mongoose.Schema({
  nombre: { type: String, required: [true, "Digita un nombre válido"] },
  descripcion: { type: String },
  duracionMinutos: { type: Number, required: [true, "Pon un número válido"] },
  precio: { type: Number, required: [true, "Digita un precio válido"] },
  categoria: { 
    type: String, 
    enum: ['corte', 'tintura', 'peinado', 'tratamiento', 'barberia', 'otros'],
    required: [true, "Digita una opción válida"]} 
  },{versionKey:false});

module.exports = mongoose.model('servicios', servicioPeluqueriaSchema);
