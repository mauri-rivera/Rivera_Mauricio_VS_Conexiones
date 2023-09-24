
function editarNombre(elemento) {
    let identificador = elemento.id;
    let enlaceId = document.querySelector(`#${identificador}`);
    let ubicacionNombre = enlaceId.closest(".bloqueParteDos");
    let nombrePerfil = ubicacionNombre.querySelector("h1");
    let nombre = nombrePerfil.innerHTML;

    let nuevoNombre = prompt("¿Qué nombre de perfil quiere actualizarlo?:", nombre);

    if (nuevoNombre == null || nuevoNombre == "") {
        nombrePerfil.innerHTML = nombre;
    } 
    else {
        nombrePerfil.innerHTML = nuevoNombre;
    }
}

function evaluarSolicitud(elemento) {
    let identificador = elemento.id;
    let estadoSolicitud = identificador.substring(0, 1);
    let enlaceUsuario = document.querySelector(`#${identificador}`);
    let ubicacionUsuario = enlaceUsuario.closest(".bloqueFilaUsuario");
    let bloqueSolicitud = enlaceUsuario.closest("#bloqueSolicitud");
    let cantidadSolicitud = bloqueSolicitud.querySelector("h3").innerHTML;

    if (estadoSolicitud === "a") {
        let estadoConexion = document.querySelector("#bloqueConexion");
        let cantidadConexion = estadoConexion.querySelector("h3").innerHTML;

        ubicacionUsuario.remove();
        cantidadSolicitud--;
        cantidadConexion++;
        bloqueSolicitud.querySelector("h3").innerHTML = cantidadSolicitud; 
        estadoConexion.querySelector("h3").innerHTML = cantidadConexion; 
    }
    else{
        ubicacionUsuario.remove();
        cantidadSolicitud--;
        bloqueSolicitud.querySelector("h3").innerHTML = cantidadSolicitud; 
    }
}