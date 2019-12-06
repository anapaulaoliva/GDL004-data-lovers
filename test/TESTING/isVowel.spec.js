// Archivo `isVowel.spec.js`
//Testear una funcion que dado un caracter, nos diga si es una vocal o no
// Deberia retornar true para las vocales, y false para cualquier otro.

const isVowel = require('./isVowel');
/*
console.log('deberia devolver true para la letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('deberia devolver false para la letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}*/
//asersion de igualdad para comparar dos valores, y que sean iguales
//en caso de que no, bota mensaje informativo.
/*
const assertEqual = (value, expected) => {
  if (value !== expected) {
    throw new Error(`Expected '${value}' to equal '${expected}'`);
  }
};
//Provando testeo con Mocha BDD
describe('isVowel()', () => {
  //Aqui van los tests que describen el comport de `isVowel`
  it('debería devolver true para letra a', () => {
    //aqui invocamos `isVowel()y verificamos el resultado`
    /*if(isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
    assertEqual(isVowel('a'), true);
  });

  it('debería devolver false para letra b', () => {
    /*if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
    assertEqual(isVowel('b'), false);
  });
});
*/
//reeplazar la funcion assertEqual con modulo assert de Node.js
/*
const assert = require('assert');

describe('isVowel', () => {
  it('debería devolver true para la letra a', () => {
    assert.equal(isVowel('a'), true);
  });


  it('deberia devolver false para la letra b', () => {
    assert.equal(isVowel('b'), false);
  });

});
*/
//CHAI.assert
