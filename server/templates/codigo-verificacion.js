'use strict';

const nodemailer = require('nodemailer');
require('dotenv').config();

this.enviarCodigo = (pCorreo, pNombre, pCodigo) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPSSWD
        }
    });

    let mail_options = {
        from: 'CineManager',
        to: pCorreo,
        subject: "Bienvenido a CineManager",
        html: `

        <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#111111">
            <tr>
                <td>
                    <h1 style="color: #fff;">¡Bienvenid@, ${pNombre}!</h1>
                    <p style="color: #fff; text-align: center">Estas a un paso de tener acceso a las películas más populares de la temporada en los cines más grandes del país. Solo ingresa tu código en tu buscador.</p>
                    <h2 style="color: #fff; text-align: center">${pCodigo}</h2>
                </td>
            </tr>
        </table>
        
        `
    };
    transporter.sendMail(mail_options, (error, info)=> {
        if (error) {
            console.log(error);
        } else {
            console.log("El correo se envio correctamente " + info.response)
        }
    });
};

module.exports = this;