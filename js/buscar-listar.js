'use strict';


const elem_fitro = document.querySelector('#selector-filtros-dropdown');
const elem_inputtext = document.querySelector('#input-filtros-texto');
const tabla = document.querySelector('#tabla-uno');
let filtro_seleccionado = '';


const js_habilitar_input = () => {
    filtro_seleccionado = elem_fitro.value;
    elem_inputtext.disabled = false;
    switch (filtro_seleccionado) {
        case ('cart'):
            obtenerCartelera().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('peli'):
            obtenerPeliculas().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('cine'):
            obtenerCine().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('user'):
            obtenerUsuarios().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('sala'):
            obtenerSalas().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('tsala'):
            obtenerTiposSalas().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('tasi'):
            obtenerTiposAsientos().then((res) => { js_listar_en_tabla(res) });
            break;
        case ('cate'):
            obtenerCategorias().then((res) => { js_listar_en_tabla(res) });
            break;
    }

}
const js_checar_inputs = () => {
    let keyword = elem_inputtext.value;
    if (!keyword) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Error en el término',
            'text': 'Por favor intruduzca un término o palabra clave',
            'confirmButtonText': 'Entendido'
        });
        elem_inputtext.value = '';
    } else {
        switch (filtro_seleccionado) {
            case 'cart':
                buscar(listaCartelera);
                break;
            case 'peli':
                buscar(listaPeliculas);
                break;
            case 'cine':
                buscar(listaCines);
                break;
            case 'user':
                buscar(listaUsuarios);
                break;
            case 'sala':
                buscar(listaSalas);
                break;
            case 'tsla':
                buscar(listaTipoSala);
                break;
            case 'tasi':
                buscar(listaTipoAsiento);
                break;
            case 'cate':
                buscar(listaCategorias);
                break;
        }
    }

}
const js_limpiar_tabla = () => {
    tabla.innerHTML = '';
}
const js_crear_encabezados_tabla = (data_json) => {
    // Crear el encabezado de tabla
    let encabezados = tabla.createTHead();
    let fila_encabezados = encabezados.insertRow();
    // Insertar palabras en los encabezados
    let array_propiedades = Object.keys(data_json[0]);

    // Recortar en caso de muchas props
    if (array_propiedades.length > 10) { array_propiedades = array_propiedades.slice(0, 10); }

    array_propiedades.forEach(propiedad => {
        fila_encabezados.insertCell().innerHTML = data_json[0][propiedad];
    })
}
const js_crear_cuerpo_tabla = (data_json) => {
    // Crear el cuerpo de la tabla 
    let cuerpoTabla = tabla.createTBody();
    console.log(JSON.stringify(data_json))
        // Crear una fila por cada objeto en el data_json
    for (let i = 1; i < data_json.length; i++) {
        let fila_cuerpo = cuerpoTabla.insertRow();
        // Crear una celda por cada propiedad del objeto
        let keys = Object.keys(data_json[i]);

        for (let j = 2; j < 10; j++) {
            fila_cuerpo.insertCell().innerHTML = data_json[i][keys[j]];
        };
    }


    /* data_json.forEach(data_object => {
         let fila_cuerpo = cuerpoTabla.insertRow();
         // Crear una celda por cada propiedad del objeto
         let array_propiedades = Object.keys(data_object);
         array_propiedades.forEach(propiedad => {
             fila_cuerpo.insertCell().innerHTML = data_object[propiedad];
         })

     });*/
};

const js_listar_en_tabla = (super_data_json) => {
    js_limpiar_tabla();
    js_crear_encabezados_tabla(super_data_json);
    js_crear_cuerpo_tabla(super_data_json);
}

elem_fitro.onchange = js_habilitar_input;
document.getElementById("boton-buscar-filtros").onclick = js_checar_inputs;