let email = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let button = document.getElementById("button");
let alertEnviado = document.getElementById("alertEnviado");
let alertEnviadoTexto = document.getElementById("alertEnviadoTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

button.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML= "";
    alertValidaciones.style.display= "none";
    alertEnviadoTexto.innerHTML= "";
    alertEnviado.style.display= "none";
    email.style.border= "";
    contraseña.style.border= "";
    console.log(validacion());
    if(validacion()){
        
        alertEnviadoTexto.innerHTML= "Se inició sesión";
        alertEnviado.style.display= "block";
        
        setTimeout(function(){
            window.location.href = "./index.html";
        });
    }
});


function validacion(){
    let valido = false;

    if(email.value.length == 0){
        mensajeError();
        email.focus();
    }

    if(contraseña.value.length == 0){
        mensajeError();
        contraseña.focus();
    }

    usuarios.forEach(usuario => {

        if(usuario.email == email.value && usuario.contraseña == contraseña.value){
            let nuevoElemento = `{"nombre" : "${usuario.nombre}", "email" : "${usuario.email}"}`;
            localStorage.setItem("usuarioActual", nuevoElemento);
            valido = true;
        }
    });
    if(valido){
        return valido;
    }else{
        mensajeError();
        return valido;
    }
}

function mensajeError(){
    alertValidacionesTexto.innerHTML= "El campo de la contraseña y/o correo son incorrectos.<br>Verifica la información.";
    alertValidaciones.style.display= "block";
}

window.addEventListener("load", function(event){
    event.preventDefault();
    if(this.localStorage.getItem("usuarios")!=null){
        usuarios=JSON.parse(localStorage.getItem("usuarios"));
    }
})

