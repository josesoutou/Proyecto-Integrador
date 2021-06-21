let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombreArtista = queryStringObj.get("nombre"); 
let imagenArtista = queryStringObj.get("imagen");
let descripcionArtista = queryStringObj.get("descripcion"); 
console.log(nombreArtista);
console.log(imagenArtista);

let infoArtistaDetalles = document.querySelector(".infoartista")
infoArtistaDetalles.innerHTML = `
                    
                    <div class="texto_d_artista">
                    <h1>${nombreArtista}</h1>
                    <img src="${imagenArtista}" alt="foto de ${nombreArtista}" class="foto_artista_detalle">
                    <p class="descripcion_artista">${descripcionArtista}</p>
                    </div>
                    </div>`