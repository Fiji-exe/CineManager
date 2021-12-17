'use strict';

const express = require('express');
const Usuarios = require('../models/usuarios.model');
const router = express.Router();
const mailer = require('../templates/codigo-verificacion');

router.post('/registrar-usuario', (req, res) => {
    console.log('Registrando');

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
        tipoUsuario: req.body.tipoUsuario,
        passwordUsuario: req.body.passwordUsuario,
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
            console.log(error);

        } else {
            res.json({
                msj: '<Usuario> Route JS: Usuario creado exitosamente.'
            })
            console.log('creado');

            mailer.enviarCodigoSignup(usuario.correoUsuario, usuario.primerNombre, req.body.codigoUsuario);
        }
    })
})

router.get('/listar-cuenta', (req, res) => {
    console.log(req.query.usuarioCorreo);
    Usuarios.find({ usuarioCorreo: req.query.usuarioCorreo }, (error, lista) => {
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
            return lista
        }
    })
});

/* router.get('/listar-una-cuenta', (req, res) => {
    Usuarios.findOne({ usuarioCorreo: req.body.usuarioCorreo }, (error, lista) => {
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
            return lista
        }
    })
}); */

router.put('/recuperar-cuenta', (req, res) => {
    let datosNuevos = {
        passwordUsuario: req.body.passwordUsuario,
    };
    Usuarios.updateOne({ usuarioCorreo: req.query.usuarioCorreo }, datosNuevos, error => {
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
    Usuarios.updateOne({ _id: req.body.id }, datosNuevos, error => {
        if (error) {
            res.json({
                msj: 'No se pudieron actualizar los datos.',
                error
            });
            console.log(error);
        } else {
            res.json({
                msj: 'Datos actualizados exitosamente.'
            });
            console.log('actualizado');
        }
    });
});

router.put('/annadir-tarjeta', (req, res) => {

    Usuarios.updateOne({ _id: req.body.id }, { $push: { metodos_pago: req.body.metodos_pago } }, error => {
        if (error) {
            res.json({
                msj: 'No se pudieron actualizar los datos.',
                error
            });
            console.log(error);
        } else {
            res.json({
                msj: 'Datos actualizados exitosamente.'
            });
            console.log('actualizado');
        }
    });
});


router.delete('/borrar-cuenta', (req, res) => {

    Usuarios.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al eliminar el usuario',
                error
            });
        } else {
            res.json({
                msj: 'El usuario se elimino exitosamente'
            });
        }
    });
});

module.exports = router;