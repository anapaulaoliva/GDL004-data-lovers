# README.md 📝
+ Sobre POKEDX:
    * Haz tu propio fork del `repositorio.`
    * Clona tu `fork` a tu computadora.
	* Usa el comando `$ npm start` para ver la interfaz del programa en el navegador.
    * Dirígete a  `http://localhost:5000` en tu navegador.
    * Para ver el proyecto en `GitHub Pages` https://anapaulaoliva.github.io/GDL004-data-lovers/src/ :point_left:

## POKEMON GO
Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y ha sido nombrada "el mejor juego para móviles" por Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch (tomado de Google Play).


###### Imagen del Prototipo Final
![finalPrototype](https://user-images.githubusercontent.com/56927809/70093365-d7c61b00-15e5-11ea-8703-2bee3b2589de.JPG)


## Investigación UX :busts_in_silhouette:
+ Está pensada para usuarios de 25 a 30 años que, activamente juegan Pokémon Go, y sin embargo, recuerdan el Anime de esta industria creativa.

+ Los objetivos en relación con el usuario abarcan:
    + Abordar al usuario de manera responsiva en la WebApp.
    + Lograr establecer una conexión emocional basada en la nostalgia de la caricatura con el usuario.
	  + Conservar un equilibro entre la temática infantil o colorida, y la simplicidad o minimalismo para un usuario adulto.


+ ¿Cómo el producto soluciona necesidades del usuario?

	+ Existen páginas tales como, PokeWiki, varias Pokedex, e incluso la pagina oficial con información sobre cada Pokémon, sin embargo, hace falta el diseño responsivo, actualizado y llamativo para captar la atención total de un usuario. En esta WebApp, tratamos de mezclar la data, la funcionalidad y los elementos dinámicos con la misma fuerza y prioridad para cada una, para lograr una WebApp que no pase por desapercibida.

## MOODBOARD - Prototype :pencil2::paperclip:

[POKE-DATALOVERS.pdf](https://github.com/SleekPanther/test/files/3918933/POKE-DATALOVERS.pdf)

![dl1](https://user-images.githubusercontent.com/56927809/70095595-ca5f5f80-15ea-11ea-9cd2-d48f49382237.JPG)
![dl2](https://user-images.githubusercontent.com/56927809/70095600-cc292300-15ea-11ea-851a-8e8fc1bda4f9.JPG)
![dl3](https://user-images.githubusercontent.com/56927809/70095601-cd5a5000-15ea-11ea-89a9-43e626d3c4ce.JPG)
![dl4](https://user-images.githubusercontent.com/56927809/70095603-ce8b7d00-15ea-11ea-9082-341b2c53f2b1.JPG)


###### Prototipo de Baja Fidelidad

![LowFidPrototype](https://user-images.githubusercontent.com/56927809/70346203-5fe53400-1823-11ea-81d5-a3e268b18691.JPG)

###### (Adobe DX)

![Prototype](https://user-images.githubusercontent.com/56927809/70095477-76547b00-15ea-11ea-8017-1e136ec5cf36.JPG)


## Funcionalidades de la WebApp Pokedx :sparkles:
- [x] Mostrar data filtrada.
- [x] SortBy y SortBy reverse de la data.
- [x] Menú desplegable y slider.


## Testing (BDD)

PASS test/data.spec.js
  filtradoPokemones
    √ debería ser una función (5ms)
    √ debería retornar el filtradoPokemones con type: Grass (1ms)
  pokemonesAZ
    √ debería ser una función (1ms)
    √ debería retornar el primer pokemon con primer letra: A (2ms)
  pokemonesZA
    √ debería ser una función (1ms)
    √ debería retornar el último pokemon con primer letra: Z (361ms)


![testing](https://user-images.githubusercontent.com/56927809/70346281-97ec7700-1823-11ea-82ef-88eba56c1756.JPG)


## Feedback :speech_balloon:
Mejoras a realizar en el proyecto:
- Mejorar el tamaño responsivo de la pagina introductiva.
- Implementar un botón con la función búsqueda por nombre.
- Crear cartas individuales con mayores características de cada pokemon y un flujo entre el Top Pokemones y sus cards.
