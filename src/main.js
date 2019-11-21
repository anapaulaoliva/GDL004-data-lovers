/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import  POKEMON  from './data/pokemon/pokemon.js';
console.log (POKEMON);

window.onload = () => {

const mostrarlista = () => {
 /*const todos = document.createElement ("div");
 todos.innerText = POKEMON[0].name + " " + POKEMON[0].type;
 todos.classList.add("contenedor")
 document.body.appendChild(todos);*/
 
 const lista = document.createElement("div");
 lista.classList.add("contenedor");
 

 for (let i=0; i<POKEMON.length; i++){
     let card = document.createElement("div");
     card.classList.add("card");
     let margenCard = document.createElement("div");
     margenCard.classList.add("margenCard");
     card.appendChild(margenCard);
     let descripcion = margenCard.innerText = POKEMON[i].name + " " + POKEMON[i].type;
     let img = document.createElement ("img");
     img.setAttribute('src',POKEMON[i].img);

     let info = document.createElement("button");
     info.classList.add("infoBoton");
     info.innerText = "+ INFO";


     document.body.appendChild(lista);
     lista.appendChild(card);
     margenCard.appendChild(img);
     margenCard.appendChild(info);

 }

 

};

document.querySelector("#menu").addEventListener("click", mostrarlista);
}








//import  pokemonBytype  from './data.js';
//console.log (pokemonBytype);
//import { pokemonAll } from './data.js';
//import {filtradoPorTipo} from './data.js';
//import pokemon from './data/pokemon/pokemon.js';


//console.log(
  //  filtradoPorTipo(mi)
//);


  
//let botonFire = document.getElementById("botonFire");
//botonFire.addEventListener("click",addElement); 

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
