'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCodigo = document.querySelector('#txt-codigo');


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
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado un correo de recuperacion.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            // Redireccionamos al dashboard luego de darle click al botón del sweet alert
            // window.location.href = 'dashboard.html';
        });
    }

};


botonForm.addEventListener('click', validar);