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
                    <div class="texto_d_artista">
                    <h1>${nombreArtista}</h1>
                    <img src="${imagenArtista}" alt="foto de ${nombreArtista}" class="foto_artista_detalle">
                    <p class="descripcion_artista"></p>
                    </div>
                    </div>`
            fetch(`${proxy}https://api.deezer.com/album/${idArtista}`)

            .then(function (response1) {
                return response1.json();
            })
            .then(function (datos1) {
                console.log(datos1);
                let probando = document.querySelector(".probando12343433535253")
                probando.style.border = "3px solid white";
                for (let index = 0; index < array.length; index++) {
                    const element = array[index];
                    
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