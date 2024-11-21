let parrafos = document.getElementById('columna-derecha');
const imagen = document.querySelector('#columna-izquierda img');

let arregloImagenes = [
  'elementos/personaje0.png', 'elementos/personaje1.png', 'elementos/personaje2.png', 'elementos/personaje3.png',
  'elementos/personaje4.png', 'elementos/personaje5.png', 'elementos/personaje6.png', 'elementos/personaje7.png',
  'elementos/personaje8.png', 'elementos/personaje9.png', 'elementos/personaje10.png'
];

let i = 0; // Índice de la imagen actual

// Obtener el rango de scroll total que afecta el cambio de imágenes
const scrollMin = 3887;
const scrollMax = 8588;

let scrollOpacidad;
window.addEventListener('scroll', function() {
  // Obtener la posición actual del scroll
  const scrollPosition = window.scrollY;


  if (scrollPosition > scrollMin && scrollPosition < scrollMax) {
    // Calcular qué imagen mostrar dependiendo de la posición del scroll
    if (scrollPosition > scrollMin && scrollPosition < 4307) {
                scrollOpacidad = 1 - ((scrollPosition - scrollMin )/420)
                i = 0;
    }        
    if (scrollPosition > 4307 && scrollPosition <= 4727) {
        scrollOpacidad = 1 - ((scrollPosition - 4307 )/420)
            i = 1;
    }
    if (scrollPosition > 4727 && scrollPosition <= 5147) {
        scrollOpacidad = 1 - ((scrollPosition - 4727 )/420)
            i = 2;
    }
    if (scrollPosition > 5147 && scrollPosition <= 5567) {
        scrollOpacidad = 1 - ((scrollPosition - 5147 )/420)
            i = 3;
    }        
    if (scrollPosition > 5567 && scrollPosition <= 5987) {
        scrollOpacidad = 1 - ((scrollPosition - 5567 )/420)
            i = 4;
    }
    if (scrollPosition > 5987 && scrollPosition <= 6407) {
        scrollOpacidad = 1 - ((scrollPosition - 5987 )/420)
            i = 5;
    }
    if (scrollPosition > 6407 && scrollPosition <= 6827) {
        scrollOpacidad = 1 - ((scrollPosition - 6407 )/420)
            i = 6;
    }        
    if (scrollPosition > 6827 && scrollPosition <= 7247) {
        scrollOpacidad = 1 - ((scrollPosition - 6827 )/420)
            i = 7;
    }
    if (scrollPosition > 7247 && scrollPosition <= 7667) {
        scrollOpacidad = 1 - ((scrollPosition - 7247 )/420)
            i = 8;
    }
    if (scrollPosition > 7667 && scrollPosition <= 8087) {
        scrollOpacidad = 1 - ((scrollPosition - 7667 )/420)
            i = 9;
    }
    if (scrollPosition > 8087 && scrollPosition <= 8600) {
        scrollOpacidad = 1 - ((scrollPosition - 8087 )/420)
            i = 10;
    }

    // Cambiar la imagen de acuerdo con el índice calculado
    imagen.src = arregloImagenes[i];
    


    // Calcular la opacidad y el zoom en función de la posición de scroll
    //let scrollRatio = (scrollPosition - scrollMin) / (scrollMax - scrollMin); // Valor entre 0 y 1

    // Aplicar opacidad (de 1 a 0)
    //let opacity = 1 - scrollRatio/2; // La opacidad disminuye mientras el scroll avanza
    imagen.style.opacity = scrollOpacidad;

    // Aplicar zoom (de 1 a 1.2)
    let zoom = 1 + scrollOpacidad * 0.20; // El zoom aumenta gradualmente de 1 a 1.2
    imagen.style.transform = `scale(${zoom})`;
  }
});
