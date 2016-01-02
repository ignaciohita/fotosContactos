var contactoActual;
var contactoActual;

function seleccionarContacto() {
    "use strict";

    navigator.contacts.pickContact(function (contactoSeleccionado) {
        if (contactoSeleccionado.photos && contactoSeleccionado.photos.length > 0) {
            contactoActual = contactoSeleccionado;
            document.getElementById("fotoContacto").src = contactoSeleccionado.photos[0].value;
            document.getElementById("botonCambiarFoto").disabled = false;
        } else {
            navigator.notification.alert("El contacto que has seleccionado no tiene foto");
        }
    }, function (errorContacto) {
        navigator.notification.alert("Hubo un error seleccionando el contacto");
    });
}

function cambiarFoto() {
    "use strict";

    navigator.camera.getPicture(function (imagen) {
        document.getElementById("fotoContacto").src = imagen;
        contactoActual.photos[0].value = imagen;

        contactoActual.save();
    }, function (error) {
        navigator.notification.alert("Hubo un error al tomar la foto: " + error.code);
    }, {
        targetWidth: 720,
        targetHeight: 720
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
