//variables de inputs
let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtTelefono = document.getElementById("telefono");
let txtMensaje = document.getElementById("mensaje");

let barraNavegacion = document.getElementById("barraNavegacion"); //

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertEnviadoTexto = document.getElementById("alertEnviadoTexto");
let alertEnviado = document.getElementById("alertEnviado");




let isValid = true;

function validarNombre(){
    if(txtNombre.value.length<3){
        alertValidacionesTexto.innerHTML="- El <strong>Nombre</strong> debe tener al menos 3 caracteres.<br>";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
        txtNombre.focus();
        return false;
      
    }
    return true;
}

function validarTelefono(){
    if(txtTelefono.value.length<10 || txtTelefono.value.length>10){
        alertValidacionesTexto.innerHTML+="- El <strong>Télefono</strong> debe tener al menos 10 caracteres.<br>";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red medium";
        txtTelefono.focus();
        return false;
    }
    if(isNaN(txtTelefono.value)){
        alertValidacionesTexto.innerHTML+="- El campo <strong>Télefono</strong> solo puede contener <strong>números</strong>.";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red medium";
        txtTelefono.focus();
        return false;
    };
    if(txtTelefono.value == "0000000000"){
      alertValidacionesTexto.innerHTML+="- El campo <strong>Télefono</strong> no debe de contener sólo ceros.";
      alertValidaciones.style.display="block";
      txtTelefono.style.border="solid red medium";
      txtTelefono.focus();

      return false;
  };
  return true;
}

function validarMensaje(){
    const mensaje = txtMensaje.value.trim();
    if (mensaje.length === 0 || mensaje.length > 1000){
        alertValidacionesTexto.innerHTML="- Tu opinión es muy valiosa, por favor no excedas los 1000 carácteres";
        alertValidaciones.style.display="block";
        txtMensaje.style.border="solid red medium";
        txtMensaje.focus();
        return false;
    }
    return true;
}
function errorEmail(){
    alertValidacionesTexto.innerHTML="- Verifica que tu <strong>Email</strong> sea correcto.";
    alertValidaciones.style.display="block";
    txtEmail.style.border="solid red medium";
}

function validarEmail(){
    const email = txtEmail.value;
    const atIndex = email.indexOf("@");
    const [usuario, dominio] = email.split("@");
    const dotIndex = email.indexOf(".");
    const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
    if(txtEmail.value.length==0){
        errorEmail();
        txtEmail.focus();
        return false;
    }
    if(atIndex<=0 || atIndex==(email.length-1)){
        errorEmail();
        txtEmail.focus();
        return false;
    };
    if(dotIndex<=0 || dotIndex==(dominio.length-1)){
        errorEmail();
        txtEmail.focus();
        return false;
    };
    if(dominio.includes("..")){
        errorEmail();
        txtEmail.focus();
        return false;
    };
    for(let char of invalidChars){
        if(email.includes(char)){
          txtEmail.focus();
            return false;
        }
    }
    return true;
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtMensaje.style.border="";
    txtEmail.style.border="";
    alertEnviadoTexto.innerHTML="";
    alertEnviado.style.display="none";

    if(validarNombre() && validarEmail() && validarTelefono() && validarMensaje()){
        const serviceID = 'default_service';
   const templateID = 'template_61pzqvk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
     txtNombre.value="";
     txtTelefono.value="";
     txtMensaje.value="";
     txtEmail.value="";
     

     alertEnviadoTexto.innerHTML = "El mensaje ha sido enviado exitosamente.";
     alertEnviado.style.display = "block";
    }, (err) => {
      alert(JSON.stringify(err));
    });
    }
});





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
                          <a class="nav-link active" aria-current="page" href="./catalogo.html">Catálogo</a>
                        </li>

                        <li class="nav-item dropdown" ">
                          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Más
                          </a>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="./conocenos.html">Conócenos</a></li>
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
