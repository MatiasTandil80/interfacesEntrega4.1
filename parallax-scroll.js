// Tomamos los elementos del parallax del .hero
const arbol1 = document.getElementById("arbol-1");
const arbol2 = document.getElementById("arbol-2");
const arbol3 = document.getElementById("arbol-3");

const rojo = document.getElementById("personaje-rojo-saltando");
const naranja = document.getElementById("personaje-naranja-saltando");
const amarillo = document.getElementById("personaje-amarillo");

//const telaraña_derecha = document.getElementById("hero-telaraña-derecha");


// Elemento del header "titulo"
const logo_central = document.getElementById("logo-central");

document.onscroll = () => { 
    // Tomamos cuanto se escrolleo
    let y = window.scrollY;
    
    if(y == 0){
      // En caso de el scroll sea nulo, se vuelve el titulo al tamaño grande
      logo_central.classList.remove("achicar");
    }else if(y > 0){
      //  console.log("Pos de y: "+y);
      // En caso de el scroll NO sea nulo, se achica el titulo
      logo_central.classList.add("achicar");
    }


  arbol1.style.left = `${0 - (y * 0.2)}px`; 
  arbol2.style.left = `${881 + (y * 0.07)}px`; 
  arbol3.style.left = `${1080 + (y * 0.03)}px`; 

}