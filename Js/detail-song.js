window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiCanciones = `${proxy}https://api.deezer.com/playlist/9165177722`;

    fetch(apiCanciones)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        // let arregloPlaylist = [];
        // localStorage.setItem("agregar", JSON.stringify(arregloPlaylist));
        // localStorage.clear();

        let insertarTitulo = document.querySelectorAll(".cancion_d");
        for(let index=0; index < insertarTitulo.length; index++){
            insertarTitulo[index].innerHTML += `
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
                let agarroElArrayVacio = localStorage.getItem("agregar");
                let parseArrayVacio = JSON.parse(agarroElArrayVacio);
                parseArrayVacio.push(datos.tracks.data[index].id);
                localStorage.setItem("agregar", JSON.stringify(parseArrayVacio));
        })}
    })
    .catch(function (error) {
        console.log('Tu error ess: ' + error);
    });


    //BUSCADOR

    let campoBuscar = document.querySelector("#campoBuscar"); 

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