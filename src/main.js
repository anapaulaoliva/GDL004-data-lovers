import POKEMON from './data/pokemon/pokemon.js';
import {filtradoPokemones, pokemonesAZ, pokemonesZA } from './data.js';

window.onload = () => {

/* menu */
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
     document.getElementById('menuContainer').classList.toggle('active-menu')
});

/* menu todos*/
document.querySelector(".todos").addEventListener("click", () => {
  mostrarLista(POKEMON);
});

/* menu AZ */
document.querySelector(".A-Z").addEventListener("click", () => {
  ordenarListaAZ();
});

/*menu ZA*/
document.querySelector(".Z-A").addEventListener("click", () => {
  ordenarListaZA();
});

/* filtrado por tipo */
document.querySelectorAll('.tipos').forEach(boton => {
  boton.addEventListener('click', event => {
    filterType(event.target.id);
  });
});

document.querySelector('#pokebola').addEventListener('click', ()=> {
	location.reload();
});

document.querySelector(".modal");

document.querySelector('#botonComenzar').addEventListener('click', () => {
  document.querySelector('.paginaInicio').style.display="none";
  document.querySelector('.topPokeContenedor').style.display="flex";

});
/* Fin event listeners */
/* Inicio de las funcionalidades del DOM */

 const cards = (POKEMON) => {
  document.querySelector("#contenedor").innerHTML = '';
  document.querySelector('.paginaInicio').style.display="none"
  document.querySelector('.topPokeContenedor').style.display="none";
  return POKEMON.map((pokemon) => {
    let card = document.createElement("div");
    const template = `
    <div class="card">
    <span id="nombrePokemon" style="font-size: 1.5rem; text-transform: uppercase;">${pokemon.name}</span>
    <span id="tipoPokemon" style="text-transform: uppercase; color:#BFB6BC">${pokemon.type}</span>
    <img id="imagenPokemon" src="${pokemon.img}";/>
    <span id="debilidadPokemon" hidden="hidden">${pokemon.weaknesses}</span>
    <span id="candyPokemon" hidden="hidden">${pokemon.candy}</span>
    <button id="${pokemon.id}" class = "infoBoton ${pokemon.type[0]}"><span id="infoBotonSpan">+INFO</span></button>
    </div>
    `
    card.innerHTML = template;
   document.querySelector("#contenedor").appendChild(card);

  });
}

 const cardIndividual = (pokemon) => {

    let cardInd = document.createElement("div");
    cardInd.classList.add('modal-content');

    const template = `
      <img class="imgInd ${POKEMON[pokemon].type[0]}" src="${POKEMON[pokemon].img}";/>
      <span class="nameInd">${POKEMON[pokemon].name}<hr></span>
      <div class="dentro">
      <span class="pesoInd"><span style="color: cornflowerblue">Peso:</span><br> ${POKEMON[pokemon].weight}</span><br>
      <span class="debilidadesInd"><span style="color:gold">Debilidades:</span><br> ${POKEMON[pokemon].weaknesses}</span><br>
      <span class="dulceInd"><span style="color: pink">Candy:</span><br> ${POKEMON[pokemon].candy}</span><br>
      <div class ="nextEvolution"></div>
      </div><br>
      <button class = "botonCerrar ${POKEMON[pokemon].type[0]}">&times;</button><br>
       `
    cardInd.innerHTML = template;
    document.querySelector(".modal").appendChild(cardInd);
    document.querySelector('.botonCerrar').addEventListener("click", () => {
      let modal = document.querySelector(".modal");
      modal.style.display = "none"
      let cerrar = document.querySelector('.modal-content');
      cerrar.parentNode.removeChild(cerrar);
    });
    agregarEvolucion(pokemon);
}

/*Mostrar Evolucion en la card Individual*/
const agregarEvolucion = (pokemon) => {
  if (POKEMON[pokemon].next_evolution[0] !== ""){
    const objectNextEvolution = POKEMON[pokemon].next_evolution[0];
    const nameNextEvolution = objectNextEvolution.name;
    const numNextEvolution = objectNextEvolution.num;

    let index = POKEMON.findIndex(function(item, i){
      return item.id == numNextEvolution;
    });
    const nextEvolution = document.querySelector(".nextEvolution");
    const template =`
    <span class="nextEvolution"><span style="color: green">EVOLUCIÓN:</span><br> ${nameNextEvolution}</span><br>
    <img class="nextEvolutionImg" src="${POKEMON[index].img}";/>
    `
    nextEvolution.innerHTML = template;
  }

}

const filterType = (type) => {
	let resultado = filtradoPokemones(POKEMON,type);
	cards(resultado);
	botonInfo();
};

const botonInfo = () => {
	document.querySelectorAll('.infoBoton').forEach(boton => {
  		boton.addEventListener('click', event => {
  		targetPokemon(event.currentTarget.id);
  		});
	});
};

const ordenarListaZA = () =>{
	let resultado = pokemonesZA(POKEMON,name);
	cards(resultado);
	botonInfo();
};

const ordenarListaAZ = () => {
	let resultado = pokemonesAZ(POKEMON, name);
	cards(resultado);
	botonInfo();
};


const mostrarLista = (POKEMON) => {
	document.querySelector("#contenedor").innerHTML = '';
	document.querySelector('.paginaInicio').style.display="none"
	document.querySelector('.topPokeContenedor').style.display="none";
	cards(POKEMON);
	botonInfo();
};

const targetPokemon = (target) => {
	let modal = document.querySelector(".modal");
	modal.style.display = "block";
	let index = POKEMON.findIndex(function(item, i){
	  return item.id == target;
	});
	cardIndividual(index);
};

}
