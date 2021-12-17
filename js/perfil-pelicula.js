'use strict';

const starOne = document.querySelector('#new-com-one-star');
const starTwo = document.querySelector('#new-com-two-star');
const starThree = document.querySelector('#new-com-three-star');
const starFour = document.querySelector('#new-com-four-star');
const starFive = document.querySelector('#new-com-five-star');
const btnPublicar = document.querySelector('#btn-publicar');
const txtComentario = document.querySelector('#txt-nuevo-comentario');
const labelNombre = document.querySelector('#label-nombre');
const imgPeliculaP = document.querySelector('#img-cadena-principal');
const labelCategoria = document.querySelector('#label-cat');
const labelSinopsis = document.querySelector('#label-sinopsis');
const labelDuracion = document.querySelector('#label-duracion');
const labelAnno = document.querySelector('#label-anno');
const labelIdioma = document.querySelector('#label-idioma');
const labelSubtitulos = document.querySelector('#label-subtitulos');
const labelActores = document.querySelector('#label-actores');
const imgUsuarioP = document.querySelector('#img-usuario');


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

const cargarDatosPelicula = async() => {

    localStorage.setItem('_id', '61bae3371842a79c30ea7bca');

    let _id = localStorage.getItem('_id'); 
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    localStorage.removeItem('_id');

    let data = await obtenerPelicula('/listar-peliculas-unico', {_id: _id});


      
    labelCategoria       
    labelSinopsis        
    labelDuracion        
    labelAnno            
    labelIdioma          
    labelSubtitulos      
    labelActores 


    imgUsuarioP.src = usuario.foto;
    imgPeliculaP.src =  data[0].img_url;       
    labelNombre.innerHTML = data[0].nombre;       
    labelCategoria.innerHTML = data[0].categoria;   
    labelSinopsis.innerHTML = data[0].descripcion;   
    labelDuracion.innerHTML = data[0].duracion;    
    labelAnno.innerHTML = data[0].anno;      
    labelIdioma.innerHTML = data[0].idioma;      
    labelSubtitulos.innerHTML = data[0].subtitulos;   
    labelActores.innerHTML = data[0].actores; 


    

    cargarComentarios(data[0].nombre, 'pelicula');
    
}

const cargarComentarios = async(nombre, tipo) => {

    let params = {
        nombre: nombre,
        tipo: tipo
    }

    let data = await obtenerComentariosApi('/obtener-comentarios', params);


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
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    let data = {
        comentario: txtComentario.value,
        calificacion: calificacionUsuario,
        usuario: usuario.primerNombre,//JSON.parse(localStorage.getItem('usuario')),    
        foto: usuario.foto,//JSON.parse(localStorage.getItem('usuario')),    
        tipo: 'pelicula',                
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
cargarDatosPelicula();

