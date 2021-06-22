window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
     let idAlbum = queryStringObj.get("idAlbum"); 
   


    fetch(`${proxy}https://api.deezer.com/album/${idAlbum}`)

    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let infoArtistaDetalles = document.querySelector(".album_d")
        infoArtistaDetalles.innerHTML = `
            
            <h2>${datos.title}</h2>  
            <img src="${datos.cover_medium}" alt="Portada del album">
            <h2>${datos.contributors[0].name}</h2>
            <h5>${datos.genres.data[0].name}</h5>
             <p class="año_album">1975</p> 
            <h4>Canciones más populares:</h4>
            <p class="canciones_album">
                <a href="detail-song.html">${datos.tracks.data[1].title}</a>
            </p>
            <p class="canciones_album">
                <a href="detail-song.html">${datos.tracks.data[2].title}</a>
            </p>
            `

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
        document.querySelector(".errorAlbum").innerHTML = `<iframe src="https://giphy.com/embed/mq5y2jHRCAqMo" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/windows-vaporwave-error-mq5y2jHRCAqMo%22%3Evia GIPHY</a></p>
        `
    });//COMO LA API NO ENCUENTRA CIERTOS ALBUMES HACEMOS ESTO

    //BUSCADOR

    let campoBuscar = document.querySelector("#campoBuscar"); 
    // let isNanFacha = campoBuscar.value; 
    campoBuscar.addEventListener("focus", function () {
        campoBuscar.style.border = "3px solid green";
    })
    campoBuscar.addEventListener("blur", function () {
        if (campoBuscar.value === '' || campoBuscar.value.length < 3) {
            campoBuscar.style.border = "3px solid red";
        }
    })
    let submit123 = document.querySelector("#submit123");
    submit123.addEventListener("submit", function (e) {
        e.preventDefault();
        if (campoBuscar.value === '' || campoBuscar.value.length < 3) {
            alert("¡ERROR! El campo no puede estar vacio y debe contener al menos 3 caracteres");
        }
        else {
            alert("Formulario enviado correctamente");
            this.submit();
        }
    })
})
