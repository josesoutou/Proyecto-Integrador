window.addEventListener("load", function() {

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


    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let idGenero = queryStringObj.get("idGenero"); 



    fetch(`${proxy}https://api.deezer.com/genre/${idGenero}`)

    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let generoId = document.querySelector(".diego")
        generoId.innerHTML = `
        <h3 class="text1">${datos.name}</h3>
        <br>
        <p>Los artistas mas escuchado de este genero:</p>
        <br>`
            let apiGeneroArtista = `${proxy}https://api.deezer.com/genre/${idGenero}/artists`;
                fetch(apiGeneroArtista)
                    .then(function (response1) {
                        return response1.json();
                    })
                    .then(function (datos1) {
                        console.log(datos1);
                        for (let index = 0; index < 3; index++) {
                            let cadaGenero = document.querySelector(".hola123");
                            cadaGenero.innerHTML += `  
                            <a href="detail-artist.html?idArtista=${datos1.data[index].id}" class="nombresG"><b>${datos1.data[index].name}</b></a>
                            <img class="img1" src="${datos1.data[index].picture_big}" alt="image"> `                          
                        }
                    })
                    .catch(function (error) {
                        console.log('Tu error es: ' + error);
                    });
            
    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
        document.querySelector(".errorAlbum").innerHTML = `<iframe src="https://giphy.com/embed/mq5y2jHRCAqMo" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/windows-vaporwave-error-mq5y2jHRCAqMo%22%3Evia GIPHY</a></p>` 
    });

})
    

    
    

