import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON);
import { filtradoPokemones } from './data.js';

window.onload = () => {
//funcion para que aparezca algo en el boton show
const mostrarLista = () => {
  POKEMON.map((pokemon) => {
    let card = document.createElement("div");
    const template = `
    <div class ="contenedor">
    <div class="card">
    <span>${pokemon.name}</span>
    <span>${pokemon.type}</span>
    <img src="${pokemon.img}";/>
    <button class = "infoBoton">+INFO</button>
    </div>
    </div>
    `
    card.innerHTML = template;
   document.querySelector("#contenedor").appendChild(card);
  })
};
document.querySelector("#menu").addEventListener("click", mostrarLista);
//funcion para que se cree una lista que contiene los objetos
const tipos = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ice',
'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water'];
tipos.forEach(addEventListener('click', mostrarFiltrado));
/*
document.getElementById("Bug").addEventListener("click", mostrarFiltrado);
document.getElementById("Dark").addEventListener("click", mostrarFiltrado);
document.getElementById("Dragon").addEventListener("click", mostrarFiltrado);
document.getElementById("Electric").addEventListener("click", mostrarFiltrado);
document.getElementById("Fairy").addEventListener("click", mostrarFiltrado);
document.getElementById("Fighting").addEventListener("click", mostrarFiltrado);
document.getElementById("Fire").addEventListener("click", mostrarFiltrado);
document.getElementById("Flying").addEventListener("click", mostrarFiltrado);
document.getElementById("Ghost").addEventListener("click", mostrarFiltrado);
document.getElementById("Grass").addEventListener("click", mostrarFiltrado);
document.getElementById("Ground").addEventListener("click", mostrarFiltrado);
document.getElementById("Ice").addEventListener("click", mostrarFiltrado);
document.getElementById("Normal").addEventListener("click", mostrarFiltrado);
document.getElementById("Poison").addEventListener("click", mostrarFiltrado);
document.getElementById("Psychic").addEventListener("click", mostrarFiltrado);
document.getElementById("Rock").addEventListener("click", mostrarFiltrado);
document.getElementById("Steel").addEventListener("click", mostrarFiltrado);
document.getElementById("Water").addEventListener("click", mostrarFiltrado);
*/
//parametro e que es el evento
function mostrarFiltrado(e) {
//cuando se de click al event listener, se ira al elemento y obtendra el id de ese elemento.
const x = e.target.id;
console.log(x);
//guardados todos los datos filtrados
const pokemonesFiltrados = filtradoPokemones(POKEMON, x);
console.log(pokemonesFiltrados);

pokemonesFiltrados.map((mostrarFiltrado) => {
  let card = document.createElement("div");
  const template = `
  <div class="filtrado">
  <div class="card">
  <span>${mostrarFiltrado.name}</span>
  <span>${mostrarFiltrado.type}</span>
  <img src="${mostrarFiltrado.img}";/>
  <button class = "infoBoton">+INFO</button>
  </div>
  </div>
  `
  card.innerHTML = template;
 document.querySelector("#filtrado").appendChild(card);
});
}
}
