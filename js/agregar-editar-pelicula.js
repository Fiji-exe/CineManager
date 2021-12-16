'use strict'

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