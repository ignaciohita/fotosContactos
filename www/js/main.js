var contactoActual;

function seleccionarContacto() {
    "use strict";

    navigator.contacts.pickContact(function (contactoSeleccionado) {
        if (contactoSeleccionado.photos && contactoSeleccionado.photos.length > 0) {
            contactoActual = contactoSeleccionado;
            document.getElementById("fotoContacto").src = contactoSeleccionado.photos[0].value;
        } else {
            navigator.notification.alert("El contacto que has seleccionado no tiene foto");
        }
    }, function (errorContacto) {
        navigator.notification.alert("Hubo un error seleccionando el contacto");
    });
}

function dispositivoListo() {
    "use strict";

    document.getElementById("botonSeleccionarContacto").disabled = false;

}

function inicioAplicacion() {
    "use strict";

    var i,
        nodePosition,
        linkPosition;

    document.addEventListener("deviceready", dispositivoListo);
}
