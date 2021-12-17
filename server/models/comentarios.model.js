'use strict';

const mongoose = require('mongoose');

let schemaComentario = new mongoose.Schema({
    comentario: { type: String, required: true },
    calificacion: { type: Number, required: true },
    usuario: { type: String, required: true },
    foto: { type: String, required: true },
    tipo: { type: String, required: true },
    nombre: { type: String, required: true }
});

module.exports = new mongoose.model('Comentario', schemaComentario, 'comentarios');