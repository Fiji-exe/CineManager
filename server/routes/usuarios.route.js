'use strict';

const express = require('express');
const Usuarios = require('../models/usuarios.model');
const router = express.Router();
const mailer = require('../templates/codigo-verificacion');

router.post('/registrar-usuario', (req, res) => {
    let nuevoUsuario = new Usuarios({
        foto: req.body.foto, // NEW 
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        fechaNacimiento: req.body.fechaNacimiento,
        tipoId: req.body.tipoId,
        numeroId: req.body.numeroId,
        correoUsuario: req.body.correoUsuario,
        passwordUsuario: req.body.passwordUsuario,
        tipoUsuario: req.body.tipoUsuario,
        cuentaVerificada: req.body.cuentaVerificada,
        cadena: req.body.cadena,
        metodos_pago: req.body.metodos_pago,
    });

    nuevoUsuario.save((error, usuario) => {
        if (error) {
            res.json({
                msj: 'ERR <Usuario> Route JS: No se pudo crear usuario.',
                error
            });
        } else {
            res.json({
                msj: '<Usuario> Route JS: Usuario creado exitosamente.'
            })

            mailer.enviarCodigo(usuario.correoUsuario, usuario.primerNombre, req.body.codigoUsuario);
        }
    })
})

router.get('/listar-cuenta', (req, res) => {
    Usuarios.find({ usuarioCorreo: req.query.usuarioCorreo}, (error, lista) => {
        if (error) {
            res.json({
                msj: 'No se pudo encontrar la información en la base de datos.',
                error
            })
        } else {
            res.json({
                msj: 'Usuario encontrado exitosamente.',
                lista
            })
        }
    })
})

router.put('/modificar-cuenta', (req, res) => {
    let datosNuevos = {
        foto: req.body.foto,
        primerNombre: req.body.primerNombre,
        segundoNombre: req.body.segundoNombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        fechaNacimiento: req.body.fechaNacimiento,
        tipoId: req.body.tipoId,
        numeroId: req.body.numeroId,
        correoUsuario: req.body.correoUsuario,
        passwordUsuario: req.body.passwordUsuario,
        tipoUsuario: req.body.tipoUsuario,
        cuentaVerificada: req.body.cuentaVerificada,
        cadena: req.body.cadena,
        metodos_pago: req.body.metodos_pago,
    };
    Usiario.updateOne({ _id: req.body.id }, datosNuevos, error => {
        if (error) {
            res.json({
                msj: 'No se pudieron actualizar los datos.',
                error
            });
        } else {
            res.json({
                msj: 'Datos actualizados exitosamente.'
            });
        }
    });
});

router.delete('/borrar-cuenta', (req, res) => {})

module.exports = router;