'use strict';

const express = require('express');
const Usuario = require('../models/ejemplo-usuarios.model');
const router = express.Router();

router.post('/registrar-usuario', (req, res) => {

    let nuevoUsuario = new Usuario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        nacimiento: req.body.nacimiento,
        rol: req.body.rol,
        estado: req.body.estado,
        contrasenna: req.body.contrasenna
    });

    nuevoUsuario.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'Usuario registrado con éxito'
            });

        }
    });


});

router.get('/obtener-contacto', (req, res) => {
    contacto.find((error, lista) =>{
        if(error){
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        }
        else{
            res.json({
                msj: 'Contactos listados correctamente',
                lista
            });
        }
    });
});

router.put('/modificar-contacto', (req, res) => {});

router.delete('/eliminar-contacto', (req, res) => {});


module.exports = router;