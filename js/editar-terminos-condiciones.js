'use strict';

const botonForm = document.querySelector('#btn-guardar');

const inputArea = document.querySelector('#txt-terminos');


const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;
    }

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Los terminos y condiciones no pueden estar vacios.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            title: '¿Está seguro de actualizar el contenido?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Actualizar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                actualizarTerminosyCondiciones();                         
            }
          }); 
    }
};

const actualizarTerminosyCondiciones = () =>{
    let datos = {
        _id: '61b9620389940607bce38cbd',
        terminos: inputArea.value
    }
    actualizarTerminos(datos, '/modificar-terminos', 'editar-terminos-condiciones.html');
}

const obtenerDatosTerminos = async() => {
    let terminos = await obtenerTerminosEditar('/obtener-terminos');
    inputArea.innerHTML = terminos[0].terminos;
}

botonForm.addEventListener('click', validar);
obtenerDatosTerminos();