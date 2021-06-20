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
            let artista23 = document.querySelector(".imagen")
            artista23.innerHTML = `<img src="${datos.data[8].artist.picture_medium}">`
            
            
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

});                  
