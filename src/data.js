//import POKEMON from './data/pokemon/pokemon.js';

export const filtradoPokemones = (POKEMON, evento) => {
  return POKEMON.filter((pokemones) => {
    if (pokemones.type.indexOf(evento) !== -1){
      return true;
    }
  });
}
export const pokemonesAZ = (POKEMON) => POKEMON.sort((a, b) => a.name.localeCompare(b.name));

export const pokemonesZA = (POKEMON) => POKEMON.sort((a,b) => b.name.localeCompare(a.name));

export const pokemonesW = (POKEMON) => POKEMON.sort((a, b) => {return a.weight-b.weight});

export const pokemonesWw = (POKEMON) => POKEMON.sort((a, b) => {return b.weight-a.weight});

export const pokemonesH = (POKEMON) => POKEMON.sort((a, b) => {return a.height-b.height});

export const pokemonesHh = (POKEMON) => POKEMON.sort((a, b) => {return b.height-a.height});
