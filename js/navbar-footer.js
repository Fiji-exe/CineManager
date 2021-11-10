const divNavbarClienteIniciado = document.querySelector(".navbar-cliente-iniciado");
const divNavbarClienteNoIniciado = document.querySelector(".navbar-cliente-no-iniciado");
const divNavbarAdminIniciado = document.querySelector(".navbar-admin-iniciado");
const divNavbarAdminNoIniciado = document.querySelector(".navbar-admin-no-iniciado");
const footerCliente = document.querySelector(".navbar-cliente");
const footerAdmin = document.querySelector(".navbar-admin");

const fillNavFooter = () => {
    try {
        divNavbarClienteIniciado.innerHTML = `<header class="header-principal">
                <div class="logo">
                    Cine Manager
                </div>
                <nav>
                    <div class="item">      
                    <span class="material-icons md-light">home</span>          
                    <a href="index.html">Inicio</a>
                    </div>     
                    <div class="item">
                    <span class="material-icons md-light">camera_indoor</span>
                    <a class="item" href="index.html">Cines</a>
                    </div>    
                    <div class="item">
                    <span class="material-icons md-light">event_seat</span>
                    <a class="item" href="index.html">Reservas</a>
                    </div>
                    <div class="item">
                    <span class="material-icons md-light">theaters</span>
                    <a class="item" href="index.html">Cartelera</a>
                    </div>
                    <div class="item">
                    <span class="material-icons md-light">movie</span>
                    <a class="item" href="index.html">Peliculas</a>
                    </div>
                    <div class="push">
                    <div class="item">
                        <span class="material-icons md-light">menu</span>
                        <a class="item" href="index.html">Menu principal</a>
                    </div>
                    <div class="item">
                        <span class="material-icons md-light">account_circle</span>
                        <a class="item" href="index.html">Cerrar sesion</a>
                    </div>  
                    </div>
                </nav>    
                </header>`;
    } catch (err) {

    }

    try {
        divNavbarClienteNoIniciado.innerHTML = `<header class="header-principal">
                    <div class="logo">
                    Cine Manager
                    </div>

                    <nav>
                        <div class="item">      
                        <span class="material-icons md-light">home</span>          
                        <a href="index.html">Inicio</a>
                        </div>     
                        <div class="item">
                        <span class="material-icons md-light">camera_indoor</span>
                        <a class="item" href="index.html">Cines</a>
                        </div>    
                        <div class="item">
                        <span class="material-icons md-light">event_seat</span>
                        <a class="item" href="index.html">Reservas</a>
                        </div>
                        <div class="item">
                        <span class="material-icons md-light">theaters</span>
                        <a class="item" href="index.html">Cartelera</a>
                        </div>
                        <div class="item">
                        <span class="material-icons md-light">movie</span>
                        <a class="item" href="index.html">Peliculas</a>
                        </div>     
                        <div class="push">
                        <div class="item">
                            <span class="material-icons md-light">info</span>
                            <a class="item" href="index.html">Acerca de</a>
                        </div>
                        <div class="item">
                            <span class="material-icons md-light">account_circle</span>
                            <a class="item" href="index.html">Iniciar sesion</a>
                        </div>  
                        </div>
                    </nav>    
                </header>`;
    } catch (err) {

    }

    try {
        divNavbarAdminIniciado.innerHTML = `<header class="header-principal">
                <div class="logo">
                    Cine Manager
                </div>
                <nav>
                <div class="push">
                    <div class="item">
                    <span class="material-icons md-light">menu</span>
                    <a class="item" href="index.html">Menu principal</a>
                    </div>
                    <div class="item">
                    <span class="material-icons md-light">account_circle</span>
                    <a class="item" href="index.html">Cerrar sesion</a>
                    </div>  
                </div>
                </nav>    
            </header>`;
    } catch (err) {

    }

    try {
        divNavbarAdminNoIniciado.innerHTML = `<header class="header-principal">
                <div class="logo">
                    Cine Manager
                </div>
                <nav>
                <div class="push">
                    <div class="item">
                    <span class="material-icons md-light">info</span>
                    <a class="item" href="index.html">Acerca de</a>
                    </div>
                    <div class="item">
                    <span class="material-icons md-light">account_circle</span>
                    <a class="item" href="index.html">Iniciar sesion</a>
                    </div>  
                </div>
                </nav>    
                </header>`;
    } catch (err) {

    }

    try {
        footerCliente.innerHTML = ``;
    } catch (err) {

    }

    try {
        footerAdmin.innerHTML = ``;
    } catch (err) {

    }


}

fillNavFooter();