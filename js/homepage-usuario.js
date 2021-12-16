'use strict'

const tipoUsuario = JSON.parse(localStorage.getItem("tipoUsario"));
console.log(tipoUsuario)

const ocultarCards = () => {
    if (tipoUsuario == '2') {
        let bnts = document.querySelectorAll(".card-funcion-admin")
        let array = Array.prototype.slice.call(bnts);
        array.forEach(element => {
            element.classList.add('ocultar-card');
        });
        console.log('customer user logged in')
    } else {
        console.log('admin user logged in')
    }
};

ocultarCards();