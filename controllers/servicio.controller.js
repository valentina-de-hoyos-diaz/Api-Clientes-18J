const modeloServicio = require('../models/servicio.model');

exports.listar = async (req,res)=>{
  try {
    const servicios = await modeloServicio.find();
    res.render('pages/servicios', {servicios:servicios});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formServicio = async (req,res)=>{
  try {
    res.render('pages/formservicio', {mensaje: ""});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarNombre = async (req,res)=>{
  try {
    const servicios = await modeloServicio.find({nombre:req.params.nombre});
    res.json(servicios);                    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.registrar = async (req,res)=>{
  try {
    let servicioNuevo ={
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        duracionMinutos: parseInt(req.body.duracionMinutos),
        precio: parseInt(req.body.precio),
        categoria: req.body.categoria
    }
    const servicios = await modeloServicio.insertOne(servicioNuevo);
    res.render('pages/servicios', {mensaje: "Registro exitoso!!"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.actualizar = async (req,res)=>{
  try {
    let servicioNuevo ={
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        duracionMinutos: parseInt(req.body.duracionMinutos),
        precio: parseInt(req.body.precio),
        categoria: req.body.categoria
    }
    const servicios = await modeloServicio.updateOne({nombre:req.params.nombre},{$set: servicioNuevo});
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async (req,res)=>{
  try {
    const servicios = await modeloServicio.deleteOne({nombre:req.params.nombre});
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
