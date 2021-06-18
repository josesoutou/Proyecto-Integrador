window.addEventListener("load", function() {
    const agarrandoElLocal = localStorage.getItem(`favoritos${index}`);
    let convirtiendoAObjeto = JSON.parse(agarrandoElLocal);
    console.log(convirtiendoAObjeto);
})
// `favoritos${index}`