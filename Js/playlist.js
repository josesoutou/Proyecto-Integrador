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

let arregloPlaylistString = localStorage.getItem("favoritos");
let arregloPlaylist = JSON.parse(arregloPlaylistString);
let favoritos = [];
for (let index = 0; index < 44; index++) {
    let favoritoString = localStorage.getItem(`favoritos${index}`)
    let favorito = JSON.parse(favoritoString);
    favoritos.push(favorito);
    console.log(favoritos)
}
    

for (let i = 0; i < favoritos.length; i++) {
    console.log(favoritos[i]);
    let probando1234567 = document.querySelector(".playlist10");
    probando1234567.innerHTML += `<div class="cancionP"> <img class="imagen_playlist" src="${favoritos[i][1]}">
    <div class="textoP"><h2>${favoritos[i][0]}</h2><P></P></div></div>`
    
}
 let limpiar = document.querySelector(".limpiar");
 limpiar.addEventListener("click", function(e){
(e).preventDefault();
localStorage.removeItem("favoritos1");
})
//BUSCADOR



// window.addEventListener("load", function() {


    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    // let apiCanciones17 = `${proxy}https://api.deezer.com/playlist/9165177722`;
    // fetch(apiCanciones17)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (datos) {
    //     console.log(datos);
        
    //     let probando1234567 = document.querySelectorAll(".cancionP");
    //     let agarrandoElLocal = localStorage.getItem(`favoritos`);
    //     let convirtiendoAObjeto = JSON.parse(agarrandoElLocal);
    //     console.log(convirtiendoAObjeto);    
    //     probando1234567[0].innerHTML = `<img class="imagen_playlist" src="${convirtiendoAObjeto[1]}">
    //     <div class="textoP"><h2>${convirtiendoAObjeto[1]}</h2><P>Ariana Grande</P></div>

    //     <i class="far fa-play-circle"></i><div class="MINUTOS">4.10</div>`
    //     let agarrandoElLocal1 = localStorage.getItem(`favoritos1`);
    //     let convirtiendoAObjeto1 = JSON.parse(agarrandoElLocal1);
    //     probando1234567[1].innerHTML = `<img class="imagen_playlist" src="${convirtiendoAObjeto1[1]}">
    //     <div class="textoP"><h2>${convirtiendoAObjeto1[1]}</h2><P>Ariana Grande</P></div>

    //     <i class="far fa-play-circle"></i><div class="MINUTOS">4.10</div>`

    // })
    // .catch(function (error) {
    //     console.log('Tu error ess: ' + error);
    // });
    // })

    // console.log(agarrandoElLocal); 
// `favoritos${index}

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
// })
