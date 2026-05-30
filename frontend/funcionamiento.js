const boton = document.querySelector("#boton1");
const audio_queen = document.querySelector("#audio-queen");

boton.addEventListener("click", function() {
    // ¿La canción está pausada?
    if (audio_queen.paused) {
        audio_queen.play(); // SÍ está pausada, entonces dale Play
        console.log("Reproduciendo música...");
    } else {
        audio_queen.pause(); // NO está pausada (está sonando), entonces paúsala
        console.log("Música pausada.");
    }
});