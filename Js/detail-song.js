window.addEventListener("load", function() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiCanciones = `${proxy}https://api.deezer.com/playlist/9165177722`;
    fetch(apiCanciones)
    .then(function (response) {
        return response.json();
    })
    .then(function (datos) {
        console.log(datos);
        let insertarReproductorDeAudio = document.querySelectorAll('#estrellitafachera');
        for(let index = 0; index < insertarReproductorDeAudio.length; index++){
            insertarReproductorDeAudio[index].innerHTML = `<iframe src="${datos.tracks.data[index].preview}" width="100px" height="70" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
        }    
    })
    .catch(function (error) {
        console.log('Tu error ess: ' + error);
    });

})