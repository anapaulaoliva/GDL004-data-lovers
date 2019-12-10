
import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON.find(item => 1 item.id));
import { cards, filtradoPokemones, pokemonesAZ, pokemonesZA } from './data.js';

window.onload = () => {
  /**************menu desplegable**********/
  const menu = document.getElementById('menu');
  menu.addEventListener('click', () => {
       document.getElementById('menuContainer').classList.toggle('active-menu');
  });
  /************impresion general*************/
document.querySelector(".todos").addEventListener("click", genera);

document.getElementById('Bug').addEventListener('click', genera);
document.getElementById('Dragon').addEventListener('click', genera);
document.getElementById('Electric').addEventListener('click', genera);
document.getElementById('Fighting').addEventListener('click', genera);
document.getElementById('Fire').addEventListener('click', genera);
document.getElementById('Flying').addEventListener('click', genera);
document.getElementById('Ghost').addEventListener('click', genera);
document.getElementById('Grass').addEventListener('click', genera);
document.getElementById('Ground').addEventListener('click', genera);
document.getElementById('Ice').addEventListener('click', genera);
document.getElementById('Normal').addEventListener('click', genera);
document.getElementById('Poison').addEventListener('click', genera);
document.getElementById('Psychic').addEventListener('click', genera);
document.getElementById('Rock').addEventListener('click', genera);
document.getElementById('Water').addEventListener('click', genera);

function genera(e) {

  document.querySelector("#contenedor").innerHTML = ' ';
  document.querySelector('#contenedor').style.display="flex";
  document.querySelector('.topPokeContenedor').style.display="none";
  document.querySelector('.paginaInicio').style.display="none";

  const evento = e.target.id;
  //console.log(evento);

  const pokemonesFiltrados = filtradoPokemones(POKEMON, e.target.id);
   //console.log(pokemonesFiltrados);
  pokemonesFiltrados.map((pokemonFiltrado) => {
  let card = document.createElement("div");
  const template = `
  <div class="contenedor">
  <div class="card">
  <span id="nombrePokemon" style="text-transform: uppercase;">${pokemonFiltrado.name}</span>
  <span id="tipoPokemon" style="text-transform: uppercase;">${pokemonFiltrado.type}</span>
  <img id="imagenPokemon" src="${pokemonFiltrado.img}";/>
  <span id="debilidadPokemon" hidden="hidden">${pokemonFiltrado.weaknesses}</span>
  <span id="candyPokemon" hidden="hidden">${pokemonFiltrado.candy}</span>
  <button id="infoBoton" class = "infoBoton"><span id="id=${pokemonFiltrado.id}" class="infoBotonSpan" {
    constructor() {

    }
  }>+INFO</span></button>
  </div>
  </div>
  `
  card.innerHTML = template;

  document.querySelector("#contenedor").appendChild(card);
  document.getElementById('infoBoton').addEventListener("click", (e) => {

   console.log("El id es: " + e.target.id);

  });

});

}


}

/*
   document.querySelector(".A-Z").addEventListener("click", () => {
   ordenarListaAZ();
});

const ordenarListaAZ = () => {
  let listaAZ;
  listaAZ = pokemonesAZ(POKEMON, name);
  //console.log(listaAZ);
  mostrarLista(listaAZ);
};

  document.querySelector(".Z-A").addEventListener("click", () => {
  ordenarListaZA();
});

const ordenarListaZA = () => {
  let listaZA;
  listaZA = pokemonesZA(POKEMON, name);
  //console.log(listaZA);
  mostrarLista(listaZA);
};
*/
/*
//cards

const mostrarCardInd = () => {

  let imagen = document.getElementById("imagenPokemon").src;
  let nombre = document.getElementById("nombrePokemon").innerText;
  let debilidad = document.getElementById("debilidadPokemon").innerText;
  let candy = document.getElementById("candyPokemon").innerText;
  let tipo = document.getElementById("tipoPokemon").innerText;

  let cardInd = document.createElement("div");
  cardInd.classList.add('cardIndividual');
  const template = `
  <section id="paginaCardIndividual">
  <div class="cardIndividual">
  <img class="imgInd" src="${imagen}";/><br>
  <span class="nameInd">${nombre}</span><br><br>
  <span class="debilidadesInd">Debilidad: ${debilidad}</span><br><br>
  <span class"dulceInd">Dulce:${candy}</span><br><br>
  <button class = "botonCerrar"><span id="botonCerrar">&times;</span></button><br>
  </div>
  <section/> `
  cardInd.innerHTML = template;

   document.querySelector("#muestraIndividual").appendChild(cardInd);
   document.querySelector('.botonCerrar').addEventListener("click", () => {

    let cerrar = document.querySelector('.cardIndividual');
    cerrar.parentNode.removeChild(cerrar);

   });

   }
   */
   /*
   //main page

   const mostrarTopPoke = () => {
    document.querySelector('.paginaInicio').style.display="none";
    document.querySelector('.topPokeContenedor').style.display="flex";

   }

    document.querySelector('#botonComenzar').addEventListener('click', mostrarTopPoke);

   const paginaInicio = () => {
     document.querySelector('.paginaInicio').style.display="flex";
     document.querySelector('.general-flex-container').style.display="flex";
     document.querySelector('.sub-flex-container').style.display="flex";
     document.querySelector('.topPokeContenedor').style.display="none";
     document.querySelector('#contenedor').style.display="none";

   }

   document.querySelector('#pokebola').addEventListener('click', paginaInicio);

   //slideshow

   var slideIndex = 0;
   showSlides();

   function showSlides() {
     let i;
     let slides = document.getElementsByClassName("mySlides");
     let dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
     setTimeout(showSlides, 4000); // Change image every "" seconds
   }
   */
