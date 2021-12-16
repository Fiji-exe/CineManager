'use strict';

const express = require('express');
const Pelicula = require('../models/pelicula.model');
const router = express.Router();

router.post('/agregar-pelicula', (req, res) => {

    let nuevoPelicula = new Pelicula({
        img_url: req.body.img_url,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        duracion: req.body.duracion,
        anno: req.body.anno,
        idioma: req.body.idioma,
        subtitulos: req.body.subtitulos,
        actores: req.body.actores
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
    Pelicula.find((error, peliculas) => {
        if (error) {
            res.json({
                msj: 'ERR <Reporte> Route JS: No se pudo listar-peliculas',
                error
            });
        } else {
            res.json({
                msj: 'OK <Reporte> Route JS: Exito listar-peliculas',
                peliculas
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
    Pelicula.updateOne({ _id: req.query._id }, datos, error => {
        if (error) {
            res.json({
                msj: 'ERR <Pelicula> Route JS: No se pudo modificar-pelicula',
                error
            });
        } else {
            res.json({
                msj: 'OK <Pelicula> Route JS: Exito modificar-pelicula'
            });
        }
    })
});



router.delete('/eliminar-pelicula', (req, res) => {
    Pelicula.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'ERR <Pelicula> Route JS: No se pudo modificar-pelicula',
                error
            });
        } else {
            res.json({
                msj: 'OK <Pelicula> Route JS: Exito modificar-pelicula'
            });
        }
    });
});

module.exports = router;