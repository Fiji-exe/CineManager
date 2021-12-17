'use strict';
let fechaact = new Date();
let dia = fechaact.getDate();
let mes = fechaact.getMonth() + 1;
let anno = fechaact.getFullYear();
if (dia < 10) {
    dia = '0' + dia;
}
if (mes < 10) {
    mes = '0' + mes;
}
fechaact = anno + '-' + mes + '-' + dia;


document.getElementById("fecha").setAttribute("min", fechaact)

function mostrarResultado() {
    window.scrollTo(0, document.querySelector(".cartelera").scrollHeight);
}

const leerCartelera = async(pEndPoint) => {
    let url = `http://localhost:3000/api${pEndPoint}`;
    let msj = '';

    await axios({
        method: 'get',
        url: url,

    }).then(response => {
        msj = response.data.lista[0].cadena;
    });

    return msj;
};


const cargarCadenas = async() => {
    let cartelera = await leerCartelera('/obtener-cartelera');
    return cartelera
}

const listaCadenas = () => {
    for (let i = 0; i < data.length; i++) {
        option = document.createElement('option');
        option.text = data[i].name;
        option.value = data[i].abbreviation;
        dropdown.add(option);
    };
}

const imgPelicua = document.getElementById("imagen-pelicula");
const tituloPelicula = document.getElementById("titulo-pelicula");
const cadena = document.getElementById("cadena");
const categoria = document.getElementById("categoria");
const sinopsis = document.getElementById("sinopsis");
const calificacion = document.getElementById("calificacion");