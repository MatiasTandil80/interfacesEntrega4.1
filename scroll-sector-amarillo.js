let videoYoutube = document.getElementById('pantalla-5');
let muñecoAmarillo = document.getElementById('personaje-amarillo-mano-levantada');

window.addEventListener('scroll', function() {
    //console.log("scroll: " + window.scrollY);

    // Verificamos si el scroll está dentro del rango especificado
    if (window.scrollY > 9200 && window.scrollY < 10200) {
        // Si está dentro del rango, aplicamos la transformación
        videoYoutube.style.transform = 'translateY(' + (-window.scrollY * 0.03) + 'px)' +
                                      'translateX(' + (-window.scrollY * 0.01) + 'px)';
        muñecoAmarillo.style.transform = 'translateX(' + (window.scrollY * 0.03) + 'px)';
    } else {
        // Si el scroll está fuera del rango, restablecemos las transformaciones a su estado original
        videoYoutube.style.transform = 'translateY(0px) translateX(0px)';
        muñecoAmarillo.style.transform = 'translateX(0px)';
    }
});
