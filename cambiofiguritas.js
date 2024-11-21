let pantalla1Original = document.getElementById('pantalla-1');

let imagenOriginal1 = pantalla1Original.src;  // Imagen original para pantalla1

let imagen1 ='elementos/FOTO1.png';              // Nueva imagen para alternar
let imagen2 = 'elementos/FOTO2.png';             // Nueva imagen para alternar
let imagen3 = 'elementos/FOTO3.png';              // Nueva imagen para alternar

let imagenes = [imagenOriginal1, imagen1,imagen2,imagen3];
let activoTemp = false;

    // Evento de scroll
  // Evento de scroll
  window.addEventListener('scroll', function() {
    let i = 0;
       //console.log("scroll Y FIGURITAS: "+window.scrollY);
        if((window.scrollY>700)&&(window.scrollY < 2550)){
            //console.log("ESTOY EN CAMBIO DE FIGURITAS");
           
            //console.log("I "+ imagenes.length);
            // Alternar imagen de pantalla1 cada 3 segundos
            if(!activoTemp){
                    let interval1 = setInterval(() => {
                        if (i<imagenes.length) {
                            pantalla1Original.src = imagenes[i];  // Cambia a la foto1
                            //console.log("IF "+ i);
                            i++;
                        } else{
                            //  console.log("ELSE "+ i);
                            i = 0;
                        }
                        activoTemp = true;
                        // Cambia el estado de toggle (true <=> false)
                    }, 2000); // 3000 ms = 3 segundos
                    
                }
            activoTemp = true;               

                }
    });