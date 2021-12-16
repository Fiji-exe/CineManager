'use strict';

const margenGananciaSlider = document.querySelector("#slider-margen-ganancia");
const margenGananciaLabel = document.querySelector("#margen-ganancia-label");
const buttonSubirImagenView = document.querySelector('#btn-subir-imagen');
const imgCadena = document.querySelector('#img-cadena');

const txtCodigo = document.querySelector('#txt-codigo');
const txtNombre = document.querySelector('#txt-nombre');
const txtUbicacion = document.querySelector('#txt-ubicacion');
const txtJefe = document.querySelector('#txt-jefe');

const btnCrear = document.querySelector('#btn-crear');
const btnsobrescribir = document.querySelector('#btn-sobrescribir');
const btnEliminar = document.querySelector('#btn-eliminar');

margenGananciaLabel.innerHTML = margenGananciaSlider.value + '%'; // Display the default slider value

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'da0h0oymq',
    uploadPreset: 'xfkkawkm'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imgCadena.src = result.info.secure_url; //Cambiar img 
    }
});
buttonSubirImagenView.addEventListener('click', () => { //cambiar button
    widget_cloudinary.open();
}, false);


const cargarDatosCadenaEditar = async() => {

        //localStorage.setItem('_id', '61baaf1bb208e04d360d41d6');

        cargarListaJefes();
        let _id = localStorage.getItem('_id'); 

        if(_id == null){
            document.querySelector('.sobrescribir').classList.add('hide');
            document.querySelector('.eliminar').classList.add('hide');

        }
        else{
            localStorage.removeItem('_id');
            document.querySelector('.guardar').classList.add('hide');
            let data = await obtenerCadenaEditar('/obtener-cadena', {_id: _id});

            imgCadena.src =  data[0].foto;
            txtCodigo.value = data[0]._id;
            txtNombre.value = data[0].nombre;
            txtUbicacion.value = data[0].ubicacion;
            txtJefe.value = data[0].jefe;
            margenGananciaSlider.value = data[0].margen;
            margenGananciaLabel.innerHTML = margenGananciaSlider.value + '%'; // Display the default slider value


        }
}

const cargarListaJefes = () => {

}

// Update the current slider value (each time you drag the slider handle)
const updateValueMargenLabel = () => {
    margenGananciaLabel.innerHTML = margenGananciaSlider.value  + '%' ;
}

const registrarNuevaCadena = () => {

    
    if (validar() == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos en rojo',
            'confirmButtonText': 'Entendido'
        });

    } else {

        let datos = {
            foto: imgCadena.src,
            nombre: txtNombre.value,
            ubicacion: txtUbicacion.value,
            jefe: txtJefe.value,
            margen: margenGananciaSlider.value
        }
        registrarCadenaApi(datos, '/registrar-cadena');

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

const actualizarCadena = () => {

    
    if (validar() == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'La informacion intruducida es invalida',
            'text': 'Por favor revise los campos en rojo',
            'confirmButtonText': 'Entendido'
        });

    } else {
        let datos = {
            _id: txtCodigo.value,
            foto: imgCadena.src,
            nombre: txtNombre.value,
            ubicacion: txtUbicacion.value,
            jefe: txtJefe.value,
            margen: margenGananciaSlider.value
        }

        actualizarCadenaApi(datos, '/modificar-cadena');
        
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

const eliminarCadena = () => {


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
            eliminarDatos(txtCodigo.value, '/eliminar-cadena');       
            Swal.fire({
                'icon': 'success',
                'title': 'Se ha eliminado la cadena.',
                'confirmButtonText': 'Entendido'
            }).then(() => {
                //Redireccionamos al dashboard luego de darle click al botón del sweet alert
                window.location.href = 'buscar-listar.html';
            });
        }
      });



      

   



}


const validar = () => {
    let error = false;

    // if (txtCodigo.value == '') {
    //     error = true;
    //     document.querySelector('.input-codigo').classList.add('input-error');
    // }
    // else {
    //     document.querySelector('.input-codigo').classList.remove('input-error');
    // }

    if (txtNombre.value == '') {
        error = true;
        document.querySelector('.input-nombre').classList.add('input-error');
    }
    else {
        document.querySelector('.input-nombre').classList.remove('input-error');
    }

    if (txtUbicacion.value == '') {
        error = true;
        document.querySelector('.input-ubicacion').classList.add('input-error');
    }
    else {
        document.querySelector('.input-ubicacion').classList.remove('input-error');
    }

    if (txtJefe.value == 'Seleccionar') {
        error = true;
        document.querySelector('.input-jefe').classList.add('input-error');
    }
    else {
        document.querySelector('.input-jefe').classList.remove('input-error');
    }

    return error;
}

margenGananciaSlider.addEventListener('input', updateValueMargenLabel);
btnCrear.addEventListener("click", registrarNuevaCadena);
btnsobrescribir.addEventListener("click", actualizarCadena);
btnEliminar.addEventListener("click", eliminarCadena);
cargarDatosCadenaEditar();