const divNavbarClienteIniciado = document.querySelector(".navbar-cliente-iniciado");
const divNavbarClienteNoIniciado = document.querySelector(".navbar-cliente-no-iniciado");
const divNavbarAdminIniciado = document.querySelector(".navbar-admin-iniciado");
const divNavbarAdminNoIniciado = document.querySelector(".navbar-admin-no-iniciado");
const footerCliente = document.querySelector(".footer-cliente");

const fillNavFooter = () => {
    try { /* Cliente Iniciado */
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
                        <span class="material-icons md-light">event_seat</span>
                        <a class="item" href="../html/homepagecarteleras.html">Cartelera</a>
                    </div>

                    <div class="push">                
                        <div class="item">
                            <span class="material-icons md-light">account_circle</span>
                            <a class="item" href="../html/landing-page.html">Cerrar sesión</a>
                        </div>  
                    </div>
                </nav>    
                </header>`;
    } catch (err) {

    }

    try { /* Cliente NO Iniciado*/
        divNavbarClienteNoIniciado.innerHTML = `<header class="header-principal">
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
                            <a class="item" href="../html/iniciar-sesion.html">Iniciar sesión</a>
                        </div>  
                        </div>
                    </nav>    
                </header>`;
    } catch (err) {

    }

    try { /* Admin Iniciado */
        divNavbarAdminIniciado.innerHTML = `<header class="header-principal">
                <div class="logo">
                    Cine Manager
                </div>
                <nav>
                    <div class="item">      
                        <span class="material-icons md-light">home</span>          
                        <a href="../html/homepage-usuario.html">Inicio</a>
                    </div>

                    <div class="item">      
                        <span class="material-icons md-light">analytics</span>          
                        <a href="../html/homepage-usuario.html">Reportes</a>
                    </div>

                    <div class="item">
                        <span class="material-icons md-light">manage_search</span>
                        <a class="item" href="../html/buscar-listar.html">Búsqueda</a>
                    </div>    

                    <div class="push">                 
                        <div class="item">
                            <span class="material-icons md-light">account_circle</span>
                            <a class="item" href="../html/landing-page.html">Cerrar sesión</a>
                        </div>  
                    </div>
                </nav>    
            </header>`;
    } catch (err) {

    }

    try { /* FOOTER */
        footerCliente.innerHTML = `
        <footer>
               <div class="contain">
                  <div class="col">
                     <p>Cine Manager</p>
                     <ul>
                        <li><a href="../html/tyc.html">Terminos y condiciones</a></li>
                     </ul>
                  </div>
               </div>
        </footer>`;
    } catch (err) {

    }
}

fillNavFooter();