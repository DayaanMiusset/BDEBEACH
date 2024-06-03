//estos son los botones
let btnEnviar = document.getElementById("btnEnviar");

//variables de inputs
let txtNombre = document.getElementById("nombre");
let txtEmail = document.getElementById("email");
let txtTelefono = document.getElementById("telefono");
let txtMensaje = document.getElementById("mensaje");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let isValid = true;

function validarNombre(){
    if(txtNombre.value.length<3){
        alertValidacionesTexto.innerHTML="-El <strong>Nombre</strong> debe tener al menos 3 caracteres.<br>";
        alertValidaciones.style.display="block";
        txtNombre.style.border="solid red medium";
        return false;
    }
    return true;
}

function validarTelefono(){
    if(txtTelefono.value.length<10 || txtTelefono.value.length>10){
        alertValidacionesTexto.innerHTML+="-El <strong>Télefono</strong> debe tener al menos 10 caracteres.<br>";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red medium";
        return false;
    }
    if(isNaN(txtTelefono.value)){
        alertValidacionesTexto.innerHTML+="-El campo <strong>Télefono</strong> solo puede contener <strong>números</strong>.";
        alertValidaciones.style.display="block";
        txtTelefono.style.border="solid red medium";
        return false;
    };
    return true;
}

function validarMensaje(){
    if(txtMensaje.value.length<10 || txtMensaje.value.length>1000){
        alertValidacionesTexto.innerHTML="-Tu opinión es muy valiosa, por favor no excedas los 1000 carácteres";
        alertValidaciones.style.display="block";
        txtMensaje.style.border="solid red medium";
        return false;
    }
    return true;
}

function validarEmail(){
    const email = txtEmail.value;
    const atIndex = email.indexOf("@");
    const [usuario, dominio] = email.split("@");
    const dotIndex = email.indexOf(".");
    const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
    if(txtEmail.value.length==0){
        alertValidacionesTexto.innerHTML="-Escribe tu <strong>Email</strong>, por favor.";
        alertValidaciones.style.display="block";
        txtEmail.style.border="solid red medium";
        return false;
    }
    if(atIndex<=0 || atIndex==(email.length-1)){
        return false;
    };
    if(dotIndex<=0 || dotIndex==(dominio.length-1)){
        return false;
    };
    if(dominio.includes("..")){
        return false;
    };
    for(let char of invalidChars){
        if(email.includes(char)){
            return false;
        }
    }
    return true;
}

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    txtNombre.style.border="";
    txtTelefono.style.border="";
    txtMensaje.style.border="";
    isValid=validarNombre();
    isValid=validarTelefono();
    isValid=validarMensaje();
    isValid=validarEmail();
    console.log(isValid);
    console.log(txtEmail.value);
});
