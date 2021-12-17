'use strict'

const tipoUsuario = JSON.parse(localStorage.getItem("tipoUsuario"));

let usuarioAdmin = false

if (tipoUsuario != 2) { usuarioAdmin = true }

//ocultar cards de admin en home page de usuario
const ocultarCards = () => {
    if (usuarioAdmin) {
        console.log('admin user logged in')
    } else {

        let bnts = document.querySelectorAll(".card-funcion-admin")
        let array = Array.prototype.slice.call(bnts);
        array.forEach(element => {
            element.classList.add('ocultar-card');
        });
        console.log('customer user logged in')
    }
}

ocultarCards();