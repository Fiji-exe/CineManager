'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCorreo = document.querySelector('#txt-correo');


function validarEmail(email) {
    let resultado = false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    resultado = re.test(email);
    return resultado;
}

const validar = () => {
    let error = false;

    // Condición que valida el correo
    if (validarEmail(inputCorreo.value)) {
        document.querySelector('.input-email').classList.remove('input-error');
    } else {
        error = true;
        document.querySelector('.input-email').classList.add('input-error');
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor complete los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado un correo de recuperación.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = 'recuperar-validar.html';
        });

        //DELETE .then ONCE RECOVERY EMAIL IS SENT  
    }

};


botonForm.addEventListener('click', validar);