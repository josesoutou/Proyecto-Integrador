window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiCanciones = `${proxy}https://api.deezer.com/playlist/9165177722`;
    fetch(apiCanciones)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let tituloCancion1 = document.querySelectorAll('.fas fa-play');    
        for(let index = 0; index < titulo1.length; index++){
            tituloCancion1[index].addEventListener("click", function () {
                tituloCancion1 = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/9165177722" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
            })
        }    
    })
    .catch(function (error) {
        console.log('Tu error ess: ' + error);
    });

})