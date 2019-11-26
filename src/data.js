import  POKEMON  from './data/pokemon/pokemon.js';

/* Manejo de data */
export const POKEMON = () => {
  return 'POKEMON';
};

export const filtradoPorTipo = (POKEMON,x) =>{
  return POKEMON.filter((Pokemones){
  if(Pokemones.type.indexOf(x) !== -1){
    return true;
  }
});
}


// esta es una función de ejemplo
//import pokemon from './data/pokemon/pokemon.js';

//export const pokemonBytype = pokemon.filter((pokemones) => {
//return pokemones.type == 'Fire';
//});

//function filtradoPorTipo(){

//let arr = [];
//for (let i =0; i<POKEMON.length;i++){
//arr.push(POKEMON[i].name);    
//}

//return arr;
//}

//export{ filtradoPorTipo};



//export default{};