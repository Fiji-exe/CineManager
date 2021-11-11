const divNavbarClienteIniciado = document.querySelector(".navbar-cliente-iniciado");
const divNavbarClienteNoIniciado = document.querySelector(".navbar-cliente-no-iniciado");
const divNavbarAdminIniciado = document.querySelector(".navbar-admin-iniciado");
const divNavbarAdminNoIniciado = document.querySelector(".navbar-admin-no-iniciado");
const footerCliente = document.querySelector(".footer-cliente");
const footerAdmin = document.querySelector(".footer-admin");

const fillNavFooter = () => {
    try {
        divNavbarClienteIniciado.innerHTML = `<header class="header-principal">
                <div class="logo">
                    Cine Manager
                </div>
                <nav>
                    <div class="item">      
                    <span class="material-icons md-light">home</span>          
                    <a href="../html/homepage-usuario.html">Inicio</a>
                    </div>     
                    <div class="item">
                    <span class="material-icons md-light">camera_indoor</span>
                    <a class="item" href="../html/buscar-listar.html">Busqueda</a>
                    </div>    
                    <div class="item">
                    <span class="material-icons md-light">event_seat</span>
                    <a class="item" href="../html/homepagecarteleras.html">Reservas</a>
                    </div>
                    <div class="push">                
                    <div class="item">
                        <span class="material-icons md-light">account_circle</span>
                        <a class="item" href="../html/landing-page.html">Cerrar sesion</a>
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
                        <a href="../html/homepage-usuario.html">Inicio</a>
                        </div>     
                        <div class="item">
                        <span class="material-icons md-light">camera_indoor</span>
                        <a class="item" href="../html/buscar-listar.html">Busqueda</a>
                        </div>    
                        <div class="item">
                        <span class="material-icons md-light">event_seat</span>
                        <a class="item" href="../html/homepagecarteleras.html">Reservas</a>
                        </div>
    
                        <div class="push">
                        <div class="item">
                            <span class="material-icons md-light">info</span>
                            <a class="item" href="../html/tyc.html">Acerca de</a>
                        </div>
                        <div class="item">
                            <span class="material-icons md-light">account_circle</span>
                            <a class="item" href="../html/iniciar-sesion.html">Iniciar sesion</a>
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
                    <span class="material-icons md-light">account_circle</span>
                    <a class="item" href="../html/landing-page.html">Cerrar sesion</a>
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
                    <a class="item" href="../html/tyc.html">Acerca de</a>
                    </div>
                    <div class="item">
                    <span class="material-icons md-light">account_circle</span>
                    <a class="item" href="../html/iniciar-sesion.html">Iniciar sesion</a>
                    </div>  
                </div>
                </nav>    
                </header>`;
    } catch (err) {

    }

    try {
        footerCliente.innerHTML = `
        <footer class="footer">
               <div class="contain">
                  <div class="col">
                     <p>Cine REX</p>
                     <ul>
                        <li><a href="../html/tyc.html">Terminos y condiciones</a></li>
                     </ul>
                  </div>
                  <!-- <div class="col">
                     <p>Cine REX</p>
                     <ul>
                        <li><a href="">Terminos y condiciones</a></li>
                     </ul>
                  </div> -->
               </div>
        </footer>`;
    } catch (err) {

    }

    try {
        footerAdmin.innerHTML = `
        <footer class="footer">
               <div class="contain">
                  <div class="col">
                     <p>Cine REX</p>
                     <ul>
                        <li><a href="../html/tyc.html">Terminos y condiciones</a></li>
                     </ul>
                  </div>
                  <!-- <div class="col">
                     <p>Cine REX</p>
                     <ul>
                        <li><a href="">Terminos y condiciones</a></li>
                     </ul>
                  </div> -->
               </div>
        </footer>`;
    } catch (err) {

    }


}

fillNavFooter();