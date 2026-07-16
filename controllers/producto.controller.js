const modeloProducto = require('../models/producto.model');

exports.listar = async (req,res)=>{
  try {
    const respuesta = await fetch('https://fakestoreapi.com/products');
    const productos = await respuesta.json();
    res.render('pages/productos', {productos:productos});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formProducto = async (req,res)=>{
  try {
    res.render('pages/formproducto', {mensaje: ""});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarId = async (req,res)=>{
  try {
    const producto = await modeloProducto.findOne({consecutivo: parseInt(req.params.id)});
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async (req,res)=>{
  try {
    let productoNuevo = {
      consecutivo: parseInt(req.body.consecutivo),
      nombre: req.body.nombre,
      precio: parseInt(req.body.precio),
      descripcion: req.body.descripcion,
      imagen: req.body.imagen
    }
    const producto = await modeloProducto.insertOne(productoNuevo);
    res.render('pages/productos', {mensaje: "Registro exitoso!!"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.actualizar = async (req,res)=>{
  try {
    let productoNuevo = {
      consecutivo: parseInt(req.body.consecutivo),
      nombre: req.body.nombre,
      precio: parseInt(req.body.precio),
      descripcion: req.body.descripcion,
      imagen: req.body.imagen
    }
    const producto = await modeloProducto.updateOne(
      {consecutivo: parseInt(req.params.id)},
      {$set: productoNuevo}
    );
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async (req,res)=>{
  try {
    const producto = await modeloProducto.deleteOne({consecutivo: parseInt(req.params.id)});
    if (!producto) {
      return res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
