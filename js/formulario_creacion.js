let nombre = document.getElementById("nombre");
let id = document.getElementById("id");
let descripcion = document.getElementById("descripcion");
let numeroDePiezas = document.getElementById("numeroDePiezas");
let precio = document.getElementById("precio");
let imagen = document.getElementById("imagen");
let btnCrear = document.getElementById("btnCrear"); 
let idRemove = document.getElementById("idRemove");
let btnRemove = document.getElementById("btnRemove");
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let btnImagen = document.getElementById("btnCrear"); 

let datos = new Array();


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

function validarId (ID){
    let patronId = new RegExp("^[0-9]{3}$");
    if(ID.value.length==1){
        ID.value="00" + ID.value;       
    }else if(ID.value.length==2){
        ID.value="0" + ID.value;
    }
    if(patronId.test(ID.value)){
        return true;
    }else{
        alertValidacionesTexto.innerHTML +="El <strong>id</strong> no es válido. Debe contener 3 dígitos.<br/>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        ID.focus();
        ID.style.border="solid red medium";
        return false;
    }//if
}

function validarDescripcion (){
    let patronDesc = new RegExp("^.{10,60}$");

    if(patronDesc.test(descripcion.value)){
        return true;
    }else{
        if(descripcion.value.length<10){
            alertValidacionesTexto.innerHTML +="Por favor, <strong>corrobora</strong> que la información sea correcta. <br/>";
        }else{
            alertValidacionesTexto.innerHTML +="Por favor, <strong>corrobora</strong> que la información no sobrepase los 60 caracteres. <br/>";
        }
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        descripcion.focus();
        descripcion.style.border="solid red medium";
        return false;
    }//if
}//validarDescripcion

function validarPrecio(){
    let patronPrecio = new RegExp("^[0-9]{1,4}(\.[0-9]{1,2})?$");
    if(patronPrecio.test(precio.value)){
        return true;
    }else{
        alertValidacionesTexto.innerHTML +="El <strong>precio</strong> debe tener el siguiente formato: 1234.00 .<br/>";
        alertValidaciones.style.display="block";
        alertValidaciones.style.border="solid red medium";
        precio.focus();
        precio.style.border="solid red medium";
        return false;
    }//if
}



btnCrear.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    alertValidaciones.style.border="";
    nombre.style.border="";
    id.style.border="";
    descripcion.style.border="";
    precio.style.border="";

    isValid = true;
     console.log(validarNombre());
     console.log(validarId(id));
     console.log(validarDescripcion());
     console.log(validarPrecio());

     if (validarNombre() && validarId(id) && validarDescripcion() && validarPrecio()){
        /* let row = `<tr>
        <td>${nombre.value}</td>
        <td>${descripcion.value}</td>
        <td>${numeroDePiezas.value}</td>
        <td>${precio.value}</td></tr>`; */



        let elemento = `{"id":${id.value},
        "title":"${nombre.value}",
        "description":"${descripcion.value}",
        "numeroDePiezas":${numeroDePiezas.value},
        "price":${precio.value},
        "image":"./src/faldaaruba6_3.JPG"}`;
        datos.push(JSON.parse(elemento));
        localStorage.setItem("datos", JSON.stringify(datos));}
});

btnRemove.addEventListener("click", function(event){
    let isValid = true;
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    alertValidaciones.style.border="";
    idRemove.style.border="";
    
    console.log(validarId(idRemove));
    
});

window.addEventListener("load", function(event){
    event.preventDefault();
  
    if(this.localStorage.getItem("datos")!=null){
        datos = JSON.parse(localStorage.getItem("datos"));
    }
    
  });


/*Cloudinary*/
/* var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dufshghoz', 
    uploadPreset: 'bdebeach', 
    }, 
    (error, result) => {
        if(!error && result && result.event==="success"){
            console.log("hecho", result.info);
        } 
     });

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
    }, false); */
        
