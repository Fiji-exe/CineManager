'use strict';

const mongoose = require('mongoose');

let schemaUsuario = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    nacimiento: { type: Date, required: true },
    rol: { type: Number, required: true },
    estado: { type: Number, required: true },
    contrasenna: { type: String, required: false },
    metodosPago: [{
        nombre: { type: String },
        numero: { type: Number },
        tipo: { type: String },
        vencimiento: { type: String }
    }]
});

module.exports = new mongoose.model('Usuario', schemaUsuario, 'usuarios');