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
        'sinopsis': 'En el siglo XXIX, el consumismo desenfrenado, la codicia empresarial y la negligencia ambiental han convertido al planeta Tierra en un páramo lleno de basura; la humanidad no se encuentra por ningún lado y ha sido evacuada por la megacorporación Buy-n-Large (BnL) en gigantes naves generacionales siete siglos antes. ',
        'idioma': 'ingles',
        'subtitulo': 'español',
        'perfil': '<a href="/html/perfil-pelicula.html">Ir a perfil</a>'
    },
    {
        'titulo': 'Heathers',
        'imagen': '',
        'duracion': '120',
        'categoria': 'musical',
        'sinopsis': 'Verónica Sawyer, de 17 años, es una de las muchachas más populares en el Instituto Westerburg en Sherwood, Ohio. Además de Verónica, la pandilla popular consiste en tres muchachas ricas y hermosas con el mismo nombre de pila: la líder, Heather Chandler; Heather McNamara, una maleable animadora, y Heather Duke; una bulímica aficionada a la literatura.',
        'idioma': 'portugues',
        'subtitulo': 'no',
        'perfil': '<a href="/html/perfil-pelicula.html">Ir a perfil</a>'
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
        'cadena': 'Cinepolis',
        'codigo': 'ciis-400',
        'ubicacion': 'moravia',
        'margen': '15%',
        'perfil': '<a href="/html/perfil-cadena.html">Ir a perfil</a>'
    },
    {
        'cadena': 'Cine Magaly',
        'codigo': 'Cily-074',
        'ubicacion': 'san carlos',
        'margen': '11%',
        'perfil': '<a href="/html/perfil-cadena.html">Ir a perfil</a>'
    }
]
let listaUsuarios = [{
    'nombre': 'Nombre de Usuario',
    'correo': 'Correo Electronico',
    'nacimiento': 'Fecha Nacimiento',
    'edad': 'Edad',
    'avatar': 'Avatar',
    'rol': 'Tipo de Usuario',
    'estado': 'Estado de Cuenta'
}, {
    'nombre': 'Alejandro Coto',
    'correo': 'alejandro@gmail.com',
    'nacimiento': '1966-09-01',
    'edad': 55,
    'avatar': '',
    'rol': 2,
    'estado': 1
}, {
    'nombre': 'Belén Acuña',
    'correo': 'belen@gmail.com',
    'nacimiento': '2000-03-19',
    'edad': 21,
    'avatar': '',
    'rol': 3,
    'estado': 1
}];
let listaSalas = [{
    'codigo': 'Codigo de Sala',
    'cine': 'Cadena de Cine',
    'btotal': 'Butacas Totales',
    'estado': 'Estado de Sala',
    'costo': 'Costo de Sala',
    'tipo': 'Tipo de sala',
    'editar': 'Editar'
}, {
    'codigo': 'sl-ciis-4411',
    'cine': 'Cinepolis',
    'btotal': '24',
    'estado': 'activa',
    'costo': '1500',
    'tipo': 'regular',
    'editar': '<a href="/html/editar-salas.html">Editar</a>'

}, {
    'codigo': 'sl-ciar-1647',
    'cine': 'Cinemark',
    'btotal': '12',
    'estado': 'inactiva',
    'costo': '1300',
    'tipo': 'imax',
    'editar': '<a href="/html/editar-salas.html">Editar </a>'
}];

let listaTipoSala = [{
    'nombre': 'Nombre de Tipo de Sala',
    'editar': 'Ir a editar'
}, {
    'nombre': 'Regular',
    'editar': '<a href="/html/editar-tipos-salas.html">Editar</a>'
}, {
    'nombre': 'IMAX',
    'editar': '<a href="/html/editar-tipos-salas.html">Editar</a>'
}];
let listaTipoAsiento = [{
    'nombre': 'Nombre de Tipo de Asiento',
    'editar': 'Ir a editar'
}, {
    'nombre': 'Regular',
    'editar': '<a href="/html/editar-tipos-de-asiento.html">Editar</a>'
}, {
    'nombre': 'Asiento VIP',
    'editar': '<a href="/html/editar-tipos-de-asiento.html">Editar</a>'
}];
let listaCategorias = [{
    'nombre': 'Nombre de Categoria',
    'editar': 'Ir a editar'
}, {
    'nombre': 'accion',
    'editar': '<a href="/html/editar-categorias.html">Editar</a>'
}, {
    'nombre': 'animacion',
    'editar': '<a href="/html/editar-categorias.html">Editar</a>'
}];

const elem_fitro = document.querySelector('#selector-filtros-dropdown');
const elem_inputtext = document.querySelector('#input-filtros-texto');
const tabla = document.querySelector('#tabla-uno');
let filtro_seleccionado = '';


const js_habilitar_input = () => {
    filtro_seleccionado = elem_fitro.value;
    elem_inputtext.disabled = false;
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
    /* data_json.forEach(data_object => {
         let fila_cuerpo = cuerpoTabla.insertRow();
         // Crear una celda por cada propiedad del objeto
         let array_propiedades = Object.keys(data_object);
         array_propiedades.forEach(propiedad => {
             fila_cuerpo.insertCell().innerHTML = data_object[propiedad];
         })

     });*/
};

const buscar = (data_json) => {
    js_limpiar_tabla();
    js_crear_encabezados_tabla(data_json);
    js_crear_cuerpo_tabla(data_json);
}

elem_fitro.onchange = js_habilitar_input;
document.getElementById("boton-buscar-filtros").onclick = js_checar_inputs;