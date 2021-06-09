let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let valorConsulta = queryStringObj.get("busqueda");


window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api = `${proxy}https://api.deezer.com/genre/${valorConsulta}`;

    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (datos) {
            console.log(datos);
            let popJava = document.querySelector("#popjava");
            popJava.addEventListener("click", function (e) {
                e.preventDefault(); 
                popJava.querySelector("#pp") 
            })
        })
        .catch(function (error) {
            console.log('Tu error es: ' + error);
        });

});

    
    
    // const buscador = document.querySelector(".barra_buscador")
    // if (buscador == " ") {
    //     alert("Tiene que completar el campo de busqueda")
        
    //  } else {
        
    //  }
