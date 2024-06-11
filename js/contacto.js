//variables de inputs
let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtTelefono = document.getElementById("telefono");
let txtMensaje = document.getElementById("mensaje");

let listaMenu = document.getElementById("listaMenu"); //

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertEnviadoTexto = document.getElementById("alertEnviadoTexto");
let alertEnviado = document.getElementById("alertEnviado");


let menuNavegador = [
    {
        "titulo":"Inicio",
        "link": "./index.html"
    },
    {
        "titulo":"Cátalogo",
        "link": "./catalogo.html"
    }
];

let isValid = true;
function agregarElementoMenu(menu){
    menu.forEach(elemento => {
        listaMenu.insertAdjacentHTML("beforebegin", 
            `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href=" ${elemento.link}"> ${elemento.titulo}</a>
            </li>`
        );
    });  
}//agregarElementoMenu --> en esta función agregamos los elemento, por HTML, del menu a la barra de navegación a través del JSON.

function validarNombre(){
    if(txtNombre.value.length<3){
        alertValidacionesTexto.innerHTML="- El <strong>Nombre</strong> debe tener al menos 3 caracteres.<br>";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
        return false;
    }
    return true;
}

function validarTelefono(){
    if(txtTelefono.value.length<10 || txtTelefono.value.length>10){
        alertValidacionesTexto.innerHTML+="- El <strong>Télefono</strong> debe tener al menos 10 caracteres.<br>";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red medium";
        return false;
    }
    if(isNaN(txtTelefono.value)){
        alertValidacionesTexto.innerHTML+="- El campo <strong>Télefono</strong> solo puede contener <strong>números</strong>.";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red medium";
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
        return false;
    }
    if(atIndex<=0 || atIndex==(email.length-1)){
        errorEmail();
        return false;
    };
    if(dotIndex<=0 || dotIndex==(dominio.length-1)){
        errorEmail();
        return false;
    };
    if(dominio.includes("..")){
        errorEmail();
        return false;
    };
    for(let char of invalidChars){
        if(email.includes(char)){
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
     alertEnviadoTexto.innerHTML = "El mensaje ha sido enviado exitosamente.";
     alertEnviado.style.display = "block";
    }, (err) => {
      alert(JSON.stringify(err));
    });
    }
});



agregarElementoMenu(menuNavegador);  //Mandamos llamar la función para agregar el menú a la barra de navegación