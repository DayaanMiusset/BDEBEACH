let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let txtEmail = document.getElementById("email");
let btnRegistrarse = document.getElementById("btnRegistrarse");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let contraseña = document.getElementById("contraseña");
let confirmarContraseña = document.getElementById("confirmarContraseña");
let alertEnviadoTexto = document.getElementById("alertEnviadoTexto");
let alertEnviado = document.getElementById("alertEnviado");
let usuarios = new Array();

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
        alertValidacionesTexto.innerHTML="Ingresa tu <strong>apellido</strong> paterno o materno. <br/>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        apellidos.focus();
        apellidos.style.border="solid red medium";
        return false;
    }// if
        return true;
}//validarApellidos

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

function validarContraseña() {
    let patron = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$");
    if(patron.test(contraseña.value)){
        return true;
    } else{
        alertValidacionesTexto.innerHTML+="Contraseña <strong>inválida</strong><br>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        contraseña.focus();
        contraseña.style.border="solid red medium";
    }
}

function validarConfirmacion() {
    if(confirmarContraseña.value==contraseña.value){
        return true;
    } else{
        alertValidacionesTexto.innerHTML+="Las contraseñas no coinciden<br>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        confirmarContraseña.focus();
        confirmarContraseña.style.border="solid red medium";
    }
}

btnRegistrarse.addEventListener("click", function (event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
        alertValidaciones.style.display="none";
        alertValidaciones.style.border="";
        confirmarContraseña.style.border="";
        contraseña.style.border="";
        nombre.style.border="";
        apellidos.style.border="";
        txtEmail.style.border="";
        if (validarNombre() && validarApellidos() && validarEmail() && validarContraseña()&& validarConfirmacion()){
            let elemento = `{"nombre":"${nombre.value}",
                    "apellidos":"${apellidos.value}",
                    "email":"${txtEmail.value}",
                    "contraseña":"${contraseña.value}"}`;                    
                    usuarios.push(JSON.parse(elemento));
                    localStorage.setItem("usuarios", JSON.stringify(usuarios));

                    confirmarContraseña.value="";
                    contraseña.value="";
                    nombre.value="";
                    apellidos.value="";
                    txtEmail.value="";

                    alertEnviadoTexto.innerHTML = "El registro ha sido exitoso.";
                    alertEnviado.style.display = "block";
                }
    })

    window.addEventListener("load", function(event){
        event.preventDefault();
      
        if(this.localStorage.getItem("usuarios")!=null){
            usuarios = JSON.parse(localStorage.getItem("usuarios"));
        }     
    });




