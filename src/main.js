import POKEMON from './data/pokemon/pokemon.js';
import {filtradoPokemones, pokemonesAZ, pokemonesZA } from './data.js';

window.onload = () => {

/* menu todos*/
document.querySelector("#menu").addEventListener("click", () => {
  mostrarTodos(POKEMON);
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
let arregloPokemon = [];
 const mostrarCard = (POKEMONs) => {
   arregloPokemon = [];
  mostrarSort();
  //
  document.querySelector(".contenedorCards").innerHTML = '';
  document.querySelector('.paginaInicio').style.display="none"
  document.querySelector('.topPokeContenedor').style.display="none";
  //let arregloPokemon = POKEMONs.map(pokemon);
  return POKEMONs.map((pokemon) => {
    arregloPokemon.push(pokemon);
    let card = document.createElement("div");
    card.classList.add('card');
    const template = `
    <span id="nombrePokemon" style="font-size: 1.5rem; text-transform: uppercase;">${pokemon.name}</span>
    <span id="tipoPokemon" style="text-transform: uppercase; color:#BFB6BC">${pokemon.type}</span>
    <img id="imagenPokemon" src="${pokemon.img}";/>
    <span id="debilidadPokemon" hidden="hidden">${pokemon.weaknesses}</span>
    <span id="candyPokemon" hidden="hidden">${pokemon.candy}</span>
    <button id="${pokemon.id}" class = "infoBoton ${pokemon.type[0]}"><span id="infoBotonSpan">+INFO</span></button>

    `
    card.innerHTML = template;
   document.querySelector(".contenedorCards").appendChild(card);
  });
}

const mostrarSort = () => {
  var condicional = document.getElementsByClassName('contenedorSort');
  if (condicional.length > 0) {
  }else{
  let sort = document.createElement("div");
  sort.classList.add("contenedorSort");
    const sortemplate = `
    <button class="sortA"><i id="sortA" class="material-icons">text_rotate_vertical</i></button>
    <button class="sortB"><i id="sortB"class="material-icons">format_bold</i></button>
      `
  sort.innerHTML = sortemplate;
  document.querySelector(".contenedor").appendChild(sort);
  document.querySelector(".sortA").addEventListener("click", () => {
    //console.log(arregloPokemon);
    ordenarListaAZ(arregloPokemon);
  });
  document.querySelector(".sortB").addEventListener("click", () =>{
    ordenarListaZA(arregloPokemon);
  });
}

};

 const mostrarModal = (pokemon) => {

    let cardInd = document.createElement("div");
    cardInd.classList.add('modal-content');

    const template = `
      <uno>
          <img class="imgInd ${POKEMON[pokemon].type[0]}" src="${POKEMON[pokemon].img}";/><br>
          <span class="numInd">#${POKEMON[pokemon].num}</span>
          <span class="nameInd">${POKEMON[pokemon].name}</span>
          <span class="typeInd">${POKEMON[pokemon].type[0]}</span>
      </uno>
      <dos>
          <span class="pesoInd"><span style="color: cornflowerblue">Peso:</span><br> ${POKEMON[pokemon].weight}</span><br>
          <span class="debilidadesInd"><span style="color:gold">Debilidades:</span><br> ${POKEMON[pokemon].weaknesses}</span><br>
          <span class="dulceInd"><span style="color: pink">Candy:</span><br> ${POKEMON[pokemon].candy}</span><br></div>
          <nextEvolution></nextEvolution>
      </dos>
       `
    cardInd.innerHTML = template;
    document.querySelector(".modal").appendChild(cardInd);
    document.querySelector('.modal').addEventListener("click", () => {
      let modal = document.querySelector(".modal");
      modal.style.visibility = "visible"
      let cerrar = document.querySelector('.modal-content');
      modal.style.visibility = "hidden";
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
    const nextEvolution = document.querySelector("nextEvolution");
    const template =`
    <span class="nextEvolution"><span style="color: green">EVOLUCIÓN:</span><br> ${nameNextEvolution}</span><br>
    <img class="nextEvolutionImg" src="${POKEMON[index].img}";/>
    `
    nextEvolution.innerHTML = template;
  }

}

const filterType = (type) => {
	let resultado = filtradoPokemones(POKEMON,type);
	mostrarCard(resultado);
	botonInfo();

};

const botonInfo = () => {
	document.querySelectorAll('.infoBoton').forEach(boton => {
  		boton.addEventListener('click', event => {
  		targetPokemon(event.currentTarget.id);
  		});
	});
};

const ordenarListaAZ = (arreglo) => {
	let resultado = pokemonesAZ(arreglo, name);
	mostrarCard(resultado);
	botonInfo();
};

const ordenarListaZA = (arreglo) =>{
	let resultado = pokemonesZA(arreglo,name);
	mostrarCard(resultado);
	botonInfo();
};

const mostrarTodos = (POKEMON) => {
  document.querySelector(".contenedorCards").innerHTML = '';
	document.querySelector('.paginaInicio').style.display="none"
	document.querySelector('.topPokeContenedor').style.display="none";

  mostrarCard(POKEMON);
	botonInfo();

};

const targetPokemon = (target) => {
	let modal = document.querySelector(".modal");
	modal.style.visibility = "visible";
	let index = POKEMON.findIndex(function(item, i){
	  return item.id == target;
	});
	mostrarModal(index);
};
/* slider */
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
  setTimeout(showSlides, 3000); // Change image every "" seconds
};

}
