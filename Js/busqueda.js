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
            for (let index = 0; index < api.length; index++) {
                artista23.innerHTML += `
                <img src="${datos.data[index].artist.picture_medium}">
                <h2>${datos.data[index].artist.name}</h2>
                <h3> Mejor Album : ${datos.data[index].album.title}</h3>

            `
            }
            
            
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
            
        });

});                  
