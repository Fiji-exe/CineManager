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
    event.preventDefault();
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
        document.querySelector(".input-date-start").classList.add("input-error");
    } else {
        document.querySelector(".input-date-start").classList.remove("input-error");
    }

    //Condicion para validar la fecha de fin (SOLO VALIDA SI NO ES EL DEFAULT)
    if (fechaFin.value == '') {
        error = true;
        document.querySelector(".input-date-end").classList.add("input-error");
    } else {
        document.querySelector(".input-date-end").classList.remove("input-error");
    }

    //Condicion para validar la hora de inicio (SOLO VALIDA SI NO ES EL DEFAULT)
    if (horaInicio.value == '') {
        error = true;
        document.querySelector(".input-time-start").classList.add("input-error");
    } else {
        document.querySelector(".input-time-start").classList.remove("input-error");
    }
    
    //Condicion para validar la hora de fin (SOLO VALIDA SI NO ES EL DEFAULT)
    if (horaFin.value == '') {
        error = true;
        document.querySelector(".input-time-end").classList.add("input-error");
    } else {
        document.querySelector(".input-time-end").classList.remove("input-error");
    }

    if (precioBaseCartelera.value < 0 || precioBaseCartelera.value == '') {
        error = true;
        document.querySelector(".input-base-price").classList.add("input-error");
    } else {
        document.querySelector(".input-base-price").classList.remove("input-error");
    }
;
    if (error == true) {

        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor revise los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha actualizado la cartelera',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'homepage-usuario.html';
        });;
    }

};


botonGuardar.addEventListener('click', validar);