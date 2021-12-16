'use strict';

const botonAdd = document.querySelector('#btn-add');
const botonRemove = document.querySelector('#btn-remove');
const botonActualizar = document.querySelector('#btn-actualizar');

const inputArea = document.querySelector('#txt-categoria');


const validar = () => {
    let error = false;

    if (inputArea.value == '') {
        error = true;
    }
    
    return error;
}

const cargarDatosCategoriaEditar = async() => {

        //localStorage.setItem('_id', JSON.stringify('61bac88385a537a6005446e9'));


        let _id = JSON.parse( localStorage.getItem('_id')) ;      
        localStorage.setItem('_id-temp', JSON.stringify(_id));



        if(_id == null){
            document.querySelector('.sobrescribir').classList.add('hide');
            document.querySelector('.eliminar').classList.add('hide');

        }
        else{
            localStorage.removeItem('_id');
            document.querySelector('.guardar').classList.add('hide');
            let data = await obtenerCategoriaEditar('/obtener-categoria-editar', {_id: _id});        

            inputArea.value = data[0].categoria;    
        }
}

const registrarNuevaCategoria = () => {

    
    if (validar() == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Categoria no puede estar vacio',
            'confirmButtonText': 'Entendido'
        });

    } else {

        let datos = {
            categoria:  inputArea.value,           
        }
        registrarCategoriaApi(datos, '/registrar-categoria');

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

const actualizarCategoria = () => {

    
    if (validar() == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La información introducida es inválida',
            'text': 'Categoria no puede estar vacio',
            'confirmButtonText': 'Entendido'
        });

    } else {
        let datos = {
            categoria:  inputArea.value,
            _id: JSON.parse( localStorage.getItem('_id-temp'))    
        }

        actualizarCategoriaApi(datos, '/modificar-categoria');
        
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

const eliminarCategoria = () => {


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
            eliminarDatos(JSON.parse( localStorage.getItem('_id-temp')), '/eliminar-categoria');       
            Swal.fire({
                'icon': 'success',
                'title': 'Se ha eliminado la categoria.',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                //Redireccionamos al dashboard luego de darle click al botón del sweet alert
                window.location.href = 'buscar-listar.html';
            });
        }
      });



      

   



}



botonAdd.addEventListener('click', registrarNuevaCategoria);
botonRemove.addEventListener('click', eliminarCategoria);
botonActualizar.addEventListener('click', actualizarCategoria);
cargarDatosCategoriaEditar();