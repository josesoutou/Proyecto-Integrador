// CAMBIAR LAS IMAGENES POR LAS DE LA API DE LA PAGINA GENEROS

window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiQueen = `${proxy}https://api.deezer.com/artist/1400479`;

        fetch(apiQueen)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistas = document.querySelector('.CantanteQ');
                artistas.innerHTML = ` 
                <h3>hola</h3>
                <a href="genero_detalle.html#rk" class="links"><h2>Rock</h2></a>
                <p>El artista mas escuchado de este genero:</p> 
                
                <a href="detail-artist.html"><b> Freddie Mercury</b></a>
                <img class="img1" src="datos.${datos.picture_big}" alt="image"> `

            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });


});