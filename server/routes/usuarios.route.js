'use strict';

const express = require('express');
const usuariosModel = require('../models/usuarios.model');
const router = express.Router();

router.post('/registrar-usuario', (req, res) => {
    let nuevoUsuario = new usuariosModel({
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
        cadena: req.body.cadena,
        metodos_pago: req.body.metodos_pago,
    });

    nuevoUsuario.save(error => {
        if (error) {
            res.json({
                msj: 'ERR <Usuario> Route JS: No se pudo crear usuario.'
            });
        } else {
            res.json({
                msj: '<Usuario> Route JS: Usuario creado exitosamente.'
            })
        }
    })
})

router.get('/listar-cuenta', (req, res) => {})

router.put('/modificar-cuenta', (req, res) => {
    let datosNuevos = {
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
        cadena: req.body.cadena,
        metodos_pago: req.body.metodos_pago,
    };
})

router.delete('/borrar-cuenta', (req, res) => {})

module.exports = router;