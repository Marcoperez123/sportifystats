function validateUsuario() {
    var usuario = $("#usuario").val().trim();
    var contrasena = $("#contrasena").val().trim();
    var nivel = $("#nivel").val().trim();
    var activo = $("#activo").prop("checked") ? 1 : 0;
    var isValid = true;
    var equipo = $("#equipo").val().trim();

    console.log(equipo)

    if (usuario === "") {
        $("#usuario").addClass("is-invalid");
        isValid = false;
    } else {
        $("#usuario").removeClass("is-invalid");
    }

    if (contrasena === "") {
        $("#contrasena").addClass("is-invalid");
        isValid = false;
    } else {
        $("#contrasena").removeClass("is-invalid");
    }

    if (nivel === "") {
        $("#nivel").addClass("is-invalid");
        isValid = false;
    } else {
        $("#nivel").removeClass("is-invalid");
    }

    if (equipo === "") {
        $("#equipo").addClass("is-invalid");
        isValid = false;
    } else {
        $("#equipo").removeClass("is-invalid");
    }

    if (!isValid) {
        alert("Por favor, complete todos los campos resaltados.");
        return false;
    }

    // Si los datos son válidos, enviar el formulario vía AJAX
    $.ajax({
        type: "POST",
        url: "php/usuario.php",
        data: {
            usuario: usuario,
            contrasena: contrasena,
            nivel: nivel,
            activo: activo,
            equipo: equipo
        },
        dataType: "json",
        success: function(response) {
            if (response.success) {
                console.log(response)
                alert("El usuario ha sido insertado correctamente con el ID: " + response.ultimo_id_insertado);
                // Limpiar el formulario o realizar otras acciones necesarias
                window.location.replace("principal.html");
            } else {
                console.log(response)
                alert("Error: " + response.message);
            }
        },
        error: function(xhr, status, error) {
            console.log(error)
            alert("Error al enviar los datos del formulario: " + error);
        }
    });

    return false; // Evita que el formulario se envíe de manera tradicional
}
