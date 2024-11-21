/**
 * Archivo js el cual se encarga de los eventos por precionar el boton hamburguesa
 */ 

// Le quitamos la posibilidad al usuario de arrastrar imagenes y que salga una copia transparente
document.querySelectorAll("img").forEach(img => img.setAttribute("draggable", false));

// Seleccionamos los elementos
const boton = document.getElementById("btn-hamburguesa");
const elementos_nav = document.querySelectorAll("#navbar li");
const navBar = document.querySelector("#navbar");


// Cuando el usuario clickee el boton hamburguesa
boton.addEventListener("click", () => {
  // Agregamos/quitamos la clase "btn-click" 
  // la cual permite realizar la transicion de las barras del boton hamburguesa 
 
  boton.classList.toggle("btn-click");
   
  // Por cada elemento agregamos/quitamos la clase "showElement" 
  // que realiza la transicion de mover en el eje x cada item
  elementos_nav.forEach(elemento => elemento.classList.toggle("showElement"));
});

