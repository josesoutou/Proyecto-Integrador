window.addEventListener("load", function() {
    
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let idArtista = queryStringObj.get("idArtista"); 


    fetch(`${proxy}https://api.deezer.com/artist/${idArtista}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let infoArtistaDetalles = document.querySelector(".infoartista")
            infoArtistaDetalles.innerHTML = `
            <h2 class="detalle_artista">${datos.name}</h2>
            <div class="infoartista">
                <img src="${datos.picture_big}" class="foto_artista_detalle" alt="Foto de ${datos.name}">
                
                <div class="texto_d_artista">
                    <h3 class="bio_artista">Sus top Albums:</h3>
                    <br>
                    <p class="descripcion_artista"></p>
                </div>
            </div>`
                        

            fetch(`${proxy}https://api.deezer.com/artist/${idArtista}/albums`)

                .then(function (response1) {
                    return response1.json();
                })
                .then(function (datos1) {
                    console.log(datos1);
                    console.log(datos1.data)

                    for (let index = 0; index < 5; index+=1) {
                        let probando = document.querySelector(".texto_d_artista")
                        probando.innerHTML += `
                        <a href="detail-album.html?idAlbum=${datos1.data[index].id}"<p>${datos1.data[index].title}</p>
                            `
                    }
                    probando.innerHTML = `<p> ${datos1.title} </p>`
                })
                .catch(function (error) {
                    console.log('Tu error es: ' + error);
                });
                
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
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