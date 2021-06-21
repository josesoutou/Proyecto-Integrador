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
            let artista23 = document.querySelector(".resultadosBusqueda")
            artista23.innerHTML = `
                                    <p class="p">Resultados de la busqueda:</p>
                                    <img src="${datos.data[1].artist.picture_medium}">
                                    <h2>${datos.data[1].artist.name}</h2>
                                    <h3> Mejor Album : ${datos.data[1].album.title}</h3>
            
                                `
            
            
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
            
        });

});                  
