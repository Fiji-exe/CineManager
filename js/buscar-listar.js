'use strict';
const elem_fitro = document.querySelector('#selector-filtros-dropdown');
const elem_inputtext = document.querySelector('#input-filtros-texto');
const tabla = document.querySelector('#tabla-uno');
let filtro_seleccionado = '';

const select_admin = ` <option disabled selected>Filtros</option>
<option value="cart">Carteleras</option>
<option value="peli">Películas</option>
<option value="cine">Cines</option>
<option value="user">Usuarios</option>
<option value="sala">Salas</option>
<option value="tsla">Tipos de Sala</option>
<option value="tasi">Tipos de Asiento</option>
<option value="cate">Categoría Películas</option>`

const select_client = ` <option disabled selected>Filtros</option>
<option value="cart">Carteleras</option>
<option value="peli">Películas</option>
<option value="cine">Cines</option>`

const select_soporte = ` <option disabled selected>Filtros</option>
<option value="cart">Carteleras</option>
<option value="peli">Películas</option>
<option value="cine">Cines</option>`

let user = localStorage.getItem("usuario");
user = JSON.parse(user);

const js_checar_tipo_user = () => {
    switch (user.tipoUsuario) {
        case '0':
            document.getElementById("selector-filtros-dropdown").innerHTML = select_admin;
            break;
        case '1':
            document.getElementById("selector-filtros-dropdown").innerHTML = select_soporte;
            break;
        case '2':
            document.getElementById("selector-filtros-dropdown").innerHTML = select_client;
            break;
    }
}

const js_habilitar_input = () => {
    filtro_seleccionado = elem_fitro.value;
    elem_inputtext.disabled = false;
}
const js_checar_inputs = () => {
    let keyword = elem_inputtext.value;
    if (!keyword) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Error en el filtro y/o término',
            'text': 'Por favor cheque el filtro o término',
            'confirmButtonText': 'Entendido'
        });
        elem_inputtext.value = '';
    } else {
        js_buscar_bd();
    }

}
const js_buscar_bd = () => {
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

    fila_encabezados.insertCell().innerHTML = 'Editar'
}
const js_crear_cuerpo_tabla = (data_json) => {
    // Crear el cuerpo de la tabla 
    let cuerpoTabla = tabla.createTBody();



    // Crear una fila por cada objeto en el data_json
    for (let i = 1; i < data_json.length; i++) {
        let fila_cuerpo = cuerpoTabla.insertRow();
        // Crear una celda por cada propiedad del objeto
        let keys = Object.keys(data_json[i]);

        if (keys.length > 5) {
            for (let j = 2; j < 11; j++) {
                fila_cuerpo.insertCell().innerHTML = data_json[i][keys[j]];
                console.log(data_json[i][keys[j]])
            };
        } else {
            for (let j = 1; j <= 1; j++) {
                fila_cuerpo.insertCell().innerHTML = data_json[i][keys[j]];
            };
        }

        switch (filtro_seleccionado) {
            case ('cart'):
                if (user.tipoUsuario != 2) {

                } else {
                    fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/editar-carteleras.html" value="${data_json[i]._id}"> &#129125  </button>`
                }
                break;
            case ('peli'):
                if (user.tipoUsuario != 2) {

                } else {
                    fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/agregar-editar-pelicula.html" value="${data_json[i]._id}"> &#129125  </button>`
                }
                break;
            case ('cine'):
                if (user.tipoUsuario != 2) {

                } else {
                    fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/crear-editar-cadena.html" value="${data_json[i]._id}"> &#129125  </button>`
                }
                break;
            case ('user'):

                break;
            case ('sala'):
                fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/editar-salas.html" value="${data_json[i]._id}"> &#129125  </button>`
                break;
            case ('tsala'):
                fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/editar-tipos-salas.html" value="${data_json[i]._id}"> &#129125  </button>`
                break;
            case ('tasi'):
                fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/editar-tipos-de-asiento.html" value="${data_json[i]._id}"> &#129125  </button>`
                break;
            case ('cate'):
                fila_cuerpo.insertCell().innerHTML = `  <button class="btn1-fondoclaro" id="boton-editar" href="../html/editar-categorias.html" value="${data_json[i]._id}"> &#129125  </button>`
                break;
        }



    }
    let btn = document.getElementById("boton-editar");

    btn.addEventListener('click', js_ir_editar)
};

function js_ir_editar() {
    localStorage.setItem("_id", this.getAttribute('value'));
    window.location = this.getAttribute('href');

}


const js_listar_en_tabla = (super_data_json) => {
    js_limpiar_tabla();
    js_crear_encabezados_tabla(super_data_json);
    js_crear_cuerpo_tabla(super_data_json);
}

elem_fitro.onchange = js_habilitar_input;
document.getElementById("boton-buscar-filtros").onclick = js_checar_inputs;

js_checar_tipo_user();