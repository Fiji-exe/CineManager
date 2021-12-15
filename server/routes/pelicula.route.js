'use strict';

const express = require('express');
const Pelicula = require('../models/pelicula.model');
const router = express.Router();

router.post('/agregar-pelicula', (req, res) => {

    let nuevoPelicula = new Pelicula({
        fecha: req.body.fecha,
        locacion_cine: req.body.locacion_cine,
        nombre_cine: req.body.nombre_cine,
        nombre_peli: req.body.nombre_peli,
        tipo_sala: req.body.tipo_sala,
        hora_inicio: req.body.hora_inicio,
        precio_total: req.body.precio_total,
        asientos: req.body.asientos
    });

    nuevoPelicula.save(error => {
        if (error) {
            res.json({
                msj: 'ERR <Pelicula> Route JS: No se pudo agregar-pelicula',
                error
            });
        } else {
            res.json({
                msj: 'OK <Pelicula> Route JS: Exito agregar-pelicula'
            });

        }
    });


});

router.get('/listar-peliculas', (req, res) => {
    Pelicula.find((error, lista) => {
        if (error) {
            res.json({
                msj: 'ERR <Reporte> Route JS: No se pudo listar-peliculas',
                error
            });
        } else {
            res.json({
                msj: 'OK <Reporte> Route JS: Exito listar-peliculas',
                reportes
            });
        }
    });
});

router.put('/modificar-pelicula', (req, res) => {
    let datos = {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        duracion: req.body.duracion,
        anno: req.body.anno,
        idioma: req.body.idioma,
        subtitulos: req.body.subtitulos,
        actores: req.body.actores
    }
    contacto.updateOne({ _id: req.body._id }, datos, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al actualizar contacto',
                error
            });
        } else {
            res.json({
                msj: 'El contacto se actualizo exitosamente'
            });
        }
    })
});



router.delete('/eliminar-contacto', (req, res) => {
    contacto.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al eliminar contacto',
                error
            });
        } else {
            res.json({
                msj: 'El contacto se elimino exitosamente'
            });
        }
    });
});

module.exports = router;