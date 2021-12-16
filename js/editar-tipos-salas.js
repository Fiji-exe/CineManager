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

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Tipo de sala no puede estar vacio.',
            'confirmButtonText': 'Entendido'
        });

    } else {
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha guardado la informacion.',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            // Redireccionamos al dashboard luego de darle click al botón del sweet alert
            // window.location.href = 'dashboard.html';
        });
    }

};

const cargarDatosTipoSalaEditar = async() => {

    localStorage.setItem('_id', JSON.stringify('61bac88385a537a6005446e9'));


    let _id = JSON.parse( localStorage.getItem('_id')) ;      
    localStorage.setItem('_id-temp', JSON.stringify(_id));



    if(_id == null){
        document.querySelector('.sobrescribir').classList.add('hide');
        document.querySelector('.eliminar').classList.add('hide');

    }
    else{
        localStorage.removeItem('_id');
        document.querySelector('.guardar').classList.add('hide');
        let data = await obtenerTipoSalaEditar('/obtener-tiposala-editar', {_id: _id});        

        inputArea.value = data[0].tiposala;    
    }
}

const registrarNuevaTipoSala = () => {


if (validar() == true) {
    Swal.fire({
        'icon': 'warning',
        'title': 'La informacion intruducida es invalida',
        'text': 'TipoSala no puede estar vacio',
        'confirmButtonText': 'Entendido'
    });

} else {

    let datos = {
        tiposala:  inputArea.value,           
    }
    registrarTipoSalaApi(datos, '/registrar-tiposala');

    Swal.fire({
        'icon': 'success',
        'title': 'Se ha guardado la informacion.',
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
        'title': 'La informacion intruducida es invalida',
        'text': 'TipoSala no puede estar vacio',
        'confirmButtonText': 'Entendido'
    });

} else {
    let datos = {
        tiposala:  inputArea.value,
        _id: JSON.parse( localStorage.getItem('_id-temp'))    
    }

    actualizarTipoSalaApi(datos, '/modificar-tiposala');
    
    Swal.fire({
        'icon': 'success',
        'title': 'Se ha guardado la informacion.',
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
        eliminarDatos(JSON.parse( localStorage.getItem('_id-temp')), '/eliminar-tiposala');       
        Swal.fire({
            'icon': 'success',
            'title': 'Se ha eliminado la tiposala.',
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