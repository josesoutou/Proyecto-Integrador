window.addEventListener("load", function() {

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
    

    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    // let apiBob = `${proxy}https://api.deezer.com/artist/808`;

    // //Genero Rock

    // //bob dylan
    // fetch(apiBob)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasBob = document.querySelector('#Bob');
    //     artistasBob.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" 
    //     src="${datos.picture_big}" width="50%" >
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });
    
    // //queen
    // let apiQueenDetalle = `${proxy}https://api.deezer.com/artist/1945`;

    // fetch(apiQueenDetalle)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasQuenn = document.querySelector('#Queendetalle');
    //     artistasQuenn.innerHTML = ` 
    //     <div class="uno">
    //             <img class="imgD" src="${datos.picture_big}" width="50%" >
    //             <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });
    
    // //morrison
    // let apiMorrison = `${proxy}https://api.deezer.com/artist/6783`;

    // fetch(apiMorrison)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasMorrison = document.querySelector('#MorrisonD');
    //     artistasMorrison.innerHTML = ` 
    //         <div class="uno">
    //             <img class="imgD" src="https://i.pinimg.com/originals/63/db/e2/63dbe2f40b24d099a84ac56dd1164df5.jpg" width="50%" >
    //             <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //         </div>`
    //     // aca pegamos una imagen manualmente porque la foto se veía mal desde la api
    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });   
    
    // //Genero Pop
    // let apiMadona = `${proxy}https://api.deezer.com/artist/290`; 

    // fetch(apiMadona)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasMaddona = document.querySelector('#Maddonaa');
    //     artistasMaddona.innerHTML = ` 
    //         <div class="uno">
    //             <img class="imgD" src="${datos.picture_big}" width="50%" >
    //             <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //         </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });      

    // //Katy perry
    // let apiKaty= `${proxy}https://api.deezer.com/artist/144227`; 

    // fetch(apiKaty)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasKaty = document.querySelector('#KatyG');
    //     artistasKaty.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="${datos.picture_big}" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });

    // //Justin Bieber
    // let apiJustin= `${proxy}https://api.deezer.com/artist/288166`; 

    // fetch(apiJustin)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasJustin = document.querySelector('#justin');
    //     artistasJustin.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="${datos.picture_big}" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });

    // //Genero rock nacionaaaallll
    // let apiCharly= `${proxy}https://api.deezer.com/artist/4300`; 

    // fetch(apiCharly)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasCharly = document.querySelector('#charlyy');
    //     artistasCharly.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="https://i1.sndcdn.com/artworks-000480754191-ptyl2l-t500x500.jpg" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });


    // let apiCeratti= `${proxy}https://api.deezer.com/artist/1374`; 

    // fetch(apiCeratti)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasCeratti = document.querySelector('#ceratti');
    //     artistasCeratti.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="${datos.picture_big}" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });

    // //Gustavo Calamaro
    


    // let apiCalamaro= `${proxy}https://api.deezer.com/artist/5838`; 

    // fetch(apiCalamaro)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasCalamaro = document.querySelector('#Andress');
    //     artistasCalamaro.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="${datos.picture_big}" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });

    // //Kpop
    // let apiBaekhyun= `${proxy}https://api.deezer.com/artist/12116464`; 

    // fetch(apiBaekhyun)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasBaekhyun = document.querySelector('#Baek');
    //     artistasBaekhyun.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="https://i.pinimg.com/originals/83/34/e4/8334e4d97ac8a0c2d3e8e7a575321d8b.jpg" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });

    
    // let apiTaeyeon= `${proxy}https://api.deezer.com/artist/2562931`; 

    // fetch(apiTaeyeon)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasTaeyeon = document.querySelector('#Tae');
    //     artistasTaeyeon.innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="${datos.picture_big}" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });


     
    // let apiKwon = `${proxy}https://api.deezer.com/artist/2810121`; 

    // fetch(apiKwon )
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
    //     let artistasKwon  = document.querySelector('#Kwon');
    //     artistasKwon .innerHTML = ` 
    //     <div class="uno">
    //     <img class="imgD" src="${datos.picture_big}" width="50%">
    //     <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //     </div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error es: ' + error);
    // });

    //     //ELECTRO POP
    //     let apiAvicci = `${proxy}https://api.deezer.com/artist/293585`; 

    //     fetch(apiAvicci )
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (datos) {
    //         console.log(datos);
    //         let artistasAvicci  = document.querySelector('#aviccii');
    //         artistasAvicci.innerHTML = ` 
    //         <div class="uno">
    //         <img class="imgD" src="${datos.picture_big}" width="50%">
    //         <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //         </div>`
    
    //     })
    //     .catch(function (error) {
    //         console.log('Tu error es: ' + error);
    //     });
        
        
        
        
        
        
        
        
    //     let apiDavid = `${proxy}https://api.deezer.com/artist/542`; 

    //     fetch(apiDavid )
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (datos) {
    //         console.log(datos);
    //         let artistasDavid  = document.querySelector('#David');
    //         artistasDavid.innerHTML = ` 
    //         <div class="uno">
    //         <img class="imgD" src="${datos.picture_big}" width="50%">
    //         <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //         </div>`
    
    //     })
    //     .catch(function (error) {
    //         console.log('Tu error es: ' + error);
    //     });

    //     let apiMarrshmello = `${proxy}https://api.deezer.com/artist/7890702`; 

    //     fetch(apiMarrshmello )
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (datos) {
    //         console.log(datos);
    //         let artistasMarrsh  = document.querySelector('#Marrsh');
    //         artistasMarrsh.innerHTML = ` 
    //         <div class="uno">
    //         <img class="imgD" src="${datos.picture_big}" width="50%">
    //         <h3 class="text1"><a href="detail-artist.html?idArtista=${datos.id}">${datos.name}</a></h3>
    //         </div>`
    
    //     })
    //     .catch(function (error) {
    //         console.log('Tu error es: ' + error);
    //     });
    

