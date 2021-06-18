// window.addEventListener("load", function() {
//     const proxy = 'https://cors-anywhere.herokuapp.com/';
//     let apiCanciones = document.querySelectorAll(".cancion_d");
//     fetch(apiCanciones)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (datos) {
//         console.log(datos);
//         let estrella = document.querySelector(".titulo_canciones_d");
//         estrella.addEventListener("click", function () {
//             alert("Hola mundo");
//             localStorage.getItem("cancion", JSON.stringify())            
//         })
//     })
//     .catch(function (error) {
//         console.log('Tu error ess: ' + error);
//     });

// })