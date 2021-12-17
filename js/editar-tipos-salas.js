'use strict';

const botonAdd = document.querySelector('#btn-add');
const botonRemove = document.querySelector('#btn-remove');
const botonActualizar = document.querySelector('#btn-actualizar');

const inputArea = document.querySelector('#txt-tiposala');


const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;
    }

    return error;
};

const cargarDatosTipoSalaEditar = async() => {

    //localStorage.setItem('_id', JSON.stringify('61badfed8b595bb16855eb61'));


    let _id = JSON.parse( localStorage.getItem('_id')) ;      
    localStorage.setItem('_id-temp', JSON.stringify(_id));



    if(_id == null){
        document.querySelector('.sobrescribir').classList.add('hide');
        document.querySelector('.eliminar').classList.add('hide');

    }
    else{
        localStorage.removeItem('_id');
        document.querySelector('.guardar').classList.add('hide');
        let data = await obtenerTipoSalaEditar('/obtener-tipo-sala-editar', {_id: _id});        

        inputArea.value = data[0].tipoSala;    
    }
}

const registrarNuevaTipoSala = () => {


if (validar() == true) {
    Swal.fire({
        'icon': 'warning',
        'title': 'La información introducida es inválida',
        'text': 'Tipo de sala no puede estar vacío',
        'confirmButtonText': 'Entendido'
    });

} else {

    let datos = {
        tipoSala:  inputArea.value,           
    }
    registrarTipoSalaApi(datos, '/registrar-tipo-sala');

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha guardado la información.',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        //Redireccionamos al dashboard luego de darle click al botón del sweet alert
        window.location.href = 'buscar-listar.html';
    });
}

}

const actualizarTipoSala = () => {
    if (validar() == true) {
    Swal.fire({
        'icon': 'warning',
        'title': 'La información introducida es inválida',
        'text': 'Tipo de sala no puede estar vacío',
        'confirmButtonText': 'Entendido'
    });

} else {
    let datos = {
        tipoSala:  inputArea.value,
        _id: JSON.parse( localStorage.getItem('_id-temp'))    
    }

    actualizarTipoSalaApi(datos, '/modificar-tipo-sala');
    
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha guardado la información.',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        //Redireccionamos al dashboard luego de darle click al botón del sweet alert
        window.location.href = 'buscar-listar.html';
    });
}





}

const eliminarTipoSala = () => {


Swal.fire({
    title: '¿Está seguro de eliminar?',
    text: "Una vez eliminado no hay forma de revertirlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
        eliminarDatos(JSON.parse( localStorage.getItem('_id-temp')), '/eliminar-tipo-sala');       
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha eliminado tipo de sala.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            //Redireccionamos al dashboard luego de darle click al botón del sweet alert
            window.location.href = 'buscar-listar.html';
        });
    }
  });



  





}


botonAdd.addEventListener('click', registrarNuevaTipoSala);
botonRemove.addEventListener('click', eliminarTipoSala);
botonActualizar.addEventListener('click', actualizarTipoSala);
cargarDatosTipoSalaEditar();