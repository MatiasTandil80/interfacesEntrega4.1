const wrapper = document.getElementById("contenedor-total2");
let nube1Footer = document.getElementById('nube-1-footer');
let nube2Footer = document.getElementById('nube-2-footer');
let nube3Footer = document.getElementById('nube-3-footer');

   // Evento de scroll
   window.addEventListener('scroll', function() {
           
        if((window.scrollY > 11850)&&(window.scrollY < 14000)){
            console.log(window.scrollY);
            // Aplicamos el efecto parallax
            // Cada nube se mueve con una velocidad diferente
           
            //nube2Footer.style.transform = `translateY(-50%) translateY(${scrollPosition * 0.4}px)`; // Nube 2 se mueve con velocidad media
            //nube3Footer.style.transform = `translateY(-50%) translateY(${scrollPosition * 0.6}px)`; // Nube 3 se mueve rápidamente




        }


    });