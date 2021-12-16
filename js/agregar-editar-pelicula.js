'use strict'

const buttonSubirImagenView = document.getElementById("btn_cargar_imagen");

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
            opciones += `<option value="${opciones_value}"> ${element.categoria} </option>`
        });

        console.log(opciones)

        document.getElementById('select-categorias').innerHTML = opciones;
    }
    //*prueba
recuperar_categorias_de_BD().then((res) => { insertar_categorias(res) });