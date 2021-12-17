'use strict';

const express = require('express');

const comentario = require('../models/comentarios.model');

const router = express.Router();

router.post('/registrar-comentario', (req, res) => {

    let nuevoComentario = new comentario({
        comentario:        req.body.comentario,
        calificacion:      req.body.calificacion,
        usuario:           req.body.usuario,    
        foto:              req.body.foto,    
        tipo:              req.body.tipo,       
        nombre:            req.body.nombre      
    });

    console.log(nuevoComentario);

    nuevoComentario.save(error => {
        if (error) {
            res.json({
                msj: 'No se pudo registrar la categoria',
                error
            });
        } else {
            res.json({
                msj: 'Categoria registrado con éxito'
            });

        }
    });


});

router.get('/obtener-comentarios', (req, res) => {

    console.log({nombre: req.query.nombre,  tipo: req.query.tipo});
    comentario.find({nombre: req.query.nombre,  tipo: req.query.tipo},(error, lista) => {
        if (error) {
            res.json({
                msj: 'Fallo la consulta',
                error
            });
        } else {
            res.json({
                msj: 'Categoria listada correctamente',
                lista
            });
        }
    });
});

module.exports = router;