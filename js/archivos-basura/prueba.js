'use strict';

let nombre = 'Pablo';
const PI = Math.PI;

nombre = 'Adrián';


console.log(nombre);
console.log('Su nombre es: ', nombre);
console.log('Su nombre es: ' + nombre);
//String template
console.log(`Su nombre es ${nombre}`);

const sumar = (num1, num2) => {
    return num1 + num2;
};

// function sumar(num1, num2) {
//     return num1 + num2;
// };

let resultado = sumar(9, 13);
console.log(resultado);

const calcularImc = (peso, estatura) => {
    let imc = peso / (Math.pow(estatura, 2));
    return imc.toFixed(2);
};

console.log('Su imc es de: ', calcularImc(100, 1.9));


const calcularPrecioIva = (precio) => precio * 1.13;

console.log(calcularPrecioIva(1000))
console.log(calcularPrecioIva(9000))
console.log(calcularPrecioIva(10500))

const inputCorreo = document.querySelector('#txt-correo');
console.log(inputCorreo)