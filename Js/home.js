window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api = `${proxy}https://api.deezer.com/artist/queen`;

    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistas = document.querySelectorAll(".fotos_artistas");
            artistas.innerHTML[0] = `<img src="${datos.object}">`;
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
