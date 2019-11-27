import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON);
import { filtradoPokemones } from './data.js';

window.onload = () => {
const mostrarMenu = () => {
 let orderMenu = document.querySelector('.orderMenu').style.display="flex";

}
document.querySelector("#menu").addEventListener("click", mostrarMenu);
//funcion para que aparezca algo en el boton show
const mostrarLista = () => {
document.querySelector("#contenedor").innerHTML = '';
document.querySelector('.topPokeContenedor').style.display="none";
  POKEMON.map((pokemon) => {
    let card = document.createElement("div");
    const template = `
    <div class ="contenedor">
    <div class="card">
    <span style="text-transform: uppercase;">${pokemon.name}</span>
    <span style="text-transform: uppercase;">${pokemon.type}</span>
    <img src="${pokemon.img}";/>
    <button class = "infoBoton"><span id="infoBotonSpan">+INFO</span></button>
    </div>
    </div>
    `
    card.innerHTML = template;
   document.querySelector("#contenedor").appendChild(card);
  })
};
document.querySelector(".todos").addEventListener("click", mostrarLista);
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
  document.querySelector('#contenedor').style.display="";
  document.querySelector('.topPokeContenedor').style.display="none";
//cuando se de click al event listener, se ira al elemento y obtendra el id de ese elemento.
let paginaInicio = document.querySelector('.paginaInicio');
paginaInicio.style.display="none";
const x = e.target.id;
console.log(x);
//ocultar la pagina de inicio al dar click a los pokemones
//guardados todos los datos filtrados
const pokemonesFiltrados = filtradoPokemones(POKEMON, x);
console.log(pokemonesFiltrados);
//document.querySelector("#filtrado").innerHTML = ' ';
pokemonesFiltrados.map((pokemonFiltrado) => {
  let card = document.createElement("div");
  const template = `
  <div class="filtrado">
  <div class="card">
  <span style="text-transform: uppercase;">${pokemonFiltrado.name}</span>
  <span style="text-transform: uppercase;">${pokemonFiltrado.type}</span>
  <img src="${pokemonFiltrado.img}";/>
  <button class = "infoBoton"><span id="infoBotonSpan">+INFO</span></button>
  </div>
  </div>
  `
  card.innerHTML = template;
 document.querySelector("#contenedor").appendChild(card);
});
}

//funcion para boton comenzar de la pagina de Inicio.
const mostrarTopPoke = () => {
 let paginaInicio = document.querySelector('.paginaInicio');
 let paginaTopPokemos = document.querySelector('.topPokeContenedor');

 paginaInicio.style.display="none";
 paginaTopPokemos.style.display="flex";

}
document.querySelector('#botonComenzar').addEventListener('click', mostrarTopPoke);

const paginaInicio = () => {
  let paginaInicio = document.querySelector('.paginaInicio');
  let paginaTopPokemos = document.querySelector('.topPokeContenedor');
  let contenedor =  document.querySelector('#contenedor');

  paginaInicio.style.display="flex";
  paginaTopPokemos.style.display="none";
  contenedor.style.display="none";

}
document.querySelector('#pokebola').addEventListener('click', paginaInicio);



}
