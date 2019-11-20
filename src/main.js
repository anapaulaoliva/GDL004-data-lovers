import POKEMON from'./data/pokemon/pokemon.js';
console.log(POKEMON);

window.onload = () => {
//funcion para que aparezca algo en el boton show
const mostrarLista = () => {
  const lista = document.createElement("DIV");
  lista.classList.add("contenedor");
  //lista.innerText = POKEMON[0].name + POKEMON[0].img;
  //document.body.appendChild(lista);
  for (let i = 0; i < POKEMON.length; i++) {
    let card = document.createElement("DIV");
    card.classList.add("card");
  //if(POKEMON[i].type === 'water'){
    let descripcion = card.innerText = POKEMON[i].name ;
    let img = document.createElement("IMG");
    lista.appendChild(img);
    img.setAttribute('src', POKEMON[i].img);
    let info = document.createElement("BUTTON");
    info.classList.add("infoBoton");
    info.innerText = "+ INFO ";
  //}
    document.body.appendChild(lista);
    lista.appendChild(card);
    card.appendChild(img);
    card.appendChild(info);
  }
};
document.querySelector(".tipos").addEventListener("click", mostrarLista);
}

//funcion para que se cree una lista que contiene los objetos
