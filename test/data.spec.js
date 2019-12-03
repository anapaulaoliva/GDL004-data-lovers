// importamos la función `example`
import POKEMON from "../src/data/pokemon/pokemon.js";

describe('POKEMON', () => {

  it('debería ser una función', () => {
    expect(typeof POKEMON).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });

});
