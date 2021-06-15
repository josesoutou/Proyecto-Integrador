// CAMBIAR LAS IMAGENES POR LAS DE LA API DE LA PAGINA GENEROS

window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiQueenGenero = `${proxy}https://api.deezer.com/artist/1400479`;

        fetch(apiQueenGenero)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistas = document.querySelector('.CantanteQ');
                artistas.innerHTML = ` 
                <a href="genero_detalle.html#rk" class="links"><h2>Rock</h2></a>
                <p>El artista mas escuchado de este genero:</p> 
                
                <a href="detail-artist.html"><b> Freddie Mercury</b></a>
                <img class="img1" src="${datos.picture_big}" alt="image"> `

            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });

    
    //Ariana Grande

    let apiArianaGenero = `${proxy}https://api.deezer.com/artist/1562681`;

    fetch(apiArianaGenero)
        .then(function (response) {
                return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasAriana = document.querySelector('#ariana--');
            artistasAriana.innerHTML = ` 
            <h3> <strong><a href="detail-artist.html#ariana_d">${datos.name}</a></strong> </h3>
            <img src="${datos.picture_big}" class="fotos_artistas">
            <p class="epigrafe_artistas">
            Último album: <a href="detail-album.html"> Positions</a>
            <br><br>
            Canción más popular: <a href="detail-song.html"> 34+35</a>
            </p>
             `
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });
});