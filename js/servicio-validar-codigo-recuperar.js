'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCodigo = document.querySelector('#txt-codigo');


const validar = () => {
    let error = false;
    let codigo = localStorage.getItem('codigoStorage');

    //Condicion para validar el codigo (SOLO VALIDA SI EXISTE)
    if (inputCodigo.value == '' || codigo != inputCodigo.value) {
        error = true;
        document.querySelector(".input-code").classList.add("input-error");
    } else {
        document.querySelector(".input-code").classList.remove("input-error");

    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Por favor revise los campos resaltados.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        let usuario = {
            '_id': JSON.parse(localStorage.getItem('usuarioSinVerificar'))._id,
            'cuentaVerificada': "1"
        };
        window.location.href = 'recuperar-cambiar.html';
    }

};


botonForm.addEventListener('click', validar);