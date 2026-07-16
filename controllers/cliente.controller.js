const modeloCliente = require('../models/cliente.model');

exports.listar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find();
    res.render('pages/clientes', {clientes:clientes});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formulario = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find();
    res.render('pages/form', {mensaje: ""});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
// exports.registrar = async (req,res)=>{
//   try {
//     const clientes = await modeloCliente.insertOne();
//     res.render('pages/form')
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

exports.registrar = async (req,res)=>{
  try {
    console.log(req.body)
    let clienteNuevo ={
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }
    await modeloCliente.insertOne(clienteNuevo);
    res.redirect('/api/v1/clientes');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarCorreo = async (req,res)=>{
  try {
    const clientes = await modeloCliente.find({email:req.params.correo});
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



exports.actualizar = async (req,res)=>{
  try {
    let clienteNuevo ={
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }
    const clientes = await modeloCliente.updateOne({email:req.params.correo},{$set: clienteNuevo}
        );
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.eliminar = async (req,res)=>{
  try {
    const clientes = await modeloCliente.deleteOne({email:req.params.correo});
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

/**
en lugar de usar
module.exports para exportar
puede poner la palabra exports directamente en la funcion o variable
que deseo exportar

**/
