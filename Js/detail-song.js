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
        for(let index=0; index < insertarTitulo.length; index++){
            insertarTitulo[index].innerHTML = `<img src="${datos.tracks.data[index].album.cover}">
            <h2 class="titulo11">${datos.tracks.data[index].title}</h2>
            <h2 > 
                <a href="detail-artist.html#bts_d">${datos.tracks.data[index].artist.name}</a> 
            </h2>
            <h2>
                <a href="detail-album.html">${datos.tracks.data[index].album.title}</a>
            </h2>
            <p><button type="submit" id="boton${index}"  class="holaMundo123"><i class="far fa-star"></i></button></p>
            <p id="estrellitafachera"><iframe src="${datos.tracks.data[index].preview}" width="100px" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></p>
            `;

        }
        
        // let agregarFavoritos0 = document.querySelector("#boton0");
        // agregarFavoritos0.addEventListener("click", function () {
        //     alert("hola mundo");
        //     let infoArtista = {
        //         nombreCancion : datos.tracks.data[0].title,
        //         imagen : datos.tracks.data[0].album.cover,
        //         nombreArtista : datos.tracks.data[0].artist.name,
        //         albumNombre : datos.tracks.data[0].album.title,
        //         preview : datos.tracks.data[0].preview,
        //     };
        //     let infoArtistaToString = JSON.stringify(infoArtista);
        //     localStorage.setItem("favoritos0", infoArtistaToString);

        // })
        // let agregarFavoritos1 = document.querySelector("#boton1");
        // agregarFavoritos1.addEventListener("click", function () {
        //     alert("hola mundo");
        //     let infoArtista = {
        //         nombreCancion : datos.tracks.data[1].title,
        //         imagen : datos.tracks.data[1].album.cover,
        //         nombreArtista : datos.tracks.data[1].artist.name,
        //         albumNombre : datos.tracks.data[1].album.title,
        //         preview : datos.tracks.data[1].preview,
        //     };
        //     let infoArtistaToString = JSON.stringify(infoArtista);
        //     localStorage.setItem("favoritos1", infoArtistaToString);

        // })
        // arreglo vacio que te guarde todo, ese arreglo se va al local storage. Saco la info del arreglo
        // let arrayVacio = [];
        let botonesFavoritos = document.querySelectorAll(".holaMundo123");
        for (let index = 0; index < botonesFavoritos.length; index++) {
            botonesFavoritos[index].addEventListener("click", function () {
                alert("hola mundo");
                let infoArtista = [
                    nombreCancion = datos.tracks.data[index].title,
                    imagen = datos.tracks.data[index].album.cover,
                    nombreArtista = datos.tracks.data[index].artist.name,
                    albumNombre = datos.tracks.data[index].album.title,
                    preview = datos.tracks.data[index].preview,
                ];
                // let infoArtistaToArray = arrayVacio.push(infoArtista);  
                // infoArtistaToArrayToString = JSON.stringify(infoArtistaToArray);
                // localStorage.setItem(`favoritos${index}`, infoArtistaToArrayToString);
                infoArtistaToString = JSON.stringify(infoArtista);
                localStorage.setItem(`favoritos${index}`, infoArtistaToString);
            })            
        }
        console.log(botonesFavoritos);

    //     let index11 = document.querySelectorAll(`#boton${index}`);
    //     for(let i=0; i<index11.length; i++){
    //     index11[i].addEventListener ("click", function () {
    //         alert("hola mundo")
    //         let infoArtista = {
    //             nombreCancion : `${datos.tracks.data[index].title}`,
    //             imagen : `${datos.tracks.data[index].album.cover}`,
    //             nombreArtista :`${datos.tracks.data[index].artist.name}`,
    //             albumNombre : `${datos.tracks.data[index].album.title}`,
    //             preview : `${datos.tracks.data[index].preview}`,
    //         };
    //         let infoArtistaAparce = JSON.stringify(infoArtista);
    //         localStorage.setItem("favoritos", infoArtistaAparce);
    //         window.location.href="playlist.js";
    //     })   
       
    // }})
    })
    .catch(function (error) {
        console.log('Tu error ess: ' + error);
    });





    

})