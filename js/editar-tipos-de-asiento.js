'use strict';

const botonAdd = document.querySelector('#btn-add');
const botonRemove = document.querySelector('#btn-remove');
const botonActualizar = document.querySelector('#btn-actualizar');

const inputArea = document.querySelector('#txt-tipoasiento');


const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;
    }
  
    return error;
};

const cargarDatosTipoAsientoEditar = async() => {

    localStorage.setItem('_id', JSON.stringify('61baee91a830575c7875198a'));


    let _id = JSON.parse( localStorage.getItem('_id')) ;      
    localStorage.setItem('_id-temp', JSON.stringify(_id));



    if(_id == null){
        document.querySelector('.sobrescribir').classList.add('hide');
        document.querySelector('.eliminar').classList.add('hide');

    }
    else{
        localStorage.removeItem('_id');
        document.querySelector('.guardar').classList.add('hide');
        let data = await obtenerTipoAsientoEditar('/obtener-tipo-asiento-editar', {_id: _id});        

        inputArea.value = data[0].TipoAsiento;    
    }
}

const registrarNuevaTipoAsiento = () => {


if (validar() == true) {
    Swal.fire({
        'icon': 'warning',
        'title': 'La información introducida es inválida',
        'text': 'Tipo de asiento no puede estar vacío',
        'confirmButtonText': 'Entendido'
    });

} else {

    let datos = {
        TipoAsiento:  inputArea.value,           
    }
    registrarTipoAsientoApi(datos, '/registrar-tipo-asiento');

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

const actualizarTipoAsiento = () => {
    if (validar() == true) {
    Swal.fire({
        'icon': 'warning',
        'title': 'La información introducida es inválida',
        'text': 'Tipo de asiento no puede estar vacío',
        'confirmButtonText': 'Entendido'
    });

} else {
    let datos = {
        TipoAsiento:  inputArea.value,
        _id: JSON.parse( localStorage.getItem('_id-temp'))    
    }

    actualizarTipoAsientoApi(datos, '/modificar-tipo-asiento');
    
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

const eliminarTipoAsiento = () => {


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
        eliminarDatos(JSON.parse( localStorage.getItem('_id-temp')), '/eliminar-tipo-asiento');       
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha eliminado la tipoasiento.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            //Redireccionamos al dashboard luego de darle click al botón del sweet alert
            window.location.href = 'buscar-listar.html';
        });
    }
  });



  





}


botonAdd.addEventListener('click', registrarNuevaTipoAsiento);
botonRemove.addEventListener('click', eliminarTipoAsiento);
botonActualizar.addEventListener('click', actualizarTipoAsiento);
cargarDatosTipoAsientoEditar();