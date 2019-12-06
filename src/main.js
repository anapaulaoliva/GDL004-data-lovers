import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON);
import { filtradoPokemones, pokemonesAZ, pokemonesZA } from './data.js';

window.onload = () => {


const mostrarLista = (POKEMON, evento, listaAZ, listaZA) => {

  document.querySelector("#contenedor").innerHTML = '';
  document.querySelector("#contenedor").style.display = 'flex';
  document.querySelector('.paginaInicio').style.display="none"
  document.querySelector('.topPokeContenedor').style.display="none";

  POKEMON.map((pokemon) => {
    let card = document.createElement("div");
    const template = `
    <div class ="contenedor">
    <div class="card">
    <span style="text-transform: uppercase;">${pokemon.name}</span>
    <span style="text-transform: uppercase;">${pokemon.type}</span>
    <img src="${pokemon.img}";/>
    <button id="infoBoton" class = "infoBoton"><span id="infoBotonSpan">+INFO</span></button>
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

//funciones sort

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
  document.querySelector('.paginaInicio').style.display="none";

  const evento = e.target.id;
  //console.log(evento);

  const pokemonesFiltrados = filtradoPokemones(POKEMON, evento);
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
  <button id="infoBoton" class = "infoBoton"><span id="infoBotonSpan">+INFO</span></button>
  </div>
  </div>
  `
  card.innerHTML = template;

  document.querySelector("#contenedor").appendChild(card);
  document.getElementById('infoBoton').addEventListener("click", mostrarCardInd);

});

}

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

//menu desplegable

const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
     document.getElementById('menuContainer').classList.toggle('active-menu');
});

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


}
