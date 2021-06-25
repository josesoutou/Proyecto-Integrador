window.addEventListener("load", function () {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let obtengoAgregar = localStorage.getItem("agregar");
    let parseoOficial = JSON.parse(obtengoAgregar);
    console.log(parseoOficial);
    let probando1234567 = document.querySelector(".juancaPicuzzi");
    console.log(probando1234567);

    for (let i = 0; i < parseoOficial.length; i++) {
        probando1234567.innerHTML += `
        <div class="soyTuPadre"> 
            <div class="playlist10"></div>
            <div class="borrar"></div>
        </div>
        `
        ;   
    }

    let agarrandoDivGrande = document.querySelectorAll(".playlist10");
    console.log(agarrandoDivGrande);

    //ahora creamos un for para cada elemento que agarra

    for (let z = 0; z < agarrandoDivGrande.length; z++) {
        fetch(`${proxy}https://api.deezer.com/track/${parseoOficial[z]}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (datos) {
                console.log(datos);
                agarrandoDivGrande[z].innerHTML+=`
                <img class="imagen_playlist" src="${datos.album.cover_medium}"> 
                <div class="textoPlaylist">
                    <h2><a href="detail-song.html">${datos.title}</a></h2>
                    <h3><a href="detail-artist.html?idArtista=${datos.contributors[0].id}">${datos.artist.name}</a></h3>
                </div>
                <p><iframe src="${datos.preview}" width="170px" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe></p>
                `
            })
            .catch(function (error) {
                console.log('Tu error es: ' + error);
            });
        
    }

    let basura = document.querySelectorAll(".borrar")
    console.log(basura);

    for (let j = 0; j < basura.length; j++){
        basura[j].innerHTML = `
        <i id="icono" class="fas fa-trash"></i>
        `
        basura[j].addEventListener("click", function(){
            let ocultar = document.querySelectorAll(".soyTuPadre");
            ocultar[j].classList.add("ocultateWeon");

            let eliminarCancion = parseoOficial.indexOf(parseoOficial[j]);
            parseoOficial.splice(eliminarCancion,1);
            localStorage.setItem("agregar", JSON.stringify(parseoOficial));
        });
    }
      console.log(parseoOficial); 


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

