'use strict';

const mongoose = require('mongoose');

let schemaUsuarios = new mongoose.Schema({
    foto: { type: String, required: true },
    primerNombre: { type: String, required: true },
    segundoNombre: { type: String },
    primerApellido: { type: String, required: true },
    segundoApellido: { type: String },
    fechaNacimiento: { type: Date, required: true },
    tipoId: { type: String, required: true },
    numeroId: { type: String, required: true, unique: true },
    correoUsuario: { type: String, required: true, unique: true },
    passwordUsuario: { type: String, required: true },
    tipoUsuario: { type: String, required: true },
    cuentaVerificada: { type: String, required: true },
    cadena: { type: String, required: false },
    metodos_pago: [{
        numero: { type: String, required: true },
        mes: { type: Number, required: true },
        anno: { type: Number, required: true },
        cvc: { type: Number, required: true },
        nombre_titular: { type: String, required: true },
        direccion: { type: String, required: true },
        provincia: { type: String, required: true },
        canton: { type: String, required: true },
        distrito: { type: String, required: true }
    }]
});

module.exports = new mongoose.model('Usuario', schemaUsuarios, 'usuarios');