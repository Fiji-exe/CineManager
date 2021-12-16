'use strict';

const express = require('express');
const Usuario = require('../models/categoria.model');
const router = express.Router();

router.post('/registrar-categoria', (req, res) => {

    let nuevaCategoria = new Categoria({
        categoria: req.body.categoria,

    });

    nuevaCategoria.save(error => {
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

router.get('/obtener-categoria', (req, res) => {
    categoria.find((error, lista) => {
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

router.put('/modificar-categoria', (req, res) => {
    let datos = {
        categoria: req.body.categoria
    }
    categoria.updateOne({ _id: req.body._id }, datos, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al actualizar la categoria',
                error
            });
        } else {
            res.json({
                msj: 'La categoria se actualizo exitosamente'
            });
        }
    })
});

router.delete('/eliminar-categoria', (req, res) => {

    categoria.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                msj: 'Ocurrio un error al eliminar categoria',
                error
            });
        } else {
            res.json({
                msj: 'La categoria se elimino exitosamente'
            });
        }
    });
});


module.exports = router;