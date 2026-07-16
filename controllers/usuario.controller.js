const modeloUsuario = require('../models/usuario.model');
const servicioEmail = require('../services/email.service');

exports.listar = async (req,res)=>{
  try {
    const users = await modeloUsuario.find();
    res.render('pages/listarUsuario', {users:users});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.contactar = async(req, res)=>{
  const asunto = req.body.asunto
  const destinatario = req.body.mail
  const comentario = req.body.comentario
  servicioEmail.sendEmail(destinatario, asunto, comentario)

}

exports.registrar = async (req,res)=>{
  try {
    console.log(req.body)
    let usuarioNuevo ={
        email: req.body.email,
        password: req.body.telefono,
        rol: req.body.rol
    }
    const users = await modeloUsuario.insertOne(usuarioNuevo);
    res.render('pages/formusuario' ,{mensaje: "Registro exitoso!!"});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.formusuario = async (req,res)=>{
  try {
    const users = await modeloUsuario.find();
    res.render('pages/formusuario', {mensaje: ""});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}