'use strict';

const botonRecuperar = document.querySelector('#btn-recuperar');
const inputCorreo = document.querySelector('#txt-correo');

const validarEmail = (email) =>{
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
            'title': 'El correo introducido es invalido',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha enviado un correo de recuperacion a la siguiente direccion:',
            'text': inputCorreo.value,
            'confirmButtonText': 'Entendido'
        }).then(() => {
            // Redireccionamos al dashboard luego de darle click al botón del sweet alert
            // window.location.href = 'dashboard.html';
        });
    }

};



botonRecuperar.addEventListener('click', validar);
