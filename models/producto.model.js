const mongoose = require('../config/connectiondb');

const productoSchema = new mongoose.Schema({
  consecutivo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: { type: String },
  imagen: { type: String }
},{versionKey:false});

module.exports = mongoose.model('productos', productoSchema);
