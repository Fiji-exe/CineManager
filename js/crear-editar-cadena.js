'use strict';

const margenGananciaSlider = document.querySelector("#slider-margen-ganancia");
const margenGananciaLabel = document.querySelector("#margen-ganancia-label");
const buttonSubirImagenView = document.querySelector('#btn-subir-imagen');
const buttonSubirImagenData = document.querySelector('#btn-subir-imagen-data');

const txtCodigo = document.querySelector('#txt-codigo');
const txtNombre = document.querySelector('#txt-nombre');
const txtUbicacion = document.querySelector('#txt-ubicacion');
const txtJefe = document.querySelector('#txt-jefe');

const btnCrear = document.querySelector('#btn-crear');
const btnsobrescribir = document.querySelector('#btn-sobrescribir');
const btnEliminar = document.querySelector('#btn-eliminar');


margenGananciaLabel.innerHTML = margenGananciaSlider.value + '%'; // Display the default slider value



// Update the current slider value (each time you drag the slider handle)
const updateValueMargenLabel = () => {
    margenGananciaLabel.innerHTML = margenGananciaSlider.value  + '%' ;
}

const btnSubirImagenClicked = () => {
    buttonSubirImagenData.click();
}

const validar = () => {
    let error = false;

    if (txtCodigo.value == '') {
        error = true;
        document.querySelector('.input-codigo').classList.add('input-error');
    }
    else {
        document.querySelector('.input-codigo').classList.remove('input-error');
    }

    if (txtNombre.value == '') {
        error = true;
        document.querySelector('.input-nombre').classList.add('input-error');
    }
    else {
        document.querySelector('.input-nombre').classList.remove('input-error');
    }

    if (txtUbicacion.value == '') {
        error = true;
        document.querySelector('.input-ubicacion').classList.add('input-error');
    }
    else {
        document.querySelector('.input-ubicacion').classList.remove('input-error');
    }

    if (txtJefe.value == 'Seleccionar') {
        error = true;
        document.querySelector('.input-jefe').classList.add('input-error');
    }
    else {
        document.querySelector('.input-jefe').classList.remove('input-error');
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos en rojo',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha guardado la informacion.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            // Redireccionamos al dashboard luego de darle click al botón del sweet alert
            // window.location.href = 'dashboard.html';
        });
    }
}

margenGananciaSlider.addEventListener('input', updateValueMargenLabel);
buttonSubirImagenView.addEventListener("click", btnSubirImagenClicked);
btnCrear.addEventListener("click", validar);
btnsobrescribir.addEventListener("click", validar);
btnCrear.addEventListener("click", validar);