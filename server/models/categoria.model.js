'use strict';

const mongoose = require('mongoose');

let schemaCategoria = new mongoose.Schema({
    categoria: { type: String, required: true },
});

module.exports = new mongoose.model('Categoria', schemaCategoria, 'categorias');