let listaMenu = document.getElementById("listaMenu"); //

let menuNavegador = [
    {
        "titulo":"Inicio",
        "link": "./index.html"
    },
    {
        "titulo":"Cátalogo",
        "link": "./catalogo.html"
    }
]; //JSON DE NUESTRO MENU DE NAVEGACIÓN


function agregarElementoMenu(menu){
    menu.forEach(elemento => {
        listaMenu.insertAdjacentHTML("beforebegin", 
            `<li class="nav-item">
                <a class="nav-link active" aria-current="page" href=" ${elemento.link}"> ${elemento.titulo}</a>
            </li>`
        );
    });  
}//agregarElementoMenu --> en esta función agregamos los elemento, por HTML, del menu a la barra de navegación a través del JSON.


agregarElementoMenu(menuNavegador);  //Mandamos llamar la función para agregar el menú a la barra de navegación