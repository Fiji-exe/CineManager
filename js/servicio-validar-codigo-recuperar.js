'use strict';

const botonForm = document.querySelector('#btn-account-form');

const inputCodigo = document.querySelector('#txt-codigo');


const validar = () => {
    let error = false;

    if (inputCodigo.value != localStorage.getItem('codigoUsuario')) {
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
            '_id': JSON.parse(localStorage.getItem('usuario'))._id,
            'cuentaVerificada': "1"
        };
        localStorage.removeItem('codigoUsuario');
        actualizarUsuario(usuario, '/recuperar-cuenta', 'recuperar-cambiar.html')
    }

};


botonForm.addEventListener('click', validar);