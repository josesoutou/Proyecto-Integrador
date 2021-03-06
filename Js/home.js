window.addEventListener("load", function() {
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

    //aca lo que hicimos fue resolver la cuestion acerca de los formularios. 
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiQueen = `${proxy}https://api.deezer.com/artist/412`;

        fetch(apiQueen)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistas = document.querySelector('#Queen--');
                artistas.innerHTML = ` 
                    <h3><strong><a href="detail-artist.html?idArtista=${datos.id}"> ${datos.name}</a></strong></h3>
                    <img src="${datos.picture_big}" class="fotos_artistas" >
                    <p class="epigrafe_artistas">
                        Último album: <a href="detail-album.html?idAlbum=915785">A night at the opera</a>
                        <br><br>
                        Canción más popular:<a href="detail-song.html?"> Bohemian Rhapsody</a>
                    </p> `
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });

    //Ariana: cambiamos la imagen y el título del artista

        let apiAriana = `${proxy}https://api.deezer.com/artist/1562681`;

        fetch(apiAriana)
            .then(function (response) {
                    return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistasAriana = document.querySelector('#ariana--');
                artistasAriana.innerHTML = ` 
                <h3> <strong>
                    <a href="detail-artist.html?nombre=${datos.name}&imagen=${datos.picture_big}&idArtista=${datos.id}">${datos.name}</a>
                </strong> </h3>
                <img src="${datos.picture_big}" class="fotos_artistas">
                <p class="epigrafe_artistas">
                Último album: <a href="detail-album.html?idAlbum=208899972"> Positions</a>
                <br><br>
                Canción más popular: <a href="detail-song.html"> 34+35</a>
                </p>`
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });


    //Kygo: cambiamos la imagen y el título del artista
        
        let apiKygo = `${proxy}https://api.deezer.com/artist/4768753`;
            
        fetch(apiKygo)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistasKygo = document.querySelector('#kigo');
                artistasKygo.innerHTML = `    
                    <h3><strong><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></strong></h3>
                    <img src="${datos.picture_big}" class="fotos_artistas">
                    <p class="epigrafe_artistas">
                        Último album: <a href="detail-album.html?idAlbum=13082674">Cloud nine</a>
                        <br><br>
                        Canción más popular:<a href="detail-song.html"> Fragile</a>
                    </p>`        
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });
    

    //Vela puerca: cambiamos la imagen y el título del artista
                
        let apiVela = `${proxy}https://api.deezer.com/artist/5954`;
    
        fetch(apiVela)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let artistasVela = document.querySelector('#vela1');
                artistasVela.innerHTML = ` 
                    <h3><strong><a href="detail-artist.html?nombre=${datos.name}&imagen=${datos.picture_big}&idArtista=${datos.id}">${datos.name}</a></strong> </h3>
                    <img src="${datos.picture_big}" class="fotos_artistas">
                    <p class="epigrafe_artistas">
                        Último album: <a href="detail-album.html?idAlbum=160753">A contraluz</a>
                        <br><br>
                        Canción más popular:<a href="detail-song.html"> Llenos de magia</a>
                    </p>`   
                })
                .catch(function (error) {
                    console.log('Tu error es: ' + error);
                });

     //Callejeros: cambiamos la imagen y el título del artista
                
        let apiCallejeros = `${proxy}https://api.deezer.com/artist/12134`;

        fetch(apiCallejeros)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
              let artistasCalle = document.querySelector('#callejeros_');
                artistasCalle.innerHTML = ` 
                    <h3> <strong><a href="detail-artist.html?nombre=${datos.name}&imagen=${datos.picture_big}&idArtista=${datos.id}"> ${datos.name}</a></strong> </h3>
                    <img src="${datos.picture_big}" class="fotos_artistas">
                    <p class="epigrafe_artistas">
                        Último album:<a href="detail-album.html?idAlbum=11396448"> Señales</a>
                        <br><br>
                        Canción más popular:<a href="detail-song.html"> Daños</a>
                    </p>`
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });
                

    //BTS: cambiamos la imagen y el título del artista

        let apiBts = `${proxy}https://api.deezer.com/artist/6982223`;
                    
        fetch(apiBts)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                
                let artistasBts = document.querySelector('#Btss');
                artistasBts.innerHTML = `     
                    <h3><strong><a href="detail-artist.html?nombre=${datos.name}&imagen=${datos.picture_big}&idArtista=${datos.id}"> ${datos.name}</a></strong></h3>
                    <img src="${datos.picture_big}" alt="Foto grupal BTS" class="fotos_artistas">
                    <p class="epigrafe_artistas">
                        Último album: <a href="detail-album.html?idAlbum=186790522"> BE</a>
                        <br><br>
                        Canción más popular: <a href="detail-song.html"> Life goes on</a>
                    </p>`
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
                });


    //ALBUMES

    //A night at the opera: cambiamos la portada y el título del album
    
        let apiAlbumQueen = `${proxy}https://api.deezer.com/album/915785`;
                    
        fetch(apiAlbumQueen)
            .then(function (response) {
            return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let albumQueen = document.querySelector('#albumQ');
                albumQueen.innerHTML = ` 
                    <img src="${datos.cover_medium}" alt="Portada de A night at the opera" class="portadas_albums">
                    <h3> <a href="detail-album.html?idAlbum=${datos.id}">${datos.title}</h3></a>
                    <p> 
                        <a href="detail-artist.html?idArtista=412">Queen</a> 
                    </p>
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
                console.log('Tu error ess: ' + error);
                });

    
    //Album Positions: cambiamos la portada y el título del album
                
        let apiAlbumAriana = `${proxy}https://api.deezer.com/album/208899972`;
                    
        fetch(apiAlbumAriana)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let albumAriana = document.querySelector('#albumA');
                albumAriana.innerHTML = `        
                    <img src="${datos.cover_medium}" alt="Portada album positions" class="portadas_albums">
                    <h3> <a href="detail-album.html?idAlbum=${datos.id}">${datos.title}</a> </h3>
                    <p> 
                        <a href="detail-artist.html?idArtista=1562681">Ariana Grande</a>
                    </p>
                    <a href="detail-song.html">Positions</a>
                    <br>
                    <a href="detail-song.html">34+35</a>
                    <br>
                    <a href="detail-song.html">Just like magic</a>
                    <br>
                    <a href="detail-song.html">My hair</a>
                    <br>
                    <a href="detail-song.html">Love language</a>`        
            })
            .catch(function (error) {
                console.log('Tu error ess: ' + error);
            });
    

    //Album Kygo Cloud Nine: cambiamos la portada y el título del album
                
        let apiAlbumKygo = `${proxy}https://api.deezer.com/album/13082674`;
                    
        fetch(apiAlbumKygo)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let albumKygo = document.querySelector('#albumK');
                albumKygo.innerHTML = ` 
                    <img src="${datos.cover_medium}" alt="Portada album Cloud nine" class="portadas_albums">
                    <h3> <a href="detail-album.html?idAlbum=${datos.id}">${datos.title}</a></h3>
                    <p> <a href="detail-artist.html?idArtista=4768753">Kygo</a></p>
                        <a href="detail-song.html">Fragile</a>
                    <br>
                    <a href="detail-song.html">Firestone</a>
                    <br>
                    <a href="detail-song.html">Stole the show</a>
                    <br>
                    <a href="detail-song.html">Stay</a>
                    <br>
                    <a href="detail-song.html">Carry me</a>`    
            })
            .catch(function (error) {
                console.log('Tu error ess: ' + error);
            });


    //Album La Vela Puerca: cambiamos la portada y el título del album
                
        let apiAlbumLaVela = `${proxy}https://api.deezer.com/album/160753`;
                    
        fetch(apiAlbumLaVela)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let albumLaVela = document.querySelector('#albumLV');
                albumLaVela.innerHTML = ` 
                
                <img src="${datos.cover_medium}" alt="Portada album A contraluz" class="portadas_albums">
                <h3> <a href="detail-album.html?&idAlbum=${datos.id}">${datos.title}</a> </h3>
                <p> 
                    <a href="detail-artist.html?idArtista=5954">La Vela Puerca</a> 
                </p>
                <a href="detail-song.html">Llenos de magia</a>
                <br>
                <a href="detail-song.html">Sin palabras</a>
                <br>
                <a href="detail-song.html">Dice</a>
                <br>
                <a href="detail-song.html">Va a acampar</a>
                <br>
                <a href="detail-song.html">Escobas</a>`
            })
            .catch(function (error) {
                console.log('Tu error ess: ' + error);
            });


    //Album Callejeros Señales: cambiamos la portada y el título del album
                
        let apiAlbumCallejeros = `${proxy}https://api.deezer.com/album/11396448`;
                    
        fetch(apiAlbumCallejeros)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let albumCallejeros = document.querySelector('#albumC');
                albumCallejeros.innerHTML = ` 
                    <img src="${datos.cover_medium}" alt="Portada album Señales" class="portadas_albums">
                    <h3> <a href="detail-album.html?idAlbum=${datos.id}">${datos.title}</a> </h3>
                    <p>
                        <a href="detail-artist.html?idArtista=12134">Callejeros</a>
                    </p>
                    <a href="detail-song.html">Daños</a>
                    <br>
                    <a href="detail-song.html">Puede</a>
                    <br>
                    <a href="detail-song.html">Límites</a>
                    <br>
                    <a href="detail-song.html">Creo</a>
                    <br>
                    <a href="detail-song.html">Frente al río</a>`
            })
            .catch(function (error) {
                console.log('Tu error ess: ' + error);
            });


    //Album BTS BE: cambiamos la portada y el título del album
                
        let apiAlbumBts = `${proxy}https://api.deezer.com/album/186790522`;
                    
        fetch(apiAlbumBts)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                let albumBts = document.querySelector('#albumB');
                albumBts.innerHTML = ` 
                    <img src="${datos.cover_medium}" alt="Portada album BE" class="portadas_albums">
                    <h3> <a href="detail-album.html?idAlbum=${datos.id}">${datos.title}</a> </h3>
                    <p> 
                        <a href="detail-artist.html?idArtista=6982223">BTS</a>
                    </p>
                    <a href="detail-song.html">Life goes on</a>
                    <br>
                    <a href="detail-song.html">Blue & Grey</a>
                    <br>
                    <a href="detail-song.html">Telepathy</a>
                    <br>
                    <a href="detail-song.html">Stay</a>
                    <br>
                    <a href="detail-song.html">Dynamite</a>`
            })
            .catch(function (error) {
                console.log('Tu error ess: ' + error);
            });


    //CANCIONES 

        let apiCancionesHome = `${proxy}https://api.deezer.com/playlist/9165177722`;

        fetch(apiCancionesHome)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);

                //Bohemian Rhapsody: cambiar portada
                let bohemian = document.querySelector('#bohemianRhapsody');
                bohemian.innerHTML = `
                    <img src="${datos.tracks.data[1].album.cover_big}" alt="portada album A night at the opera" class="imagen_cancion">
                    <h3 class="nombre_canción"> <a href="detail-song.html">Bohemian Rhapsody</a></h3>
                    <p class="nombre_album"> 
                        <a href="detail-album.html?idAlbum=915785">A night at the opera</a>
                    </p>
                    <i class="fas fa-play"></i> `

                //Daños: cambiar portada
                let daños = document.querySelector('#daños_c');
                daños.innerHTML = `
                    <img src="${datos.tracks.data[10].album.cover_big}" alt="portada album señales de callejeros" class="imagen_cancion">
                    <h3 class="nombre_canción"> <a href="detail-song.html">Daños</a></h3>
                    <p class="nombre_album">
                        <a href="detail-album.html?idAlbum=11396448">Señales</a>
                    </p>
                    <i class="fas fa-play"></i>`

                //Positions: cambiar portada
                let positions = document.querySelector('#positionsAriana');
                positions.innerHTML = `
                    <img src="${datos.tracks.data[37].album.cover_big}" alt="portada album positions" class="imagen_cancion">
                    <h3 class="nombre_canción"><a href="detail-song.html">Positions</a></h3>
                    <p class="nombre_album">
                        <a href="detail-album.html?idAlbum=208899972">Positions</a>
                    </p>
                    <i class="fas fa-play"></i>`

                //Life goes on: cambiar portada
                let lifeGoesOn = document.querySelector('#lifeGoesOn_c');
                lifeGoesOn.innerHTML = `
                    <img src="${datos.tracks.data[4].album.cover_big}" alt="portada album BE de BTS" class="imagen_cancion">
                    <h3 class="nombre_canción"> <a href="detail-song.html">Life goes on</a></h3>
                    <p class="nombre_album">
                        <a href="detail-album.html?idAlbum=186790522">BE</a>
                    </p>
                    <i class="fas fa-play"></i>`

                //Fragile: cambiar portada
                let fragile = document.querySelector('#fragile_c');
                fragile.innerHTML = `
                    <img src="${datos.tracks.data[38].album.cover_big}" alt="portada album Cloud nine de kygo" class="imagen_cancion">
                    <h3 class="nombre_canción"> <a href="detail-song.html">Fragile</a></h3>
                    <p class="nombre_album">
                        <a href="detail-album.html?idAlbum=13082674">Cloud Nine</a>
                    </p>
                    <i class="fas fa-play"></i>`

                //Llenos de magia: cambiar portada
                let llenosDeMagia = document.querySelector('#llenos_c');
                llenosDeMagia.innerHTML = `
                    <img src="${datos.tracks.data[34].album.cover_big}" alt="portada album a contraluz de la vela puerca" class="imagen_cancion">
                    <h3 class="nombre_canción"> <a href="detail-song.html">Llenos de magia</a> </h3>
                    <p class="nombre_album">
                        <a href="detail-album.html?idAlbum=160753">A Contraluz</a>
                    </p>
                    <i class="fas fa-play"></i>`

            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });

    
    //Aca le agregamos un borde a los artistas/albums/canciones cuando pasamos el mouse sobre ellos

    let tituloArtista1 = document.querySelectorAll('.artistas');

    for(let index = 0; index < tituloArtista1.length; index++){
             tituloArtista1[index].addEventListener("mouseover", function () {
                tituloArtista1[index].style.border = '3px solid #ff6f43';
             })
            tituloArtista1[index].addEventListener("mouseout", function () {
                tituloArtista1[index].style.border = '3px solid black';
            })
         }
         
    let tituloAlbum = document.querySelectorAll('.album_artista');

    for(let index = 0; index < tituloAlbum.length; index++){
        tituloAlbum[index].addEventListener("mouseover", function () {
            tituloAlbum[index].style.border = '3px solid #ff6f43';
            })
            tituloAlbum[index].addEventListener("mouseout", function () {
                tituloAlbum[index].style.border = '3px solid black';
        })
    }

    let tituloCancion = document.querySelectorAll('.cancion_uno');
    
    for(let index = 0; index < tituloAlbum.length; index++){
        tituloCancion[index].addEventListener("mouseover", function () {
            tituloCancion[index].style.border = '3px solid #ff6f43';
            })
            tituloCancion[index].addEventListener("mouseout", function () {
                tituloCancion[index].style.border = '3px solid black';
        })
    }


       


});


