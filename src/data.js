
import POKEMON from './data/pokemon/pokemon.js';

export const cards = (POKEMON) => {
  document.querySelector("#contenedor").innerHTML = '';
  document.querySelector('.paginaInicio').style.display="none"
  document.querySelector('.topPokeContenedor').style.display="none";
  return POKEMON.map((pokemon) => {
    let card = document.createElement("div");
    const template = `
    <div class="card">
    <span id="nombrePokemon" style="text-transform: uppercase;">${pokemon.name}</span>
    <span id="tipoPokemon" style="text-transform: uppercase;">${pokemon.type}</span>
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

export const cardIndividual = (pokemon) => {
  console.log(pokemon)
    let cardInd = document.createElement("div");
    cardInd.classList.add('modal-content');
    const objectNextEvolution = POKEMON[pokemon].next_evolution[0];
    console.log(objectNextEvolution.num);
    const infoNextEvolution = POKEMON[objectNextEvolution.num];
    console.log(infoNextEvolution);
    //const objectImgNextEvolution = POKEMON[pokemon].next_evolution[0];
    const template = `
      <img class="imgInd ${POKEMON[pokemon].type[0]}" src="${POKEMON[pokemon].img}";/>
      <span class="nameInd">${POKEMON[pokemon].name}<hr></span>
      <div class="dentro">
      <span class="pesoInd"><span style="color: cornflowerblue">Peso:</span><br> ${POKEMON[pokemon].weight}</span><br>
      <span class="debilidadesInd"><span style="color:gold">Debilidades:</span><br> ${POKEMON[pokemon].weaknesses}</span><br>
      <span class="dulceInd"><span style="color: pink">Candy:</span><br> ${POKEMON[pokemon].candy}</span><br>
      <span class="nextEv"><span style="color: green">EVOLUCION:</span><br> ${objectNextEvolution.name}</span><br>
      <span class="imgNextEv"></span>
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
}
export const agregarEvolucion = () => {

}
export const agregarImgNextEvolucion = () => {

}

export const filtradoPokemones = (POKEMON, evento) => {
  return POKEMON.filter((pokemones) => {
    if (pokemones.type.indexOf(evento) !== -1){
      return true;
    }
  });
}

export const pokemonesAZ = (POKEMON, name) => {
  let resultadoAZ = [];
  for (name in POKEMON) {
    if (POKEMON.hasOwnProperty(name)) {
      //console.log(POKEMON[name]);
      resultadoAZ.push(POKEMON[name]);
    }
  }
  resultadoAZ.sort(function(a,b) {
    if (a.name < b.name ) {
      return -1;
    } else if (a.name > b.name){
      return 1;
    }
    })
  .forEach(function(pokemonOrdenado){
    return pokemonOrdenado;
  });
  //console.log(resultadoAZ);
  return resultadoAZ;
}

export const pokemonesZA = (POKEMON, name) => {
  let resultadoZA = [];
  for (name in POKEMON) {
    if (POKEMON.hasOwnProperty(name)){
      //console.log(POKEMON[name]);
      resultadoZA.push(POKEMON[name]);
    }
  }
  resultadoZA.sort(function(a,b) {
    if (a.name > b.name ) {
      return -1;
    } else if (a.name < b.name){
      return 1;
    }
  })
  .forEach(function(pokemonOrdenado){
    return pokemonOrdenado;
  });
  //console.log(resultadoZA);
 return resultadoZA;
}
