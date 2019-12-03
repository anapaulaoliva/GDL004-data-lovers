
//importar la data
import POKEMON from './data/pokemon/pokemon.js';
//construir la funcion de filtrado que se exportara despues
// declarar que se exportara
// nombre de la funcion
// parametro de JSON . filter
//entre parentesis el callback, que es la funcion que nos
//permitira hacer algo con el filtrado por medio de parametros
//parametro pokemones
//callback retorna verdadero o falso

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
      console.log(POKEMON[name]);
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
  console.log(resultadoZA);
 return resultadoZA;
}
