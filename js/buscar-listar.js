'use strict';
let listaCartelera = [{
        'id': 'Codigo Cartelera',
        'pelicula': 'Pelicula',
        'cine': 'Cine',
        'sala': 'Tipo de Sala',
        'inicia': 'Hora Inicio',
        'finaliza': 'Hora Fin'
    },
    {
        'id': 'vres897',
        'pelicula': 'Wall-E',
        'cine': 'Magaly',
        'sala': '3D',
        'inicia': '10:00',
        'finaliza': '11:30'
    },
    {
        'id': 'c951moe',
        'pelicula': 'Heathers',
        'cine': 'Nova Cinemas',
        'sala': 'IMAX',
        'inicia': '13:30',
        'finaliza': '15:30'
    }
]
let listaPeliculas = [{
        'titulo': 'Titulo de Pelicula',
        'imagen': 'Poster',
        'duracion': 'Duracion (min.)',
        'categoria': 'Categoria Pelicula',
        'sinopsis': 'Sinopsis',
        'idioma': 'Idioma',
        'subtitulo': 'Subtitulos',
        'perfil': 'Perfil'
    },
    {
        'titulo': 'Wall-E',
        'imagen': '',
        'duracion': '90',
        'categoria': 'animacion',
        'sinopsis': 'W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.',
        'idioma': 'ingles'
    },
    {
        'titulo': 'Heathers',
        'imagen': '',
        'duracion': '120',
        'categoria': 'musical',
        'sinopsis': 'W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.',
        'idioma': 'portugues'
    },

]
let listaCines = [{
        'cadena': 'Nombre de Cadena',
        'codigo': 'Codigo de Cadena',
        'ubicacion': 'Ubicacion',
        'margen': 'Margen de Ganancia',
        'perfil': 'Perfil de Cadena'
    },
    {
        'Cadena': 'La Momia',
        'imagen': '',
        'duracion': '180',
        'categoria': 'accion',
        'sinopsis': 'W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.',
        'idioma': 'español'
    }
]
let listaUsuarios = [{
    'nombre': 'Pablo Monestel',
    'correo': 'pablo@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '1987-10-12',
    'edad': 34,
    'avatar': '',
    'rol': 1,
    'estado': 1
}, {
    'nombre': 'Alejandro Coto',
    'correo': 'alejandro@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '1966-09-01',
    'edad': 55,
    'avatar': '',
    'rol': 2,
    'estado': 1
}, {
    'nombre': 'Belén Acuña',
    'correo': 'belen@gmail.com',
    'contrasenna': '123abc',
    'nacimiento': '2000-03-19',
    'edad': 21,
    'avatar': '',
    'rol': 3,
    'estado': 1
}];

;

const tabla = document.querySelector('#tabla-uno');
const js_checar_inputs = () => {
    let filtro = document.querySelector('#tabla-uno');
    let keyword = document.querySelector('#tabla-uno');
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
    array_propiedades.forEach(propiedad => {
        propiedad = propiedad.charAt(0).toUpperCase() + propiedad.slice(1)
        fila_encabezados.insertCell().innerHTML = propiedad;
    })
}
const js_crear_cuerpo_tabla = (data_json) => {
    // Crear el cuerpo de la tabla 
    let cuerpoTabla = tabla.createTBody();

    // Crear una fila por cada objeto en el data_json
    data_json.forEach(data_object => {
        let fila_cuerpo = cuerpoTabla.insertRow();
        // Crear una celda por cada propiedad del objeto
        let array_propiedades = Object.keys(data_object);
        array_propiedades.forEach(propiedad => {
            fila_cuerpo.insertCell().innerHTML = data_object[propiedad];
        })

    });
};

const accion = () => {
    js_limpiar_tabla();
    js_crear_encabezados_tabla(listaCartelera);
    js_crear_cuerpo_tabla(listaCartelera);
}

document.getElementById("boton-buscar-filtros").onclick = accion;