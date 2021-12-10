'use strict';

let historialCartelera = [{
        'pelicula': 'Pelicula',
        'fecha': 'Fecha',
        'cine': 'Cine',
        'precio': 'Precio',
        'cantidadEntradas': 'Cantidad de Entradas',
        'calificacion': 'Calificación'
    },
    {
        'pelicula': 'Vámonos con Pancho Villa',
        'fecha': '10/15/2021',
        'cine': 'Cinepolis Desamparados',
        'precio': '2000',
        'cantidadEntradas': '2',
        'calificacion': '<span class="material-icons">star</span>'
    },
    {
        'pelicula': 'Joker',
        'fecha': '10/30/2021',
        'cine': 'CCM Terra Mall',
        'precio': '3000',
        'cantidadEntradas': '2',
        'calificacion': '<span class="material-icons">star</span>'
    } {
        'pelicula': 'The Wild Bunch	',
        'fecha': '10/10/2021',
        'cine': 'Cinepolis Desamparados',
        'precio': '2000',
        'cantidadEntradas': '2',
        'calificacion': '<span class="material-icons">star</span>'
    } {
        'pelicula': 'The Godfather',
        'fecha': '1/15/2021',
        'cine': 'Cinepolis Desamparados',
        'precio': '1000',
        'cantidadEntradas': '12',
        'calificacion': '<span class="material-icons">star</span>'
    }

]

buscar(historialCartelera);

const js_limpiar_tabla = () => {
    tabla.innerHTML = '';
}

const js_crear_encabezados_tabla = (data_json) => {
    // Crear el encabezado de tabla
    let encabezados = tabla.createTHead();
    let fila_encabezados = encabezados.insertRow();
    // Insertar palabras en los encabezados
    let array_propiedades = Object.keys(data_json[0]);
    array_propiedades.forEach(propiedad => {
        fila_encabezados.insertCell().innerHTML = data_json[0][propiedad];
    })
}
const js_crear_cuerpo_tabla = (data_json) => {
    // Crear el cuerpo de la tabla 
    let cuerpoTabla = tabla.createTBody();

    // Crear una fila por cada objeto en el data_json
    for (let i = 1; i < data_json.length; i++) {
        let fila_cuerpo = cuerpoTabla.insertRow();
        // Crear una celda por cada propiedad del objeto
        let array_propiedades = Object.keys(data_json[i]);
        array_propiedades.forEach(propiedad => {
            fila_cuerpo.insertCell().innerHTML = data_json[i][propiedad];
        });
    }
}

const cargarhistorial = (data_json) => {
    js_limpiar_tabla();
    js_crear_encabezados_tabla(data_json);
    js_crear_cuerpo_tabla(data_json);
}