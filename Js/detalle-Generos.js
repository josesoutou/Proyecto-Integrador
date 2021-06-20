window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiBob = `${proxy}https://api.deezer.com/artist/808`;

    //Genero Rock

    //bob dylan
    fetch(apiBob)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasBob = document.querySelector('#Bob');
        artistasBob.innerHTML = ` 
        <div class="uno">
        <img class="imgD" 
        src="${datos.picture_big}" width="50%" >
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });
    
    //queen
    let apiQueenDetalle = `${proxy}https://api.deezer.com/artist/1400479`;

    fetch(apiQueenDetalle)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasQuenn = document.querySelector('#Queendetalle');
        artistasQuenn.innerHTML = ` 
        <div class="uno">
                <img class="imgD" src="https://i.pinimg.com/originals/2c/7b/4c/2c7b4c8ad1df79a4c4b0ee46914dd7b6.jpg" width="50%" >
                <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });
    
    //morrison
    let apiMorrison = `${proxy}https://api.deezer.com/artist/6783`;

    fetch(apiMorrison)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasMorrison = document.querySelector('#MorrisonD');
        artistasMorrison.innerHTML = ` 
            <div class="uno">
                <img class="imgD" src="https://i.pinimg.com/originals/63/db/e2/63dbe2f40b24d099a84ac56dd1164df5.jpg" width="50%" >
                <h3 class="text1">${datos.name}</h3>
            </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });   
    
    //Genero Pop
    let apiMadona = `${proxy}https://api.deezer.com/artist/290`; 

    fetch(apiMadona)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasMaddona = document.querySelector('#Maddonaa');
        artistasMaddona.innerHTML = ` 
            <div class="uno">
                <img class="imgD" src="${datos.picture_big}" width="50%" >
                <h3 class="text1">${datos.name}</h3>
            </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });      

    //Katy perry
    let apiKaty= `${proxy}https://api.deezer.com/artist/144227`; 

    fetch(apiKaty)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasKaty = document.querySelector('#KatyG');
        artistasKaty.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="${datos.picture_big}" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

    //Justin Bieber
    let apiJustin= `${proxy}https://api.deezer.com/artist/288166`; 

    fetch(apiJustin)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasJustin = document.querySelector('#justin');
        artistasJustin.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="${datos.picture_big}" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

    //Genero rock nacionaaaallll
    let apiCharly= `${proxy}https://api.deezer.com/artist/4300`; 

    fetch(apiCharly)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasCharly = document.querySelector('#charlyy');
        artistasCharly.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="https://i1.sndcdn.com/artworks-000480754191-ptyl2l-t500x500.jpg" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });


    let apiCeratti= `${proxy}https://api.deezer.com/artist/1374`; 

    fetch(apiCeratti)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasCeratti = document.querySelector('#ceratti');
        artistasCeratti.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="${datos.picture_big}" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

    //Gustavo Calamaro
    


    let apiCalamaro= `${proxy}https://api.deezer.com/artist/5838`; 

    fetch(apiCalamaro)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasCalamaro = document.querySelector('#Andress');
        artistasCalamaro.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="${datos.picture_big}" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

    //Kpop
    let apiBaekhyun= `${proxy}https://api.deezer.com/artist/12116464`; 

    fetch(apiBaekhyun)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasBaekhyun = document.querySelector('#Baek');
        artistasBaekhyun.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="https://i.pinimg.com/originals/83/34/e4/8334e4d97ac8a0c2d3e8e7a575321d8b.jpg" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

    
    let apiTaeyeon= `${proxy}https://api.deezer.com/artist/2562931`; 

    fetch(apiTaeyeon)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasTaeyeon = document.querySelector('#Tae');
        artistasTaeyeon.innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="${datos.picture_big}" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });


     
    let apiKwon = `${proxy}https://api.deezer.com/artist/8071149`; 

    fetch(apiKwon )
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let artistasKwon  = document.querySelector('#Kwon');
        artistasKwon .innerHTML = ` 
        <div class="uno">
        <img class="imgD" src="${datos.picture_big}" width="50%">
        <h3 class="text1">${datos.name}</h3>
        </div>`

    })
    .catch(function (error) {
        console.log('Tu error es: ' + error);
    });

        //ELECTRO POP
        let apiAvicci = `${proxy}https://api.deezer.com/artist/293585`; 

        fetch(apiAvicci )
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasAvicci  = document.querySelector('#aviccii');
            artistasAvicci.innerHTML = ` 
            <div class="uno">
            <img class="imgD" src="${datos.picture_big}" width="50%">
            <h3 class="text1">${datos.name}</h3>
            </div>`
    
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });
        
        
        
        
        
        
        
        
        let apiDavid = `${proxy}https://api.deezer.com/artist/542`; 

        fetch(apiDavid )
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasDavid  = document.querySelector('#David');
            artistasDavid.innerHTML = ` 
            <div class="uno">
            <img class="imgD" src="${datos.picture_big}" width="50%">
            <h3 class="text1">${datos.name}</h3>
            </div>`
    
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

        let apiMarrshmello = `${proxy}https://api.deezer.com/artist/7890702`; 

        fetch(apiMarrshmello )
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let artistasMarrsh  = document.querySelector('#Marrsh');
            artistasMarrsh.innerHTML = ` 
            <div class="uno">
            <img class="imgD" src="${datos.picture_big}" width="50%">
            <h3 class="text1">${datos.name}</h3>
            </div>`
    
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });
    

})