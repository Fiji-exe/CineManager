'use strict';

const mongoose = require('mongoose');

let schemaUsuarios = new mongoose.Schema({
    primerNombre: { type: String, required: true },
    segundoNombre: { type: String },
    primerApellido: { type: String, required: true },
    segundoApellido: { type: String },
    fechaNacimiento: { type: Date, required: true },
    tipoId: { type: String, required: true },
    numeroId: { type: String, required: true, unique: true },
    correoUsuario: { type: String, required: true, unique: true },
    passwordUsuario: { type: String, required: true },
});

module.exports = new mongoose.model('Usuario', schemaUsuarios, 'usuarios');