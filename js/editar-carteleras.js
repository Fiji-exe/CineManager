'use strict';

const botonGuardar = document.querySelector('#btn-cartelera-save');

const selectPelicula = document.querySelector('#select-pelicula');
const idCartelera = document.querySelector('#txt-id-cartelera');
const precioBaseCartelera = document.querySelector('#num-cartelera-precio');

const validar = () => {
    let error = false;

    //Condicion para validar el codigo (SOLO VALIDA SI EXISTE)
    if (inputCodigo.value == '') {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        window.location.href = 'homepage-usuario.html';
    }

};


botonGuardar.addEventListener('click', validar);