//1.archivo `isVowel.js`
//2.export a isVowel.spec.js
//3.Implementamos la funcionalidad esperada en isVowel()

const isVowel = function (char) {
  return ['b', 'e', 'i','o','u'].indexOf(char) > -1;
};
//utilizar modulos import y export ES6
module.exports = isVowel;
