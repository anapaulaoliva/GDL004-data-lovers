/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import  POKEMON  from './data/pokemon/pokemon.js';
console.log (POKEMON);

window.onload = () => {
const motrarlista =() => {
  POKEMON.map((pokemon)) => {
    let card = document.createElement("div");
    const template =`
    <div class = "contenedor">
    <div class = "card">
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
document.querySelector("#menu").addEventListener("click",mostrarLista);

/*const mostrarlista = () => {

 //const todos = document.createElement ("div");
 todos.innerText = POKEMON[0].name + " " + POKEMON[0].type;
 todos.classList.add("contenedor")
 document.body.appendChild(todos);//
 
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
}*/


/*let evento = event.target.id;

import { filtradoPorTipo}    from 
export const mostrarPokemones = (tipos)=>{
  tipos.map((Pokemones)=>{
    let span = document.createElement("span");
    const template = `<div class = "card">${Pokemones.name}</div>
    <img src="${Pokemones.image}></img>"`
    span.innerHTML = template;
    document.querySelector("").appendChild(span);
  })
}*/









//import  pokemonBytype  from './data.js';
//console.log (pokemonBytype);
//import { pokemonAll } from './data.js';
//import {filtradoPorTipo} from './data.js';
//import pokemon from './data/pokemon/pokemon.js';


//console.log(
//filtradoPorTipo(name)
//);


  
//let botonFire = document.getElementById("botonFire");
//botonFire.addEventListener("click",addElement); 

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
