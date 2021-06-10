window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api = `${proxy}https://api.deezer.com/genre/`;
    //let api = `${proxy}https://api.deezer.com/artist/queen`;

    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistas = document.querySelector('#buenas');
            artistas.innerHTML = ` <h3><strong> <a href="detail-artist.html#queen_d">Queen</a> </strong></h3>
            <img src="${datos.data[0].picture_medium}" class="fotos_artistas" >
            <p class="epigrafe_artistas">
                Último album: <a href="detail-album.html">A night at the opera</a>
                <br><br>
                Canción más popular:<a href="detail-song.html"> Bohemian Rhapsody</a>
            </p> `
    
            
                          
      
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
