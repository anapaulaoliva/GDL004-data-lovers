
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


/*
export const filtradoPokemones = (pokemones) => {
 return POKEMON.filter((pokemones) => {
  if (pokemones.type == "Grass");
    console.log(filtradoPokemones);
});
}*/

export const filtradoPokemones = (POKEMON, x) => {
  return POKEMON.filter((pokemones) => {
    if (pokemones.type.indexOf(x) !== -1){
      return true;
    }
  });
}




/* Manejo de la e Data
 export const filterData = (data,condition) => { esta funcion filter o filtrar,
recibiria la data y nos retornaria aquellos
datos que si cumplan con la condicion.}

export sortData(data, sortBy, sortOrder): esta funcion
 sort u ordenar recibe 3 parametros.
 #primer parametro Data nos entrega los datos
 #segundo parametro sortBy nos dice con respecto
 a cual de los campos de la data se quiere ordenar
 #sortOrder indica si se quiere ordenar
 de manera ascendente o descendente.

 deben ser puras e independientes del DOM
 deben ser exportadas en el boiler plate
 para ser usadas desde el archivo
 main.js, al cargar la pagina, (window.onload)
 u cada vez que el usuario interactue */
