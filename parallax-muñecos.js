// Seleccionamos el personaje y el contenedor
let personajeRojo = document.getElementById('personaje-rojo-saltando');
let personajeNaranja = document.getElementById('personaje-naranja-saltando');
let personajeAmarillo = document.getElementById('personaje-amarillo');

let cartel1 = document.getElementById('cartel-1');
let cartel2 = document.getElementById('cartel-2');
let pantalla1 = document.getElementById('pantalla-1');

let personajeVerde = document.getElementById('personaje-verde');
let personajeCeleste = document.getElementById('personaje-celeste');

let contenedorTotal = document.getElementById('contenedor-total');
let contenedorRect = contenedorTotal.getBoundingClientRect();

let rectCartel1 = cartel1.getBoundingClientRect();
let rectCartel2 = cartel2.getBoundingClientRect();
let rectPantalla1 = pantalla1.getBoundingClientRect();

let rectVerde = personajeVerde.getBoundingClientRect();
let rectCeleste = personajeCeleste.getBoundingClientRect();

// Esperamos a que termine la animación
personajeAmarillo.addEventListener('animationend', function() {
    // Obtener las coordenadas del personaje después de la animación
    let rectRojo = personajeRojo.getBoundingClientRect();
    let rectNaranja = personajeNaranja.getBoundingClientRect();
    let rectAmarillo = personajeAmarillo.getBoundingClientRect();
  
    // Calculamos las coordenadas iniciales del personaje respecto al contenedor
    let initialLeftRojo = rectRojo.left - contenedorRect.left;
    let initialTopRojo = rectRojo.top - contenedorRect.top;

    let initialLeftNaranja = rectNaranja.left - contenedorRect.left;
    let initialTopNaranja = rectNaranja.top - contenedorRect.top;

    let initialLeftAmarillo = rectAmarillo.left - contenedorRect.left;
    let initialTopAmarillo = rectAmarillo.top - contenedorRect.top;
    
    
    // Obtenemos el tamaño inicial del personaje
    let initialWidthRojo = rectRojo.width;
    let initialHeightRojo = rectRojo.height;

    let initialWidthNaranja = rectNaranja.width;
    let initialHeightNaranja = rectNaranja.height;

    let initialWidthAmarillo = rectAmarillo.width;
    let initialHeightAmarillo = rectAmarillo.height;

   
        // Evento de scroll
        window.addEventListener('scroll', function() {
           
                if(window.scrollY < 950){
                  
                    // Asegurarse de que las coordenadas iniciales estén definidas antes de mover
                    if (initialLeftRojo !== undefined && initialTopRojo !== undefined) {
                        // Calcula el desplazamiento en diagonal basado en el scroll
                        let deltaXRojo = window.scrollY * 0.19;  // Factor de movimiento horizontal
                        let deltaYRojo = window.scrollY * 0.09; // Factor de movimiento vertical

                        let deltaXNaranja = window.scrollY * 0.001;  // Factor de movimiento horizontal
                        let deltaYNaranja = window.scrollY * 0.09; // Factor de movimiento vertical

                        let deltaXAmarillo = window.scrollY * 0.1;  // Factor de movimiento horizontal
                        let deltaYAmarillo = window.scrollY * 0.09; // Factor de movimiento vertical

                        // Calcula el nuevo tamaño (escala) en función del scroll
                        let scale = 1 + window.scrollY * 0.0005;  // Factor de escala en función del scroll
                        let newWidthRojo = initialWidthRojo * scale;
                        let newHeightRojo = initialHeightRojo * scale;

                        let newWidthNaranja = initialWidthNaranja * scale;
                        let newHeightNaranja = initialHeightNaranja * scale;

                        let newWidthAmarillo = initialWidthAmarillo * scale;
                        let newHeightamarillo = initialHeightAmarillo * scale;

                        // Actualiza la posición del personaje usando las coordenadas iniciales
                        personajeRojo.style.left = (initialLeftRojo - deltaXRojo) + 'px';  // Restamos deltaX para mover a la izquierda
                        personajeRojo.style.top = (initialTopRojo + deltaYRojo) + 'px';    // Sumamos deltaY para mover hacia abajo

                        personajeNaranja.style.left = (initialLeftNaranja + deltaXNaranja) + 'px';  // Restamos deltaX para mover a la izquierda
                        personajeNaranja.style.top = (initialTopNaranja + deltaYNaranja) + 'px';    // Sumamos deltaY para mover hacia abajo

                        personajeAmarillo.style.left = (initialLeftAmarillo + deltaXAmarillo) + 'px';  // Restamos deltaX para mover a la izquierda
                        personajeAmarillo.style.top = (initialTopAmarillo + deltaYAmarillo) + 'px';    // Sumamos deltaY para mover hacia abajo

                        // Aplica el cambio de tamaño (escala)
                        personajeRojo.style.width = newWidthRojo + 'px';  // Cambiar el ancho
                        personajeRojo.style.height = newHeightRojo + 'px';  // Cambiar la altura

                        personajeNaranja.style.width = newWidthNaranja + 'px';  // Cambiar el ancho
                        personajeNaranja.style.height = newHeightNaranja + 'px';  // Cambiar la altura

                        personajeAmarillo.style.width = newWidthAmarillo + 'px';  // Cambiar el ancho
                        personajeAmarillo.style.height = newHeightamarillo + 'px';  // Cambiar la altura
                    }
                }



                if((window.scrollY > 900)&&(window.scrollY < 2050)){

                    // Función para verificar si el elemento está visible en el viewport
                   
                    
                        cartel1.style.opacity = 1; // Aseguramos que el elemento se haga visible
                        cartel1.style.transform = 'scale('+ 1 + (window.scrollY * 0.02) +'%)'; // Aplica la animación de transform
                        cartel2.style.transform = 'scale('+ 1 + (window.scrollY * 0.02) +'%)'; // Aplica la animación de transform
                        personajeCeleste.style.transform = 'translateX(' + window.scrollY * 0.03 + 'px)';
                        personajeVerde.style.transform = 'translateX('+ (- window.scrollY * 0.08) + 'px)';
                        pantalla1.style.transform = 'scale('+ 1 + (window.scrollY * 0.015) +'%)';
                        
                        
                        console.log("Ejecutó el scale");          

                }


        });


});