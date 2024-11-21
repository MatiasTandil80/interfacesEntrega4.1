// Seleccionamos la imagen
const imagenContrario = document.getElementById('personajes-asomados');

window.addEventListener('scroll', function() {
    
        if((window.scrollY>2670)&&(window.scrollY < 4000)){
           
            // Escuchamos el movimiento del mouse
            imagenContrario.addEventListener('mousemove', function(event) {
                // Obtenemos las coordenadas del mouse dentro de la imagen
                const rect = imagenContrario.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;

                // Calculamos el movimiento de la imagen en función de la posición del mouse
                const moveX = (mouseX / rect.width) * 50 - 10; // Rango de movimiento en el eje X (ajustable)
                const moveY = (mouseY / rect.height) * 30 - 10; // Rango de movimiento en el eje Y (ajustable)

                // Aplicamos el movimiento invertido en la imagen (dirección opuesta)
                imagenContrario.style.transform = `translate(${ -moveX }px, ${ -moveY }px)`;
            });
        }
    });