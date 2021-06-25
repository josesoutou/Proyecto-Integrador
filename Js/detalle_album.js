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
            <a href="detail-artist.html?idArtista=${datos.artist.id}">
                <h2>${datos.contributors[0].name}</h2>
            </a>
            <a href="genero_detalle.html?idGenero=${datos.genre_id}">
                <h5>${datos.genres.data[0].name}</h5>
            </a>
            <p class="año_album">${datos.release_date}</p> 
            <h4>Canciones más populares:</h4>
            <p class="canciones_album">
                ${datos.tracks.data[1].title}
            </p>
            <p class="canciones_album">
                ${datos.tracks.data[2].title}
            </p>
            `   
    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
        document.querySelector(".errorAlbum").innerHTML = `<iframe src="https://giphy.com/embed/mq5y2jHRCAqMo" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/windows-vaporwave-error-mq5y2jHRCAqMo%22%3Evia GIPHY</a></p>
        `
    });//COMO LA API NO ENCUENTRA CIERTOS ALBUMES HACEMOS ESTO

    //BUSCADOR

    let campoBuscar = document.querySelector("#campoBuscar"); 

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
