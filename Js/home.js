window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiQueen = `${proxy}https://api.deezer.com/artist/412`;
    
    //Queen
    fetch(apiQueen)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistas = document.querySelector('#Queen--');
            artistas.innerHTML = ` 
            
            <h3><strong> <a href="detail-artist.html#queen_d">${datos.name}</a> </strong></h3>
            <img src="${datos.picture_big}" class="fotos_artistas" >
            <p class="epigrafe_artistas">
            Último album: <a href="detail-album.html">A night at the opera</a>
            <br><br>
            Canción más popular:<a href="detail-song.html"> Bohemian Rhapsody</a>
            </p> `
    
            
                          
      
        
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });
        let apiAriana = `${proxy}https://api.deezer.com/artist/1562681`;

        //Ariana
        fetch(apiAriana)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistasAriana = document.querySelector('#ariana--');
                artistasAriana.innerHTML = ` 
                
                <h3> <strong><a href="detail-artist.html#ariana_d">${datos.name}</a></strong> </h3>
                <img src="${datos.picture_big}" class="fotos_artistas">
                <p class="epigrafe_artistas">
                Último album: <a href="detail-album.html"> Positions</a>
                <br><br>
                Canción más popular: <a href="detail-song.html"> 34+35</a>
                </p>`
        
                
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });

            //kygo
            let apiKygo = `${proxy}https://api.deezer.com/artist/4768753`;
            
            fetch(apiKygo)
                .then(function (response) {
                    return response.json();
                })
                .then(function (datos) {
                    console.log(datos);
                    let artistasKygo = document.querySelector('#kigo');
                    artistasKygo.innerHTML = ` 
                    
                <h3> <a href="detail-artist.html#kygo_d"> <strong>${datos.name}</strong> </a> </h3>
                <img src="${datos.picture_big}" class="fotos_artistas">
                <p class="epigrafe_artistas">
                Último album: <a href="detail-album.html">Cloud nine</a>
                <br><br>
                Canción más popular:<a href="detail-song.html"> Fragile</a>
                </p>`
            
                    
                })
                .catch(function (error) {
                    console.log('Tu error es: ' + error);
                });
            //vela puerca
                let apiVela = `${proxy}https://api.deezer.com/artist/5954`;

            
            fetch(apiVela)
                .then(function (response) {
                    return response.json();
                })
                .then(function (datos) {
                    console.log(datos);
                    let artistasVela = document.querySelector('#vela1');
                    artistasVela.innerHTML = ` 
                    
                    <h3><strong><a href="detail-artist.html#vela_d">${datos.name}</a></strong> </h3>
                    <img src="${datos.picture_big}" class="fotos_artistas">
                    <p class="epigrafe_artistas">
                    Último album: <a href="detail-album.html">A contraluz</a>
                    <br><br>
                    Canción más popular:<a href="detail-song.html"> Llenos de magia</a>
                    </p>`
            
                    
                })
                .catch(function (error) {
                    console.log('Tu error es: ' + error);
                });

                let apiCallejeros = `${proxy}https://api.deezer.com//12134`;

                //callejeros
                fetch(apiCallejeros)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (datos) {
                        console.log(datos);
                        let artistasCalle = document.querySelector('#callejeros_');
                        artistasCalle.innerHTML = ` 
                        
                    <h3> <strong><a href="detail-artist.html#callejeros_d"> ${datos.name}</a></strong> </h3>
                    <img src="${datos.picture_big}" class="fotos_artistas">
                    <p class="epigrafe_artistas">
                     Último album:<a href="detail-album.html"> Señales</a>
                     <br><br>
                     Canción más popular:<a href="detail-song.html"> Daños</a>
                    </p>`
                
                        
                    })
                    .catch(function (error) {
                        console.log('Tu error es: ' + error);
                    });
                
                //Bts

                    let apiBts = `${proxy}https://api.deezer.com/artist/6982223`;
                    
                fetch(apiBts)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (datos) {
                        console.log(datos);
                        let artistasBts = document.querySelector('#Btss');
                        artistasBts.innerHTML = ` 
                        
                        <h3><strong><a href="detail-artist.html#bts_d"> ${datos.name}</a></strong></h3>
                        <img src="${datos.picture_big}" alt="Foto grupal BTS" class="fotos_artistas">
                        <p class="epigrafe_artistas">
                        Último album: <a href="detail-song.html"> BE</a>
                        <br><br>
                        Canción más popular: <a href="detail-album.html"> Life goes on</a>
                        </p>`
                
                        
                    })
                    .catch(function (error) {
                        console.log('Tu error es: ' + error);
                    });

                    //ALBUMES

                    let apiAlbumQueen = `${proxy} https://api.deezer.com/album/915785`;
                    
                fetch(apiAlbumQueen)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (datos) {
                        console.log(datos);
                        let albumQueen = document.querySelector('#albumQ');
                        albumQueen.innerHTML = ` 
                        
                        <img src="${datos.cover_medium}" alt="Portada de A night at the opera" class="portadas_albums">
                        <h3> <a href="detail-album.html">${datos.title}</a> </h3>
                        <p> <a href="detail-artist.html">Queen</a> </p>
                        <a href="detail-song.html">Bohemian Rhapsody</a>
                        <br>
                        <a href="detail-song.html">Love of my life</a>
                        <br>
                        <a href="detail-song.html">You´re my best friend</a>
                        <br>
                        <a href="detail-song.html">Death on two legs</a>
                        <br>
                        <a href="detail-song.html">God save the queen</a>`
                
                        
                    })
                    .catch(function (error) {
                        console.log('Tu error es: ' + error);
                    });

});
