import POKEMON from './data/pokemon/pokemon.js';
import {cardIndividual,cards,filtradoPokemones, pokemonesAZ, pokemonesZA, agregarEvolucion, agregarImgNextEvolucion} from './data.js';

window.onload = () => {

/* menu */
const menu = document.getElementById('menu');
menu.addEventListener('click', () => {
     document.getElementById('menuContainer').classList.toggle('active-menu');
});

/* menu todos*/
document.querySelector(".todos").addEventListener("click", () => {
  mostrarLista(POKEMON);
});

/* menu AZ */
document.querySelector(".A-Z").addEventListener("click", () => {
  ordenarListaAZ();
});

/*menu ZA*/
document.querySelector(".Z-A").addEventListener("click", () => {
  ordenarListaZA();
});

/* filtrado por tipo */
document.querySelectorAll('.tipos').forEach(boton => {
  boton.addEventListener('click', event => {
    filterType(event.target.id);
  });
});

document.querySelector('#pokebola').addEventListener('click', ()=> {
	location.reload();
});

document.querySelector(".modal")

const mostrarTopPoke = () => {
 document.querySelector('.paginaInicio').style.display="none";
 document.querySelector('.topPokeContenedor').style.display="flex";

}
document.querySelector('#botonComenzar').addEventListener('click', mostrarTopPoke);

var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every "" seconds
}

const filterType = (type) => {
	let resultado = filtradoPokemones(POKEMON,type);
	cards(resultado);
	working();
};

const working = () => {
	document.querySelectorAll('.infoBoton').forEach(boton => {
  		boton.addEventListener('click', event => {
  			//let nombre = document.getElementById("nombrePokemon").innerText;
    		pruebas(event.currentTarget.id);
  		});
	});
};

const ordenarListaZA = () =>{
	let resultado = pokemonesZA(POKEMON,name);
	cards(resultado);
	working();
};

const ordenarListaAZ = () => {
	let resultado = pokemonesAZ(POKEMON, name);
	cards(resultado);
	working();
};


const mostrarLista = (POKEMON) => {
	document.querySelector("#contenedor").innerHTML = '';
	document.querySelector('.paginaInicio').style.display="none"
	document.querySelector('.topPokeContenedor').style.display="none";
	cards(POKEMON);
	working();
};

const pruebas = (pok) => {
	//console.log("el id que busco es: " + pok);
	let modal = document.querySelector(".modal")
	modal.style.display = "block"
	let index = POKEMON.findIndex(function(item, i){
	  return item.id == pok
	});
	cardIndividual(index);
};

}
