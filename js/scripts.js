
function editarNombre(elemento) {
    let identificador = elemento.id;
    console.log(identificador);
    let enlaceId = document.querySelector(`#${identificador}`);
    console.log(enlaceId);
    let ubicacionNombre = enlaceId.closest(".bloqueParteDos");
    console.log(ubicacionNombre);
    let nombrePerfil = ubicacionNombre.querySelector("h1");
    console.log(nombrePerfil);
    let nombre = nombrePerfil.innerHTML;
    console.log(nombre);
}