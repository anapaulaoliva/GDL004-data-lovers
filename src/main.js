import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON);
import { filtradoPokemones } from './data.js';
import { pokemonesAZ } from './data.js';
import { pokemonesZA } from './data.js';

window.onload = () => {
//const mostrarMenu = () => {
 //document.querySelector('.orderMenu').style.display="flex";

//}
//document.querySelector("#menu").addEventListener("mouseover", mostrarMenu);

/*const ocultarMenu = () => {
 let orderMenu = document.querySelector('.orderMenu').style.display="none";

}
document.querySelector(".orderMenu").addEventListener("mouseout", ocultarMenu);
*/
//funcion para que aparezca algo en el boton show
const mostrarLista = (POKEMON, evento, listaAZ, listaZA) => {
document.querySelector("#contenedor").innerHTML = '';
document.querySelector('.paginaInicio').style.display="none"
document.querySelector('.topPokeContenedor').style.display="none";
  POKEMON.map((pokemon) => {
    let card = document.createElement("div");
    const template = `
    <div class ="contenedor">
    <div class="card">
    <span style="text-transform: uppercase;">${pokemon.type}</span>
    <img src="${pokemon.img}";/>
    <button id="infoBoton" class = "infoBoton"><span id="infoBotonSpan"style="text-transform: uppercase;">${pokemon.name}</span></button>
    </div>
    </div>
    `
    card.innerHTML = template;
   document.querySelector("#contenedor").appendChild(card);
  })
};
document.querySelector(".todos").addEventListener("click", () => {
  mostrarLista(POKEMON);
});
//funcion para ordenar A-Z y Z-A

document.querySelector(".A-Z").addEventListener("click", () => {
  ordenarListaAZ();
});
const ordenarListaAZ = () => {
  let listaAZ;
  listaAZ = pokemonesAZ(POKEMON, name);
  console.log(listaAZ);
  mostrarLista(listaAZ);
};
document.querySelector(".Z-A").addEventListener("click", () => {
  ordenarListaZA();
});
const ordenarListaZA = () => {
  let listaZA;
  listaZA = pokemonesZA(POKEMON, name);
  console.log(listaZA);
  mostrarLista(listaZA);
};
//funcion para que se cree una lista que contiene los objetos

//parametro e que es el evento
document.getElementById('Bug').addEventListener('click', mostrarFiltrado);
document.getElementById('Dragon').addEventListener('click', mostrarFiltrado);
document.getElementById('Electric').addEventListener('click', mostrarFiltrado);
document.getElementById('Fighting').addEventListener('click', mostrarFiltrado);
document.getElementById('Fire').addEventListener('click', mostrarFiltrado);
document.getElementById('Flying').addEventListener('click', mostrarFiltrado);
document.getElementById('Ghost').addEventListener('click', mostrarFiltrado);
document.getElementById('Grass').addEventListener('click', mostrarFiltrado);
document.getElementById('Ground').addEventListener('click', mostrarFiltrado);
document.getElementById('Ice').addEventListener('click', mostrarFiltrado);
document.getElementById('Normal').addEventListener('click', mostrarFiltrado);
document.getElementById('Poison').addEventListener('click', mostrarFiltrado);
document.getElementById('Psychic').addEventListener('click', mostrarFiltrado);
document.getElementById('Rock').addEventListener('click', mostrarFiltrado);
document.getElementById('Water').addEventListener('click', mostrarFiltrado);

function mostrarFiltrado(e) {
  document.querySelector("#contenedor").innerHTML = ' ';
  document.querySelector('#contenedor').style.display="flex";
  document.querySelector('.topPokeContenedor').style.display="none";
//cuando se de click al event listener, se ira al elemento y obtendra el id de ese elemento.
document.querySelector('.paginaInicio').style.display="none";
const evento = e.target.id;
console.log(evento);
//ocultar la pagina de inicio al dar click a los pokemones
//guardados todos los datos filtrados
const pokemonesFiltrados = filtradoPokemones(POKEMON, evento);
console.log(pokemonesFiltrados);
//document.querySelector("#filtrado").innerHTML = ' ';
pokemonesFiltrados.map((pokemonFiltrado) => {
  let card = document.createElement("div");
  const template = `
  <div class="contenedor">
  <div class="card">
  <span style="text-transform: uppercase;">${pokemonFiltrado.name}</span>
  <span style="text-transform: uppercase;">${pokemonFiltrado.type}</span>
  <img src="${pokemonFiltrado.img}";/>
  <button id="infoBoton" class = "infoBoton"><span id="infoBotonSpan">+INFO</span></button>
  </div>
  </div>
  `
  card.innerHTML = template;
 document.querySelector("#contenedor").appendChild(card);
});
}

//funcion para boton comenzar de la pagina de Inicio.
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

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
     document.getElementById('menuContainer').classList.toggle('active-menu');
});

/*const mostrarCardInd = () => {
let cardInd = document.createElement("div");
cardInd.classList.add('cardIndividual');
const template = `
<section id="paginaCardIndividual">
<div class="cardIndividual">
  <img class="imgInd"src="${pokemon.img}";/>
  <span class="nameInd">${pokemon.name}</span>
  <span class="debilidadesInd">${pokemon.weaknesses}</span>
  <span class"dulceInd">${pokemon.candy}</span>
  <button class = "botonCerrar"><span id="botonCerrar">&times;</span></button>
</div>
<section/> `
cardInd.innerHTML = template;
document.querySelector("#paginaCardIndividual").appendChild(cardInd);
}
document.getElementById('infoBoton').addEventListener("click", mostrarCardInd);
*/

}
