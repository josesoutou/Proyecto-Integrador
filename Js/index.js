window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api = `${proxy}https://api.deezer.com/gnere/`;

    fetch(api)
    .then(function (response) {
        return response.json();

    })
    .then(function (datos){
        console.log(datos);
        //aca ponemos los let, seleccionadndo las clases y seleccionamos las
        //imagenes y crear eventos y toda la bola
        
    })
    .cath(function (error){
        console.log('tu error es:');

    });

    
    
    // const buscador = document.querySelector(".barra_buscador")
    // if (buscador == " ") {
    //     alert("Tiene que completar el campo de busqueda")
        
    //  } else {
        
    //  }

});

