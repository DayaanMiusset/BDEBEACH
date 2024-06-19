let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let numeroCelular = document.getElementById("numeroCelular");
let email = document.getElementById("email");
let direccion = document.getElementById("direccion");
let municipio = document.getElementById("municipio");
let estado = document.getElementById("estado");
let codigoPostal = document.getElementById("codigoPostal");
let btnRegistrarse = document.getElementById("btnRegistrarse");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarNombre(){
    if (nombre.value.length<3){
        alertValidacionesTexto.innerHTML="El <strong>nombre</strong> no es correcto <br/>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        nombre.focus();
        nombre.style.border="solid red medium";
        return false;
    }// if
        return true;
}//validarNombre

function validarApellidos(){
    if (apellidos.value.length<3){
        alertValidacionesTexto.innerHTML="Ingresa tu  <strong>apellido</strong> paterno o materno. <br/>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        apellidos.focus();
        apellidos.style.border="solid red medium";
        return false;
    }// if
        return true;
}//validarNombre

function validarNumeroCelular(){
    if(numeroCelular.value.length<10 || numeroCelular.value.length>10){
        alertValidacionesTexto.innerHTML+="- El <strong>teléfono</strong> debe tener al menos 10 caracteres.<br>";
        alertValidaciones.style.display="block";
        numeroCelular.style.border="solid red medium";
        numeroCelular.focus();
        return false;
    }
    if(isNaN(numeroCelular.value)){
        alertValidacionesTexto.innerHTML+="- El campo <strong>teléfono</strong> sólo puede contener <strong>números</strong>.";
        alertValidaciones.style.display="block";
        numeroCelular.style.border="solid red medium";
        numeroCelular.focus();
        return false;
    };
    if(numeroCelular.value == "0000000000"){
      alertValidacionesTexto.innerHTML+="- El campo <strong>teléfono</strong> no debe de contener sólo ceros.";
      alertValidaciones.style.display="block";
      numeroCelular.style.border="solid red medium";
      numeroCelular.focus();
      return false;
  };
  return true;
}

function errorEmail(){
    alertValidacionesTexto.innerHTML="- Verifica que tu <strong>Email</strong> sea correcto.";
    alertValidaciones.style.display="block";
    email.style.border="solid red medium";
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

function validarMunicipio(){
    new RegExp("^[A-Za-z]{5,}$ ");
}

function validarCodigoPostal(){
    new RegExp("^\d{5}$");
}

