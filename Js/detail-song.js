window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiCanciones = `${proxy}https://api.deezer.com/playlist/9165177722`;

    fetch(apiCanciones)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let arregloPlaylist = []
        let insertarTitulo = document.querySelectorAll(".cancion_d");
        for(let index=0; index < insertarTitulo.length; index++){
            insertarTitulo[index].innerHTML = `
                <img src="${datos.tracks.data[index].album.cover}">
                <h2 class="titulo11">${datos.tracks.data[index].title}</h2>
                <h2 > 
                    <a href="detail-artist.html?idArtista=${datos.tracks.data[index].artist.id}">${datos.tracks.data[index].artist.name}</a> 
                </h2>
                <h2>
                    <a href="detail-album.html?idAlbum=${datos.tracks.data[index].album.id}">${datos.tracks.data[index].album.title}</a>
                </h2>
                <p><button type="submit" id="boton${index}"  class="holaMundo123"><i class="far fa-star"></i></button></p>
                <p id="estrellitafachera"><iframe src="${datos.tracks.data[index].preview}" width="100px" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></p>
                `;
        }
        let botonesFavoritos = document.querySelectorAll(".holaMundo123");
        for (let index = 0; index < botonesFavoritos.length; index++) {
            botonesFavoritos[index].addEventListener("click", function () {
                alert("Agregado a su playlist");
                var infoArtista = [
                    nombreCancion = datos.tracks.data[index].title,
                    imagen = datos.tracks.data[index].album.cover,
                    nombreArtista = datos.tracks.data[index].artist.name,
                    albumNombre = datos.tracks.data[index].album.title,
                    preview = datos.tracks.data[index].preview
                ] ;
                infoArtistaToString = JSON.stringify(infoArtista);
                localStorage.setItem(`favoritos${index}`, infoArtistaToString);
                arregloPlaylist.push(`favoritos${index}`);
                localStorage.setItem(`favoritos`, JSON.stringify(arregloPlaylist))
            })            
        }
        console.log(botonesFavoritos);
        console.log(infoArtista);

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


    //BUSCADOR

    let campoBuscar = document.querySelector("#campoBuscar"); 
    // let isNanFacha = campoBuscar.value; 
    campoBuscar.addEventListener("focus", function () {
        campoBuscar.style.border = "3px solid green";
    })
    campoBuscar.addEventListener("blur", function () {
        if (campoBuscar.value === '' || campoBuscar.value.length < 3) {
            campoBuscar.style.border = "3px solid red";
        }
    })
    let submit123 = document.querySelector("#submit123");
    submit123.addEventListener("submit", function (e) {
        e.preventDefault();
        if (campoBuscar.value === '' || campoBuscar.value.length < 3) {
            alert("¡ERROR! El campo no puede estar vacio y debe contener al menos 3 caracteres");
        }
        else {
            alert("Formulario enviado correctamente");
            this.submit();
        }
    })



    

})