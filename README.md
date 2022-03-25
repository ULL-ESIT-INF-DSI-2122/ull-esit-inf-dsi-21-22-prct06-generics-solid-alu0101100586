[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586?branch=main)

# DESARROLLO DE SISTEMAS INFORMÁTICOS  
# PRÁCTICA 06  
### JONAY ESTÉVEZ DÍAZ

## **1) INTRODUCCIÓN** 
En la practica 6, hemos realizado 3 ejercicios, para entender y aprender a usar las clases abstractas, las clases e interfaces genéricas, así como la mezcla de ambas y el uso de implementar en otras clases las interfaces creadas y además crear subclases que extienden las superclases. Además se ha comenzado a familiarizarse con los principios **Solid** a la hora de crear estas clases e interfaces.  
  
En total se han realizado 3 ejercicios, el primero, donde se ha de crear un combate, el segundo, donde simulamos de una forma básica una plataforma de videos en streaming y por último, se ha diseñado dos tipos de cifrados basados en el Cifrado **Cesar**.  
  
## **2) EJERCICIOS**  
### **2.1) EJERCICIO 1**  
Para la realización de de este ejercicio se ha llevado a cabo la creación de una clase de nombre `Fighter`, la cual es una clase abstracta, que define los atributos  que tiene un luchador, en total son 7 atributos, entre los que contamos la vida, el ataque, la velocidad del luchador, etc. Está compuesta solo y unicamente por getter y setter de dichos atributos. De ella, hemos extendido 5 subclases más, para así crear luchadores específicos, en concreto, de diseñaron las clases `Dragon_Ball`, `Elden_Ring`, `Marvel`, `Star_wars` y se modificó la clase `Pokemon` de la practica anterior, para que se adaptara a la clase `Fighter`. Cada una de éstas extendia la superclase añadiendo en cada caso un atribito especial de cada tipo. `Dragon_Ball` añade un movimiento especial, `Elden_Ring` añade la gran runa, `Marvel` el arma que utiliza el heroe, `Star_Wars` la espada laser que se utiliza y como es evidente, en `Pokemon`este atributo extra es el tipo.  
  
El siguiente paso que se llevó a cabo fue la modificacion de la clase `Pokedex` de la practica anterios, ahora renombrada `Multiverse`, donde se van a almacenar todos los luchadores que coexistan en un mismo universo, este és por tanto un `Fighter[]`como atributo principal. Sobre ésta, podemos realizar las siguientes funciones:
  
  - Obtener todos los luchadores que estna dispuestos a combatir `getFighter(): Fighter[]`.
  - Poder seleccionar un luchador en especifico `selectFighter(fighter_name: string): Fighter`.
  - Añadir más luchadores al universo `addFighter(new_fighter: Fighter): void`.
  
Para finalizar, se creó una clase adicional de nombre `Combat`. Clase genérica que simula la lucha de dos luchadores. Ésta está compuesta por 5 funciones sin contar con el constructor de la clase. La función `start(): string` es la que lleva a cabo la simulacion y saca por pantalla el nombre del luchador ganador. `speed(): boolean` retorna cual de los dos luchadores es más rapido, y por ende, el primero en pegar al contrincante (true, luchador A empieza; false, luchador B empieza). Luego, se dispone del método `power(fighter_a: Fighter, fighter_b: Fighter, power: number): number` donde se le pasa por orden, el luchador que ataque, el luchador que resive y el numero que corresponde con la efectividad del golpe, pues dadas las subclases antes mencionadas, existen luchadores mucho mas fuertes que otros y no todos los ataques se imfingen igual. Cuando el numero es 1, el golpe es poco efectivo, cuendo es 2, el ataque es normal, pero en cambio, cuendo el valor es 3 el golpe es super efectivo. Esto llevó a diseñar las posibilidades de los combates, pues pueden luchar unos universos con otroe, o con su propio universo, es por ello que se diseño el método `damage(fighter_a: Fighter, fighter_b: Fighter): number`, que compueba todas las posibles combinaciondes de luchas y calcula, llamando al metodo anterior, el daño que se provoca. Se aplicó la siguiente estructura.  

  - (Dragon Ball = Elden Ring) > Marvel > (Star Wars = Pokemon)

Como método final, corazon de la simulacion, tenemos al `combat(): boolean` que es una modificacion del combate pokemon de la practica anterior, pero la esencia es lo mismo, se llama a `speed()`para saber quien empieza, luego se van calculando los daños y se les resta a la vida del luchador con el metodo `damage()` y el primero en quedarse con vida inferior o igual a 0, pierde automaticamente el combate. 

  - Código de las clases del ejercicio 1. [Code](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/tree/main/src/Ejercicio_1)
  - Pruebas llevadas a cabo en el ejercicio 1. [Test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/tree/main/tests/Ejercicio_1)

### **2.2) EJERCICIO 2**
Para la realizacion de este ejercicio, se ha llevado a cabo la creacion de una interface generica de nombre `Streamable`, que declara metodos para controlar una coleccion de elemtos que pueden ser emitidos. En ella se han declarado un get y un set de la collection, que no deja de ser un `T[]`, así como metodos sobre ella, como  buscar en la coleccion, añadir un nuevo elemento `T` a la coleccion y otro método para eliminar eliminar elementos.  

Por otro lado, se realizó al implementacion de la interface en una clase abstracta y generica de nombre `BasicStreamableCollection` donde `T` es solo para elementos de tipo `string`. Esta clase deja como abstractos los metodos de busqueda, añadir y eliminar elementos, pero implementa el get y el set de la collection. Pues lo que se realizó mas adelante son 3 subclases nuevas que estienden la clase antes mencionada. De esta manera, se crearon las clases `Series`, `Peliculas` y `Documentales`, que desarrollan los métodos abstractos correspondientes y cada una añade una cualidad nueva, así como sus getter y setter. `Series` añade el año de salidas de las series de dentro de la collection. `Peliculas` añade la duracion media de las peliculas de la collection y por último `Documentales` añade el tipo de los documentales.  
  
  - Código de las clases e interfaces del ejercicio 2. [Code](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/tree/main/src/Ejercicio_2)
  - Pruebas llevadas a cabo en el ejercicio 2. [Test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/tree/main/tests/Ejercicio_2)

### **2.3) EJERCICIO 3**
Para la realizacion de este ejercicio, se realizó una unica clase de nombre `Cifrado`, que le pasamos al constructor, la frsae a cifrar, así como el desplazamiento y la clave para cifrar y un alfabeto. Además de han realizado metodos para obtener y modificar los atributos, desplazamiento, alfabeto y la clave. Ademas como metodos principales, se han creado dos cifrados con sus propios metodos de descrifrado. El primero es el cifrado **Cesar**, que utiliza el atributo `d`para cifrar, y luego la mejora de este cifrado, como es el **Vigenere** que ulitiza la clave y la frase para calcular el desplazamiento y poder así cifrar el mensaje.  

  - Código realizado en el ejercicio 3. [Code](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/blob/main/src/Ejercicio_3/cifrado.ts)
  - Prueba llevada a cabo en el ejercicio 3. [Test](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586/blob/main/tests/Ejercicio_3/cifrado.spec.ts)

## **3) COVERALLS**  
Además de los ejercicios, se ha utilizado la herramiento de **Coveralls**, dando como resultado un 79% general y un cubrimiento del código de 86.08% en la carpeta **src** del proyecto. ësto, se puede observar mucho mejor en el siguiente enlace.  

  - [Coveralls](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101100586)