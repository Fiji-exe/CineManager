const mongoose = require('mongoose');

let schemaPelicula = new mongoose.Schema({
    nombre: { type: String, required: true },
    img_url: { type: String, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    duracion: { type: String, required: true },
    anno: { type: String, required: true },
    idioma: { type: String, required: true },
    subtitulos: { type: String, required: false },
    actores: { type: String, required: false }
});

module.exports = new mongoose.model('Pelicula', schemaPelicula, 'mongodb-coleccion-peliculas');