'use strict';

const starOne = document.querySelector('#new-com-one-star');
const starTwo = document.querySelector('#new-com-two-star');
const starThree = document.querySelector('#new-com-three-star');
const starFour = document.querySelector('#new-com-four-star');
const starFive = document.querySelector('#new-com-five-star');
const btnPublicar = document.querySelector('#btn-publicar');
const txtComentario = document.querySelector('#txt-nuevo-comentario');
const labelNombre = document.querySelector('#label-nombre');
const labelUbicacion = document.querySelector('#label-cadena');
const imgCadenaP = document.querySelector('#img-cadena-principal');

let calificacionUsuario = 5;

const starOneClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star_rate';
    starThree.innerHTML = 'star_rate';
    starFour.innerHTML = 'star_rate';
    starFive.innerHTML = 'star_rate';
    calificacionUsuario = 1;
}

const starTwoClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star_rate';
    starFour.innerHTML = 'star_rate';
    starFive.innerHTML = 'star_rate';
    calificacionUsuario = 2;
}

const starThreeClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star';
    starFour.innerHTML = 'star_rate';
    starFive.innerHTML = 'star_rate';
    calificacionUsuario = 3;
}

const starFourClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star';
    starFour.innerHTML = 'star';
    starFive.innerHTML = 'star_rate';
    calificacionUsuario = 4;
}

const starFiveClick = () =>{
    starOne.innerHTML = 'star';
    starTwo.innerHTML = 'star';
    starThree.innerHTML = 'star';
    starFour.innerHTML = 'star';
    starFive.innerHTML = 'star';
    calificacionUsuario = 5;
}

const cargarDatosCadena = async() => {

    localStorage.setItem('_id', '61baaf1bb208e04d360d41d6');

    let _id = localStorage.getItem('_id'); 
    localStorage.removeItem('_id');

    let data = await obtenerCadena('/obtener-cadena', {_id: _id});

    imgCadenaP.src =  data[0].foto;
    labelNombre.innerHTML = data[0].nombre;
    labelUbicacion.innerHTML = data[0].ubicacion;


    
}
const cargarComentarios = async(nombre, tipo) => {
    let data = await obtenerComentariosApi('/obtener-comentarios');


    let html = '';
    data.forEach(comentario => {

        let estrellas = '';

        if(comentario.calificacion == 1){
            estrellas = `          
            <span class="material-icons">star</span>
            <span class="material-icons-outlined">star_rate </span>
            <span class="material-icons-outlined">star_rate </span>
            <span class="material-icons-outlined">star_rate </span>           
            <span class="material-icons-outlined">star_rate </span>`;
        }
        else if(comentario.calificacion == 2){
            estrellas = `          
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons-outlined">star_rate </span>           
            <span class="material-icons-outlined">star_rate </span>           
            <span class="material-icons-outlined">star_rate </span>`;
        }
        else if(comentario.calificacion == 3){
            estrellas = `          
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons-outlined">star_rate </span>           
            <span class="material-icons-outlined">star_rate</span>`;
        }
        else if(comentario.calificacion == 4){
            estrellas = `          
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons-outlined">star_rate </span>`;
        }
        else if(comentario.calificacion == 5){
            estrellas = `          
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>`;
        }

         html += `<div class="div-comentario">
            <div class="div-imagen-usuario">
                <img src="${comentario.foto}" alt="">
            </div>
            <div class="div-comentario-items">
                <div class="div-nombre-comentario">
                   ${comentario.usuario}
                </div>
                <div class="div-calificacion-comentario">
                    ${estrellas}           
                </div>
                <div class="div-texto-comentario">
                    ${comentario.comentario}
                </div>
            </div>
        </div>`;
    });

    document.querySelector('#lista-comentarios').innerHTML = html;
}

const publicarComentario = () => {
    let data = {
        comentario: txtComentario.value,
        calificacion: calificacionUsuario,
        usuario: 'Abraham',//JSON.parse(localStorage.getItem('usuario')),    
        foto: 'aa',//JSON.parse(localStorage.getItem('usuario')),    
        tipo: 'cadena',                
        nombre: labelNombre.innerHTML          
    }

    crearComentarioApi(data, '/registrar-comentario');
}


starOne.addEventListener('click', starOneClick);
starTwo.addEventListener('click', starTwoClick);
starThree.addEventListener('click', starThreeClick);
starFour.addEventListener('click', starFourClick);
starFive.addEventListener('click', starFiveClick);
btnPublicar.addEventListener('click', publicarComentario);
cargarDatosCadena();
cargarComentarios(labelNombre.value, 'cadena');
