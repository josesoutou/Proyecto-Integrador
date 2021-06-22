window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let idAlbum = queryStringObj.get("idArtista"); 
    let nombreAlbum = queryStringObj.get("nombre"); 
    let imagenAlbum = queryStringObj.get("imagen");
    let nombreArtistaAlbum = queryStringObj.get("artista");
    let generoAlbum  = queryStringObj.get("genero");


    fetch(`${proxy}https://api.deezer.com/album/${idAlbum}`)

    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let infoArtistaDetalles = document.querySelector(".album_d")
        infoArtistaDetalles.innerHTML = `
            <h2>${nombreAlbum}</h2>
            <img src="${imagenAlbum}" alt="Portada del album ${nombreAlbum}">
            <h3>${nombreArtistaAlbum}</h3>
            <h5>${generoAlbum}</h5>
            /* <p class="año_album">1975</p> 
            <h4>Canciones más populares:</h4>
            <p class="canciones_album">
                <a href="detail-song.html">Bohemian Rhapsody</a>
            </p>
            <p class="canciones_album">
                <a href="detail-song.html">Love of my life</a>
            </p>*/`

            // fetch(`${proxy}https://api.deezer.com/artist/${idArtista}/top`)

            // .then(function (response1) {
            //     return response1.json();
            // })
            // .then(function (datos1) {
            //     console.log(datos1);
            //     console.log(datos1.data)
            //     let probando = document.querySelector(".texto_d_artista")//Hay que ver como juntarlo con el otro div
                
            //     // probando.style.border = "3px solid white";
            //     for (let index = 0; index < 6; index++) {
            //         let track = datos1.data[index].title
            //         probando.innerHTML = `
            //                             <p>holaaa</p>
            //                             `
                                        
                    
            //     }
            //     probando.innerHTML = `<p> ${datos1.title} </p>`
            // })
            // .catch(function (error) {
            //     console.log('Tu error es: ' + error);
            // });
                
    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });
})