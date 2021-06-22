window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let idArtista = queryStringObj.get("idArtista"); 
    let nombreArtista = queryStringObj.get("nombre"); 
    let imagenArtista = queryStringObj.get("imagen");


    fetch(`${proxy}https://api.deezer.com/artist/${idArtista}`)

    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let infoArtistaDetalles = document.querySelector(".infoartista")
        infoArtistaDetalles.innerHTML = `
        <h2 class="detalle_artista">${nombreArtista}</h2>
        <div class="infoartista">
            <img src="${imagenArtista}" class="foto_artista_detalle" alt="Foto de ${nombreArtista}">
            
            <div class="texto_d_artista">
                <h3 class="bio_artista">¿Quién es?</h3>
                <br>
                <p class="descripcion_artista">${datos.name} es no se de donde sacar la info f.</p>
                
                <br>
                <h3 class="bio_artista">Sus top canciones:</h3>
                <br>
                <p class="descripcion_artista">

                </p>
            </div>
        </div>`
                    

        fetch(`${proxy}https://api.deezer.com/artist/${idArtista}/top`)

        .then(function (response1) {
            return response1.json();
        })
        .then(function (datos1) {
            console.log(datos1);
            console.log(datos1.data)
            let probando = document.querySelector(".texto_d_artista")//Hay que ver como juntarlo con el otro div
            
            // probando.style.border = "3px solid white";
            for (let index = 0; index < 6; index++) {
                let track = datos1.data[index].title
                probando.innerHTML = `
                    <p>${datos.data.title}</p>
                    `
            }
            probando.innerHTML = `<p> ${datos1.title} </p>`
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });
                
    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

// let queryString = location.search;
// let queryStringObj = new URLSearchParams(queryString);
// let nombreArtista = queryStringObj.get("nombre"); 
// let imagenArtista = queryStringObj.get("imagen");
// let descripcionArtista = queryStringObj.get("descripcion"); 
// console.log(nombreArtista);
// console.log(imagenArtista);

// let infoArtistaDetalles = document.querySelector(".infoartista")
// infoArtistaDetalles.innerHTML = `
                    
//                     <div class="texto_d_artista">
//                     <h1>${nombreArtista}</h1>
//                     <img src="${imagenArtista}" alt="foto de ${nombreArtista}" class="foto_artista_detalle">
//                     <p class="descripcion_artista">${descripcionArtista}</p>
//                     </div>
//                     </div>`
// let imagenArtista = queryStringObj.get("imagen");
})