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
            let paginaBusqueda = document.querySelector(".resultadosBusqueda")
            paginaBusqueda.innerHTML = `
                <p class="headerResultados">Resultados de la busqueda:</p>
                <div class="busquedaR">
                    <img src="${datos.data[1].artist.picture_medium}">
                    <h2 class="nombreResultado">${datos.data[1].artist.name}</h2>
                    <h3 class="albumResultado"> Mejor Album: ${datos.data[1].album.title}</h3>
                </div>`
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
            
        });

});                  
