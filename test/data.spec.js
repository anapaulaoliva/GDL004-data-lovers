
import { filtradoPokemones, pokemonesAZ, pokemonesZA } from "../src/data";
import POKEMON from "../src/data/pokemon/pokemon.js";

describe('filtradoPokemones', () => {

  it('debería ser una función', () => {
    expect(typeof filtradoPokemones).toBe('function');
  });


});
