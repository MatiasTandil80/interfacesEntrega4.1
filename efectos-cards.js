// Seleccionamos todas las cards
const cards = document.querySelectorAll('.card');

// Añadimos un "listener" para el evento scroll
window.addEventListener('scroll', function() {
    // Verificamos si el desplazamiento vertical supera los 1400 píxeles
    if (window.scrollY > 1400) {
        // Aquí hacemos que las cartas aparezcan
        cards.forEach((card, index) => {
            // Aumentamos el tiempo de aparición para cada carta
            setTimeout(() => {
                card.classList.add('visible'); // Agregamos la clase visible para animarla
                //console.log(`La carta ${index + 1} debería aparecer.`);
            }, index * 200); // Aparece con un retraso de 300 ms por carta
        });
    }else{
        cards.forEach((card, index) => {
            if(card.classList.contains('visible'))
                card.classList.remove('visible'); // 
               
        });
    }
});
