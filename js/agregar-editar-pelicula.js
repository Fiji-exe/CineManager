'use strict'

const buttonSubirImagenView = document.getElementById("btn_cargar_imagen");
const imgCadena = document.getElementById("imagen-peli");
const buttonGuardar = document.getElementById("btn-crear-peli");

/*
 *
 * Obtener Categorias
 *
 *
 */

const recuperar_categorias_de_BD = async() => {
    return await obtenerCategorias();
}

const insertar_categorias = (lista) => {
        let opciones = "<option disabled selected>Elige una categoría</option>";
        let opciones_value = 0;
        lista.forEach(element => {
            opciones_value++;
            opciones += `<option value="${element._id}"> ${element.categoria} </option>`
        });

        document.getElementById('select-categorias').innerHTML = opciones;
    }
    //*prueba
recuperar_categorias_de_BD().then((res) => { insertar_categorias(res) });


/**
 * 
 * Cargar imagen
 * 
 */

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'da0h0oymq',
    uploadPreset: 'xfkkawkm'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imgCadena.src = result.info.secure_url;
    }
});

buttonSubirImagenView.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);

/*
 *
 * Vacios
 * Numeros negativos
 *
 */

const validar_inputs = () => {
    let validacion = true;
    /* LIMPIAR PREVIA VALIDACION */
    let nodelist_inputs_requeridos = document.querySelectorAll('[required]');
    nodelist_inputs_requeridos.forEach(input => {
        input.classList.remove('userinput-error');
        input.parentNode.classList.remove('userinput-error');
    });

    /* Checar vacios */
    nodelist_inputs_requeridos.forEach(input => {
        if (input.value === '') {
            input.classList.add('userinput-error');
            input.parentNode.classList.add('userinput-error');
        }
    });




    Swal.fire({
        'icon': 'success',
        'title': 'Éxito',
        'text': 'Película agregada correctamente',
        'confirmButtonText': 'Entendido'
    });

}

buttonGuardar.addEventListener('click', validar_inputs);