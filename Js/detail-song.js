window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiCanciones = `${proxy}https://api.deezer.com/playlist/9165177722`;
    fetch(apiCanciones)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
      
        let insertarTitulo = document.querySelectorAll(".cancion_d");
        for(let index = 0; index < insertarTitulo.length; index++){
            insertarTitulo[index].innerHTML = `<img src="${datos.tracks.data[index].album.cover}">
            <h2 class="titulo11">${datos.tracks.data[index].title}</h2>
            <h2 > 
                <a href="detail-artist.html#bts_d">${datos.tracks.data[index].artist.name}</a> 
            </h2>
            <h2>
                <a href="detail-album.html">${datos.tracks.data[index].album.title}</a>
            </h2>
            <p><button type="submit" class="holaMundo123"><i class="far fa-star"></i></button></p>
            <p id="estrellitafachera"></p>`;
        } 
        let insertarReproductorDeAudio = document.querySelectorAll('#estrellitafachera'); /* estrellitafachera se refiere a lo que era el boton de play, me confundi con el nombre*/
        for(let index = 0; index < insertarReproductorDeAudio.length; index++){
            insertarReproductorDeAudio[index].innerHTML = `<iframe src="${datos.tracks.data[index].preview}" width="100px" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
        }   
    })
    .catch(function (error) {
        console.log('Tu error ess: ' + error);
    });



    // const agarrandoEstrella = document.getElementsByClassName("fas fa-play");
    // agarrandoEstrella.addEventListener ("click", function () {
    //     let infoArtista = [
    //         nombre : 
    //     ]
    //     let infoArtistaAparce = JSON.stringify(infoArtista);
    //     localStorage.setItem("favoritos", infoArtista);
    //     window.location.href="playlist.js";
    //})

})