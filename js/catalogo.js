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

function addItem(item){
 
  const itemsContainer = document.getElementById("list-items");
  itemsContainer.insertAdjacentHTML ("beforeend", `<div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" data-src="#" alt="Algo lindo" src="${item.image}" data-holder-rendered="true">
    <!-- <img class="card-img-top" data-src="" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22469%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20469%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18feaf2c5a3%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A23pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18feaf2c5a3%22%3E%3Crect%20width%3D%22469%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22156.99166870117188%22%20y%3D%22122.62000007629395%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">-->
      <div class="card-body">
        <p class="card-text"><strong>${item.title}</strong></p>
         <small class="card-text">${item.description}</small>
          <br><br>
          <label for="exampleColorInput" class="form-label"></label>
          <input type="color" class="form-control form-control-color" id="exampleColorInput" value="${item.tono}" title="Choose your color">
          <div class="d-flex ms-auto">
           <small class="price" >$ ${item.price}</small>
           </div>
         
          <br><br>
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary"> Agregar al carrito </button>
            <!---<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>---> <!--Este es opcional-->
          </div>
      </div>
    </div>
  </div>`)

}



 let items= [
    {
        "id": 1,
        "title": "Top Mykonos",
        "price": "750.00 MXN",
        "description": "Top estilo bikini ajuble con tiras en la espalda y cuello",
        "color": ["#000000","#FFD700"],
        "image": "./src/topmykonos1.jpg",
        // "rating": {
        //     "rate": 3.9,
        //     "count": 120
        // }
    },

     {
        "id": 2,
        "title": "Top Bora Bora",
        "price": "650.00 MXN",
        "description": "Top con diseno ajustable en la frente ",
        "color": ["#FFCBDB", "#FF00FF","#77dde6","#FEF5E7","#F0B27A","#B695C0", "#FF3339","#006341","#FFD700"],
        "image": "./src/topborabora2.jpg",
        // "rating": {
        //     "rate": 3.9,
        //     "count": 120
        // }
        },

    {
        "id": 3,
        "title": "Top Bahamas",
        "price": "950.00 MXN",
        "description": "Top con descote U en la espalda",
        "color": ["#000000","#FEF5E7","#454B1B","#A04000"],
        "image": "./src/topbahamas3.jpeg",
        // "rating": {
        //     "rate": 3.9,
        //     "count": 120
        // }
        },


    {
        "id": 4,
        "title": "Falda Saint-Tropez",
        "price": "1450.00 MXN",
        "description": "Falda estilo sirena midi",
        "color": ["#000000","#FFD700"],
        "image": "./src/faldasainttropez4.jpg",
        // "rating": {
        //     "rate": 3.9,
        //     "count": 120
        // }
        },
    
     {
        "id": 5,
        "title": "Mini Falda Saint Tropez",
        "price": "990.00 MXN",
        "description": "Falda estilo sirena corta",
        "color": ["#A04000","#FEF5E7","#f9e79f","#efac87","#f0b27a "],
        "image": "./src/minifaldasainttropez5.jpg",
            // "rating": {
            //     "rate": 3.9,
            //     "count": 120
            // }
        },

    {
        "id": 6,
        "title": "Falda Aruba",
        "price": "1100.00 MXN",
        "description": "Mini falda con ajuste en la cintura",
        "color":  ["#000000","#FEF5E7","#454B1B","#A04000"],
        "image": "./src/faldaaruba6.jpg",
                // "rating": {
                //     "rate": 3.9,
                //     "count": 120
                // }
        },
        
    // {
    //     "id": 7,
    //     "title": "Conjunto Mykonos",
    //     "price": 3200.00,
    //     "description": "El conjunto incluye 4 piezas: CROOPED, TOP BIKINI, PAREO Y BOTTOMS",
    //     "color": "Dorado y negro",
    //     "image": "./src/conjuntomykonos7.jpg",
    //             // "rating": {
    //             //     "rate": 3.9,
    //             //     "count": 120
    //             // }
    //     },
      
        
        
    // {
    //     "id": 9,
    //     "title": "Conjunto Pareo Grecia",
    //     "price": 2950.00,
    //     "description": "El cojunto incluye 3 piezas: TOP, PAREO Y BOTTOMS",
    //     "color": "dorado y negro",
    //     "image": "./src/conjuntopareogrecia9.jpg",
    //             // "rating": {
    //             //     "rate": 3.9,
    //             //     "count": 120
    //             // }
    //     },
            
    {
        "id": 10,
        "title": "Set Rio",
        "price": "1000.00 MXN",
        "description": "El set incluye 2 piezas: TOP Y BOTTOMS",
        "color": ["#FFCBDB", "#FF00FF","#77dde6","#FEF5E7","#F0B27A","#B695C0", "#FF3339","#006341","#FFD700"],
        "image": "./src/bikinisetrio10.jpg",
                // "rating": {
                //     "rate": 3.9,
                //     "count": 120
                // }
         },
    {
        "id": 11,
        "title": "Set Bora Bora",
        "price": "1200.00 MXN",
        "description": "El set incluye 2 piezas: TOP Y BOTTOMS",
        "color": ["#FFCBDB", "#FF00FF","#77dde6","#FEF5E7","#F0B27A","#B695C0", "#FF3339","#006341","#FFD700"],
        "image": "./src/bikinisetborabora11.jpg",
                // "rating": {
                //     "rate": 3.9,
                //     "count": 120
                // }
        },
                
    {
        "id": 12,
        "title": "Set Bikini Hellow Kitty",
        "price": "2590.00 MXN",
        "description": "El set incluye 3 piezas: TOP, BOTTOMS y PAREO",
        "color": ["#FFFFFF"],
        "image": "./src/bikinisethellokitty12.jpg",
                // "rating": {
                //     "rate": 3.9,
                //     "count": 120
                // }
        },
        {
          "id": 8,
          "title": "Conjunto Bora Bora",
          "price": "1640.00 MXN",
          "description": "El conjunto incluye 2 piezas: TOP Y FALDA MIDI con ajuste lateral",
          "color": ["#FFD700","#000000","#FFFFFF"],
          "image": "./src/conjuntoborabora8.jpg",
                  // "rating": {
                  //     "rate": 3.9,
                  //     "count": 120
                  // }
           },
];

items.forEach(item => addItem(item));


