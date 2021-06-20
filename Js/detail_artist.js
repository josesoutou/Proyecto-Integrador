let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombreArtista = queryStringObj.get("nombre"); 
let imagenArtista = queryStringObj.get("imagen"); 
console.log(nombreArtista);
console.log(imagenArtista);

let infoArtistaDetalles = document.querySelector(".DetalleArtistas")
infoArtistaDetalles.innerHTML = `
                    <h1>${nombreArtista}</h1>
                    <img src="${imagenArtista}" alt="Foto de Ariana Grande" class="foto_artista_detalle">
                    `