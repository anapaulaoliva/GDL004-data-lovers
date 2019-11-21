import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON);

window.onload = () => {
//funcion para que aparezca algo en el boton show
const mostrarLista = () => {

  const lista = document.createElement("div");
  lista.classList.add("contenedor");

  for (let i = 0; i < POKEMON.length; i++) {

    let card = document.createElement("div");
    card.classList.add("card");
    let margenCard = document.createElement("div");
    margenCard.classList.add("margenCard");
    card.appendChild(margenCard);
  //if(POKEMON[i].type === 'water'){
    let descripcion = margenCard.innerText = POKEMON[i].name + " " + POKEMON[i].type


    let img = document.createElement("img");
    img.setAttribute('src', POKEMON[i].img);

    let info = document.createElement("button");
    info.classList.add("infoBoton");
    info.innerText = "+ INFO ";
  //}
    document.body.appendChild(lista);
    lista.appendChild(card);
    margenCard.appendChild(img);
    margenCard.appendChild(info);
  }
};
document.querySelector("#menu").addEventListener("click", mostrarLista);
}

//funcion para que se cree una lista que contiene los objetos
