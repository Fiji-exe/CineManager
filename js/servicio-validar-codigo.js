'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCodigo = document.querySelector('#txt-codigo');


const validar = () => {
    let error = false;

    //Condicion para validar el codigo (SOLO VALIDA SI EXISTE)
    if (inputCodigo.value != localStorage.getItem('codigoUsuario')) {
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


botonForm.addEventListener('click', validar);