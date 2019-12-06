
import { filtradoPokemones, pokemonesAZ, pokemonesZA } from "../src/data";
import POKEMON from "../src/data/pokemon/pokemon.js";

describe('filtradoPokemones', () => {

  it('debería ser una función', () => {
    expect(typeof filtradoPokemones).toBe('function');
  });
  it('debería retornar el filtradoPokemones con type: Grass', () => {
    const pokemones = filtradoPokemones(POKEMON, "Grass");
    expect(pokemones[0].type[0]).toBe('Grass');
  });

});

describe('pokemonesAZ', () => {
  it('debería ser una función', () => {
    expect(typeof pokemonesAZ).toBe('function');
  });
  it('debería retornar el primer pokemon con primer letra: A', () => {
    let resultadoAZ = pokemonesAZ(POKEMON, name);
    expect(resultadoAZ[0].name).toBe('Abra');
  });
});

describe('pokemonesZA', () => {
  it('debería ser una función', () => {
    expect(typeof pokemonesZA).toBe('function');
  });
  it('debería retornar el último pokemon con primer letra: Z', () => {
    let resultadoZA = pokemonesZA(POKEMON, name);
    expect(resultadoZA[0].name).toBe('Zubat');
  });
});
