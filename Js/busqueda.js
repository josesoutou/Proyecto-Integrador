let queryString = location.search;
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
            let artistas = document.querySelectorAll(".fotos_artistas");
            artistas.innerHTML = `<img src="${datos.data[0].picture_big}">`;
            // artistas.innerHTML[1] = `<img src="${}">`;
            // artistas.innerHTML[2] = `<img src="${}">`;
            // artistas.innerHTML[3] = `<img src="${}">`;
            // artistas.innerHTML[4] = `<img src="${}">`;
            // artistas.innerHTML[5] = `<img src="${}">`;
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

});                  
