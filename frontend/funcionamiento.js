const reproductor = document.querySelector("#reproductor-principal");
const filaCancion = document.querySelector(".track-row");

// 1. Detectamos el clic en tu fila del HTML
filaCancion.addEventListener("click", function() {
    
    // 2. Llamamos al PHP
    fetch('backend/datos.php')
        .then(respuesta => respuesta.json())
        .then(datos => {
            
            // Si PHP nos mandó un error de base de datos, lo mostramos
            if(datos.error) {
                console.error(datos.error);
                return;
            }

            // 3. Le pasamos la URL que encontró PHP al reproductor
            reproductor.src = datos.url;
            reproductor.play();
            console.log("¡Éxito! Reproduciendo desde la BD: " + datos.url);
            
        })
        .catch(error => {
            console.error("Sigue saliendo HTML en vez de JSON:", error);
        });
});