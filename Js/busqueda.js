
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

let queryString = location.search;
// console.log(queryString);
let queryStringObj = new URLSearchParams(queryString);
let valorConsulta = queryStringObj.get("busqueda");

window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api = `${proxy}https://api.deezer.com/search?q=${valorConsulta}`;

    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            // document.querySelector(".esperando").innerHTML = `<p> esperraaaaa</p> `
            document.querySelector(".tituloResultados").innerText = `Resultados de "${valorConsulta}"`
            
            let artista23 = document.querySelector(".resultado")
            for (let index = 0; index < 3; index++) {
                artista23.innerHTML += `
                <div class="cajaResultados">
                    <img src="${datos.data[index].artist.picture_medium}">
                    <div class="infoResultados">
                        <h2><a href="detail-artist.html?idArtista=${datos.data[index].artist.id}">${datos.data[index].artist.name}</h2></a>
                        <h3><a href="detail-album.html?idAlbum=${datos.data[index].album.id}"> Mejor Album: ${datos.data[index].album.title}</h3></a>
                    </div>
                </div>`
            }
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
            // alert("No hay coincidencias")
            document.querySelector(".esperando").innerHTML = `<iframe src="https://giphy.com/embed/zLCiUWVfex7ji" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cartoonhangover-cartoon-hangover-god-of-the-internet-no-results-found-zLCiUWVfex7ji%22%3Evia GIPHY</a></p>/p> `
            document.querySelector(".error").innerHTML = `<p class="mas_sugerencias">Más sugerencias: </p>
            <a href="playlist.html" class="links3"> Playlist </a>
            <br>
            <a href="generos.html" class="links3"> Géneros </a>
            <br>
            <a href="detail-song.html" class="links3"> Canciones </a>
            </p>`
            
        });

});                  
