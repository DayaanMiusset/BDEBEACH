let barraNavegacion = document.getElementById("barraNavegacion"); //


barraNavegacion.insertAdjacentHTML("beforeend",
    `
    <nav class="navbar navbar-expand-md fixed-top bg-body-tertiary">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="./index.html"><img src="./src/LogoSinFondo.png" alt="LogoNavegador" width="150px"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"  style="--bs-scroll-height: 100px;">

                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="./catalogo.html">Cátalogo</a>
                        </li>

                        <li class="nav-item dropdown" ">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Más
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="./conocenos.html">Conocenos</a></li>
                            <li><a class="dropdown-item" href="./contacto.html">Contáctanos</a></li>
                            <li><a class="dropdown-item" href="./formulario_creacion.html">CrearNuevosProductos</a></li>
                          </ul>
                        </li>
                      </ul>
                      <form class="d-flex ms-auto" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar">
                        <button class="btn btn-outline navbarbtn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg></button>
                      </form>
                      <ul class="navbar-nav p-2 my-2 my-lg-0 navbar-nav-scroll " id="listaMenu" style="--bs-scroll-height: 100px;">
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>Sesión
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="./IniSesion.html">Iniciar Sesión</a></li>
                            <li><a class="dropdown-item" href="./registro.html">Registrarte</a></li>
                          </ul>
                        </li>  
                        <li class="nav-item ">
                          <a class="nav-link active" aria-current="page" href="carrito.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg> Carrito</a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </nav>
    `
)