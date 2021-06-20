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
                
                <a href="detail-artist.html"><b> ${datos.name}</b></a>
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
            let artistasAriana = document.querySelector('#ArianaGeneros');
            artistasAriana.innerHTML = ` 
            <a href="genero_detalle.html#pp" class="links" id="popjava"><h2>Pop</h2></a>
            <p>El artista mas escuchado de este genero:</p>  
            <a href="detail-artist.html"> <b>${datos.name}</b></a>
            <img class="img1" src="${datos.picture_big}" alt="image" width="200px">
             `
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

        let apiCallejerosGenero = `${proxy}https://api.deezer.com/artist/12134`;

    fetch(apiCallejerosGenero)
        .then(function (response) {
                return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasFontanet = document.querySelector('#callejeroG');
            artistasFontanet.innerHTML = ` 
            <a href="genero_detalle.html#rn" class="links"><h2>Rock Nacional</h2></a>
            <p>El artista mas escuchado de este genero:</p> 
            <a href="detail-artist.html" class="hipervinculo"> <b>Patricio Fontanet</b></a>
            <img class="img1"src="${datos.picture_big}" alt="image">
             `
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

        let apiCallejerosGenero1 = `${proxy}https://api.deezer.com/artist/4768753`;

    fetch(apiCallejerosGenero1)
        .then(function (response) {
                return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasFontanet = document.querySelector('#kkigo');
            artistasFontanet.innerHTML = ` 
            <a href="genero_detalle.html#ep" class="links"><h2>Electro Pop</h2></a>
            <p class="parrafo_g">El artista mas escuchado de este género:</p>  
            <a href="detail-artist.html" class="hipervinculo"> <b>${datos.name}</b></a>
            <img class="img1" src="${datos.picture_big}"alt="image">
             `
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

        let apiBTS1= `${proxy}https://api.deezer.com/artist/6982223`;
    
    fetch(apiBTS1)
        .then(function (response) {
                return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasJin = document.querySelector('#kpopp');
            artistasJin.innerHTML = ` 
            <a href="genero_detalle.html#kk" class="links"><h2>K-pop</h2></a>
                <p>El artista mas escuchado de este genero:</p>  
                <a href="detail-artist.html" class="hipervinculo"> <b>Jin</b></a>
                <img class="img1"src="https://i.pinimg.com/originals/65/58/51/655851e584065a14fb167f562bb904f6.jpg" alt="image">
             `
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });
});