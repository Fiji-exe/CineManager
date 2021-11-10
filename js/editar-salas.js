'use strict';

const botonGuardar = document.querySelector('#btn-sala-guardar');
const botonBorrar = document.querySelector('#btn-sala-borrar');

const idSala = document.querySelector('#txt-id-sala');
const salaCadena = document.querySelector('#txt-cadena-sala');
const salaPrecio = document.querySelector('#txt-sala-precio');
const salaDimY = document.querySelector('#num-sala-y');
const salaDimX = document.querySelector('#num-sala-X');

const validar = () => {
    event.preventDefault();
    let error = false;

    //Condicion para validar el codigo de sala (SOLO VALIDA SI EXISTE)
    if (idSala.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }

    if (salaPrecio.value < 0 || salaPrecio.value == '') {
        error = true;
        document.querySelector(".input-base-price").classList.add("input-error");
    } else {
        document.querySelector(".input-base-price").classList.remove("input-error");
    }

    if (salaDimY.value > 30 || salaDimY.value < 0 || salaDimY.value == '') {
        error = true;
        document.querySelector(".input-room-height").classList.add("input-error");
    } else {
        document.querySelector(".input-room-height").classList.remove("input-error");
    }

    if (salaDimX.value > 30 || salaDimX.value < 0 || salaDimX.value == '') {
        error = true;
        document.querySelector(".input-room-width").classList.add("input-error");
    } else {
        document.querySelector(".input-room-width").classList.remove("input-error");
    }
;
    if (error == true) {

        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
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