//import POKEMON from './data/pokemon/pokemon.js';
import {filtradoPokemones, pokemonesAZ, pokemonesZA, pokemonesW, pokemonesH, pokemonesWw, pokemonesHh } from './data.js';
import { crearGrafica } from "./graph.js"

async function catchData() {
 const response = await fetch('https://raw.githubusercontent.com/Laboratoria/GDL004-data-lovers/master/src/data/pokemon/pokemon.json')
 const result = await response.json();
 return result;
};

window.onload = async () => {
 var POKEMON = [];
  POKEMON = (await catchData()).pokemon;

/* menu todos*/
document.querySelector("#menu").addEventListener("click", () => {
  mostrarTodos(POKEMON);
    document.querySelector('.navegadorTipos').style.display="flex";
});
/* filtrado por tipo */
document.querySelectorAll('.tipos').forEach(boton => {
  boton.addEventListener('click', event => {
    filterType(event.target.id);
  });
});

document.querySelector('#pokebola').addEventListener('click', () => {
	location.reload();
});

document.querySelector('.logotipo').addEventListener('click', () => {

    document.querySelector('.container').style.display="flex";
    document.querySelector('.paginaInicio').style.display="none";
    document.querySelector('.navegadorTipos').style.display="none";
    document.querySelector('.contenedorCards').style.display="none";
    contadorGrafica(POKEMON);

    let sort = document.querySelector('.contenedorSort') !== null;
    if (sort) {
      document.querySelector('.contenedorSort').style.display="none";
    }
  });

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
  document.querySelector(".contenedorCards").style.display="flex";
  document.querySelector(".contenedorSort").style.display="flex";
  document.querySelector(".container").style.display="none";
  document.querySelector('.paginaInicio').style.display="none";
  document.querySelector('.topPokeContenedor').style.display="none";

  return POKEMONs.map((pokemon) => {
    arregloPokemon.push(pokemon);
    let card = document.createElement("div");
    card.classList.add('card');
    const template = `
    <span id="nombrePokemon" style="font-size: 1.5rem; text-transform: uppercase;">${pokemon.name}</span>
    <span id="tipoPokemon" style="text-transform: uppercase; color:#BFB6BC">${pokemon.type}</span>
    <img id="imagenPokemon" src="${pokemon.img}";/>
    <span id="pesoPokemon" hidden="hidden">${pokemon.weight}</span>
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
    <button class="sortPesoA"><i class="material-icons">- fitness_center</i></button>
    <button class="sortPesoB"><i class="material-icons">+ fitness_center</i></button>
    <button class="sortA"><i id="sortA" class="material-icons">text_rotate_vertical</i></button>

    <button class="sortB"><i id="sortB"class="material-icons">format_bold</i></button>
    <button class="sortAlturaA"><i class="material-icons">- height</i></button>
    <button class="sortAlturaB"><i class="material-icons">+ height</i></button>

      `
  sort.innerHTML = sortemplate;
  document.querySelector(".contenedor").appendChild(sort);
  document.querySelector(".sortA").addEventListener("click", () => {
    ordenarListaAZ(arregloPokemon);
  });
  document.querySelector(".sortB").addEventListener("click", () => {
    ordenarListaZA(arregloPokemon);
  });
  document.querySelector(".sortPesoA").addEventListener("click", () => {
    ordenarListaW(arregloPokemon,1);
  });
  document.querySelector(".sortPesoB").addEventListener("click", () => {
    ordenarListaW(arregloPokemon);
  });
  document.querySelector(".sortAlturaA").addEventListener("click", () => {
    ordenarListaH(arregloPokemon,1);
  });
  document.querySelector(".sortAlturaB").addEventListener("click", () => {
    ordenarListaH(arregloPokemon);
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
        <tres>
          <span class="pesoInd" style="font-size: 2rem;">${parseFloat(POKEMON[pokemon].height)} M<br><span style="color: cornflowerblue; font-size:1rem;">Altura</span></span><br>
          <div style="visibility:hidden"> hello </div>
          <span class="alturaInd" style="font-size: 2rem;">${parseFloat(POKEMON[pokemon].weight)} KG<br><span style="color: yellowgreen; font-size:1rem;">Peso</span></span><br>
        </tres>
          <span class="debilidadesInd" style="font-size: 1.5rem;"><span style="color:gold; font-size:1rem;">Debilidades</span><br>${POKEMON[pokemon].weaknesses}</span><br>
          <span class="dulceInd"><span style="color: pink">Candy</span><br> ${POKEMON[pokemon].candy}<br></span><br></div>
        <pathEvolution>
        <span style="color: orange; font-size: 1.5em; margin-top:.5em;">PATH DE EVOLUCIÓN</span><br>
          <arrayDeEvolucion></arrayDeEvolucion>
        </pathEvolution>
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
    agregarPathEvolucion(pokemon);
}
/*Mostrar Evoluciones en la card Individual*/
const agregarPathEvolucion = (pokemon) => {

let evolutionPathArray = [];

 if("prev_evolution" in POKEMON[pokemon]){
     evolutionPathArray = evolutionPathArray.concat(POKEMON[pokemon].prev_evolution
         .map((elementArray) => {
         let found = POKEMON.filter((element) => {
             return element.name === elementArray.name;
         });
         return { "name": elementArray.name, "img": found ? found[0].img : ''};
     }));/*
     let indexPrev = POKEMON.findIndex(function(item, i){
   	  return item.id == POKEMON[pokemon].prev_evolution[0];
   	});
    console.log(POKEMON[indexPrev].name);
     */
 }
 evolutionPathArray = evolutionPathArray.concat([{
     "name": POKEMON[pokemon].name,
     "img": POKEMON[pokemon].img
 }]);

 if("next_evolution" in POKEMON[pokemon]){
     evolutionPathArray = evolutionPathArray.concat(POKEMON[pokemon].next_evolution
         .map((elementArray) => {
         let found = POKEMON.filter((element) => {
             return element.name === elementArray.name;
         });
         return { "name": elementArray.name, "img": found ? found[0].img : ''};
     }));
     /*let nexp = POKEMON[pokemon].next_evolution
     for(let j=0;j<nexp.length;j++){
       let indexNext = POKEMON.findIndex(function(item, i){
     	  return item.id == nexp[j].num;
     	});
      evolutionPathArray.push(indexNext):
      console.log(POKEMON[indexNext].img);
    }*/
 }
    //console.log(evolutionPathArray)
    let posicionUno = document.querySelector('arrayDeEvolucion');
      if (evolutionPathArray.length > 3) {
        let template =`
        <cuatro>
        <img class="pathEvolutionImg" src="${evolutionPathArray[0].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[0].name}</span><br>
        </cuatro>
        <cinco>
        <img class="pathEvolutionImg" src="${evolutionPathArray[1].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[1].name}</span><br>
        </cinco>
        <seis>
        <img class="pathEvolutionImg" src="${evolutionPathArray[2].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[2].name}</span>
        </seis>
        <siete>
        <img class="pathEvolutionImg" src="${evolutionPathArray[3].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[2].name}</span>
        </siete>
        `
        posicionUno.innerHTML = template;
      } else if (evolutionPathArray.length > 2) {
        let template = `
        <cuatro>
        <img class="pathEvolutionImg" src="${evolutionPathArray[0].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[0].name}</span><br>
        </cuatro>
        <cinco>
        <img class="pathEvolutionImg" src="${evolutionPathArray[1].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[1].name}</span><br>
        </cinco>
        <seis>
        <img class="pathEvolutionImg" src="${evolutionPathArray[2].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[2].name}</span>
        </seis>
        `
        posicionUno.innerHTML = template;
      } else if (evolutionPathArray.length == 2) {
        let template = `
        <cuatro>
        <img class="pathEvolutionImg" src="${evolutionPathArray[0].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[0].name}</span><br>
        </cuatro>
        <cinco>
        <img class="pathEvolutionImg" src="${evolutionPathArray[1].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[1].name}</span><br>
        </cinco>
        `
        posicionUno.innerHTML = template;
      } else if (evolutionPathArray.length == 1){
        let template = `
        <cuatro>
        <img class="pathEvolutionImg" src="${evolutionPathArray[0].img}"/>
        <span class="pathEvolutionName">${evolutionPathArray[0].name}</span>
        </cuatro>
        `
        posicionUno.innerHTML = template;
      }
 };

const filterType = (type) => {
	let resultado = filtradoPokemones(POKEMON,type);
	mostrarCard(resultado);
	botonInfo();

};

const botonInfo = () => {
	document.querySelectorAll('.infoBoton').forEach(boton => {
  		boton.addEventListener('click', event => {
  		targetPokemon(event.currentTarget.id,POKEMON);
  		});
	});
};

const ordenarListaW = (arreglo, quevoyahacer) => {
  for (let i=0; i<arreglo.length; i++) {
    let pesoP = parseFloat(arreglo[i]["weight"]);
    if (arreglo[i]["weight"] != pesoP) {
      arreglo[i]["weight"] = pesoP;
    }
  }
  if (quevoyahacer === 1){
    let resultado = pokemonesW(arreglo);
    mostrarCard(resultado);
    botonInfo();
  } else {
    let resultado = pokemonesWw(arreglo);
    mostrarCard(resultado);
    botonInfo();
    }
};

const ordenarListaH = (arreglo, quevoyahacer) => {
  for (let i=0; i<arreglo.length; i++) {
    let alturaP = parseFloat(arreglo[i]["height"]);
    if(arreglo[i]["height"] != alturaP) {
      arreglo[i]["height"] = alturaP;
    }
  }
  if (quevoyahacer === 1 ) {
  let resultado = pokemonesH(arreglo);
  mostrarCard(resultado);
  botonInfo();
  } else {
  let resultado = pokemonesHh(arreglo);
  mostrarCard(resultado);
  botonInfo();
  }
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


const contadorGrafica = (dataPokemon) => {

  let labels = {
    "Bug": 0,
    "Dragon": 0,
    "Electric": 0,
    "Fighting": 0,
    "Fire": 0,
    "Flying": 0,
    "Ghost": 0,
    "Grass": 0,
    "Ground": 0,
    "Ice": 0,
    "Normal": 0,
    "Poison": 0,
    "Psychic": 0,
    "Rock": 0,
    "Water": 0
  };
  for (let i=0; i < dataPokemon.length; i++) {
    for (let j=0; j < dataPokemon[i].weaknesses.length; j++) {
        switch (dataPokemon[i].weaknesses[j]){
          case "Bug": labels.Bug++; break;
          case "Dragon": labels.Dragon++; break;
          case "Electric": labels.Electric++; break;
          case "Fighting": labels.Fighting++; break;
          case "Fire": labels.Fire++; break;
          case "Flying": labels.Flying++; break;
          case "Ghost": labels.Ghost++; break;
          case "Grass": labels.Grass++; break;
          case "Ground": labels.Ground++; break;
          case "Ice": labels.Ice++; break;
          case "Normal": labels.Normal++; break;
          case "Poison": labels.Poison++; break;
          case "Psychic": labels.Psychic++; break;
          case "Rock": labels.Rock++; break;
          case "Water": labels.Water++; break;
       }
     }
   }
   crearGrafica(labels);
  //console.log(labels);
  }
}
