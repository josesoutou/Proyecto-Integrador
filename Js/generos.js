// CAMBIAR LAS IMAGENES POR LAS DE LA API DE LA PAGINA GENEROS

window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiQueen = `${proxy}https://api.deezer.com/artist/4123`;

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
                <img class="img1" src="https://i.pinimg.com/originals/25/3e/5c/253e5c0c99241deec15e2c8c822d38c0.jpg" alt="image"> `

            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });


});