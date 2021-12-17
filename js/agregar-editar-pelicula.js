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
        let tag = input.tagName;
        if (tag === 'TEXTAREA') {
            input.classList.remove('input-error');
        } else {
            input.parentNode.classList.remove('input-error');
        }
    });

    /* Checar vacios */
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    // }
    nodelist_inputs_requeridos.forEach(input => {
        let tag = input.tagName;
        if (input.value === '') {
            validacion = false;
            if (tag === 'TEXTAREA') {
                input.classList.add('input-error')
            } else {
                input.parentNode.classList.add('input-error');

            }
        }
    });

    if (validacion) {
        compilar_inputs();
    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Error',
            'text': 'Por favor, verifique los campos',
            'confirmButtonText': 'Entendido'
        });
    }

}

const compilar_inputs = () => {
    let nodelist_inputs_requeridos = document.querySelectorAll('[required]');

    let datos = {
        img_url: document.getElementsByTagName('img')[0].src,
        nombre: nodelist_inputs_requeridos[0].value,
        categoria: nodelist_inputs_requeridos[1].value,
        descripcion: nodelist_inputs_requeridos[2].value,
        duracion: nodelist_inputs_requeridos[3].value,
        anno: nodelist_inputs_requeridos[4].value,
        idioma: nodelist_inputs_requeridos[5].value,
        subtitulos: nodelist_inputs_requeridos[6].value,
        actores: nodelist_inputs_requeridos[7].value,
    }

    registrarPelicula(datos);


}

buttonGuardar.addEventListener('click', validar_inputs);