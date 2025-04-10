Ejercicio 1: Usando .map()

Crea una función llamada convertirAMayusculas que reciba un array de nombres y devuelva un nuevo array donde todos los nombres estén en mayúsculas. Usa el método .map() para resolver este problema.

Datos de entrada :
```
javascript

const nombres = ["juan", "maria", "pedro", "luisa"];
//Resultado esperado : ["JUAN", "MARIA", "PEDRO", "LUISA"]
````






Ejercicio 2: Usando .splice()
Crea una función llamada obtenerSubArray que reciba un array y dos índices (inicio y fin) como argumentos, y devuelva una copia del subarray que comienza en el índice inicio y termina justo antes del índice fin. Usa el método .slice() para resolver este problema.

Datos de entrada :
```

const numeros = [10, 20, 30, 40, 50];
const inicio = 1;
const fin = 4;
//Resultado esperado : [20, 30, 40, 50]

```


Ejercicio 3: Usando .filter()
Consigna :
Crea una función llamada filtrarPares que reciba un array de números y devuelva un nuevo array que contenga solo los números pares. Usa el método .filter() para resolver este problema.

Datos de entrada :

```
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Resultado esperado : [2, 4, 6, 8]
```
Ejercicio 4: Usando .reduce()

Crea una función llamada sumarTodos que reciba un array de números y devuelva la suma total de todos los elementos del array. Usa el método .reduce() para resolver este problema.

Datos de entrada :

```
const numeros = [10, 20, 30, 40, 50];
//Resultado esperado : 150

```

Ejercicio 5: Usando .reduce()
Crea una función llamada agruparPorCategoria que reciba un array de productos (cada producto es un objeto con las propiedades nombre, categoria y precio) y devuelva un objeto donde las claves sean las categorías y los valores sean arrays con los nombres de los productos pertenecientes a esa categoría.

Datos de entrada :

```
const productos = [
  { nombre: "manzanas", categoria: "frutas", precio: 2 },
  { nombre: "zanahorias", categoria: "verduras", precio: 1 },
  { nombre: "uvas", categoria: "frutas", precio: 3 },
  { nombre: "lechuga", categoria: "verduras", precio: 0.5 },
];
//Resultado esperado :
{
  frutas: ["manzanas", "uvas"],
  verduras: ["zanahorias", "lechuga"]
}
```