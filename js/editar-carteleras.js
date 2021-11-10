'use strict';

const botonGuardar = document.querySelector('#btn-carteleras-guardar');

const selectPelicula = document.querySelector('#select-pelicula');
const idCartelera = document.querySelector('#txt-id-cartelera');
const fechaInicio = document.querySelector('#date-cartelera-fecha-inicio');
const fechaFin = document.querySelector('#date-cartelera-fecha-fin');
const horaInicio = document.querySelector('#date-cartelera-hora-inicio');
const horaFin = document.querySelector('#date-cartelera-hora-fin');
const precioBaseCartelera = document.querySelector('#num-cartelera-precio');

const validar = () => {
    let error = false;

    //Condicion para validar el codigo de sala (SOLO VALIDA SI EXISTE)
    if (idCartelera.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }

    //Condicion para validar la fecha de inicio (SOLO VALIDA SI NO ES EL DEFAULT)
    if (fechaInicio.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }

    //Condicion para validar la fecha de fin (SOLO VALIDA SI NO ES EL DEFAULT)
    if (fechaFin.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }

    //Condicion para validar la hora de inicio (SOLO VALIDA SI NO ES EL DEFAULT)
    if (horaInicio.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }
    
    //Condicion para validar la hora de fin (SOLO VALIDA SI NO ES EL DEFAULT)
    if (horaFin.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }

    if (error == true) {
        event.preventDefault()
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
    }

};


botonGuardar.addEventListener('click', validar);