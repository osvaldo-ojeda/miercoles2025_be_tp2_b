# Clase 2: Fundamentos de JavaScript - Tipos de Datos y Operadores

**Objetivos:**

- Comprender la historia y evolución de JavaScript.
- Diferenciar los entornos de ejecución: navegador y Node.js.
- Dominar la declaración de variables con `var`, `let` y `const`.
- Identificar y utilizar los tipos de datos primitivos y compuestos.
- Aplicar métodos para manipular strings y arrays.
- Operadores.
- Resolver problemas prácticos utilizando los conceptos aprendidos.

**Contenido:**

- Historia y evolución de JavaScript.
- Entorno de ejecución: navegador vs Node.js.
- Declaración de variables: `var`, `let`, `const`.
- Tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `BigInt`.
- Tipos compuestos: objetos y arrays.
- Métodos útiles para manipular strings y arrays.
- Operadores Aritméticos, Operadores de Asignación, Operadores de Comparación, Operadores Lógicos
- Operador Ternario
- Operadores de Tipo
- Operadores Especiales: Operador Spread, Operador Nullish Coalescing, Operador Optional Chaining
- Ejercicios prácticos: manipulación de datos y resolución de problemas.

### 1. Historia y Evolución de JavaScript

- **Orígenes (1995):**
  - Creado por Brendan Eich en Netscape Communications Corporation.
  - Inicialmente llamado "LiveScript", fue renombrado a "JavaScript" para aprovechar la popularidad de Java.
  - Su propósito inicial era añadir interactividad a las páginas web, que en ese momento eran estáticas.
- **Estandarización (1997):**
  - ECMAScript (ECMA-262) se convirtió en el estándar que define JavaScript.
  - Esto aseguró la interoperabilidad entre diferentes navegadores.
- **Evolución Inicial (Finales de los 90 - Principios de los 2000):**
  - JavaScript se usaba principalmente para efectos visuales simples y validación de formularios.
  - La falta de estandarización y las diferencias entre navegadores dificultaban el desarrollo.
- **AJAX y la Web 2.0 (Mediados de los 2000):**
  - La técnica AJAX (Asynchronous JavaScript and XML) revolucionó el desarrollo web, permitiendo crear aplicaciones web más dinámicas y responsivas.
  - Esto impulsó la popularidad de JavaScript.
- **Node.js (2009):**
  - La introducción de Node.js por Ryan Dahl permitió ejecutar JavaScript en el lado del servidor.
  - Esto abrió nuevas posibilidades para JavaScript, como la creación de aplicaciones de backend y APIs.
- **ECMAScript 2015 (ES6) (2015):**
  - Esta actualización introdujo importantes mejoras en el lenguaje, como:
    - `let` y `const` para la declaración de variables.
    - Funciones de flecha (arrow functions).
    - Clases y módulos.
    - Promesas para el manejo de operaciones asíncronas.
  - Esta versión modernizó JavaScript y lo hizo más adecuado para el desarrollo de aplicaciones complejas.
- **Actualizaciones Continuas (2015 - Presente):**
  - ECMAScript se actualiza anualmente, añadiendo nuevas características y mejoras al lenguaje.
  - Ejemplo de esto son las incorporaciones del operador Spread, operador Nullish Coalescing, y el operador Optional Chaining.
  - JavaScript continúa evolucionando y adaptándose a las nuevas necesidades del desarrollo web.

### 2. Entorno de Ejecución: Navegador vs Node.js

**Navegador**:

- Ejecuta JavaScript en el lado del cliente.
- Manipula el DOM, interactúa con el usuario.
- APIs del navegador (ej: `window`, `document`).

**Node.js**:

- Ejecuta JavaScript en el lado del servidor.
- Construye aplicaciones de backend, APIs, etc.
- Módulos y paquetes (npm).

## ¿Qué es una variable?

Una variable es un contenedor para un valor, como un número que podríamos usar en una suma, o una cadena que podríamos usar como parte de una oración. Pero una cosa especial acerca de las variables es que los valores que contienen pueden cambiar.

### 3. Declaración de Variables

**`var`**:

- Ámbito de función o global.
- Puede ser redeclarada y reasignada.
- Problemas con el hoisting.
- Ejemplo:

```javascript
function ejemploVar() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
}
```

- **`let\`**:
- Ámbito de bloque.
- Puede ser reasignada, pero no redeclarada.
- Mejor control del ámbito.
- Ejemplo:

```javascript
function ejemploLet() {
  let y = 10;
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  console.log(y); // 10
}
```

**`const\`**:

- Ámbito de bloque.
- No puede ser reasignada ni redeclarada.
- Para valores constantes.
- Ejemplo:

```javascript
const PI = 3.1416;
PI = 3.14; // Error: Assignment to constant variable.
```

> ## Hoisting
>
> Hoisting es un término que no encontrará utilizado en ninguna especificación previa a la Especificación del Lenguaje ECMAScript® 2015. El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto puede ser un poco confuso al principio.
> Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
> Una de las ventajas en JavaScript de colocar (ponerlas en memoria) las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el código. Por ejemplo:

     function nombreDelGato(nombre) {
     console.log("El nombre de mi gato es " + nombre);
     }

     nombreDelGato("Pepe");
     /*
     El resultado del código es: "El nombre de mi gato es Pepe"
     */

> El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:

     nombreDelGato("Dumas");

     function nombreDelGato(nombre) {
     console.log("El nombre de mi gato es " + nombre);
     }
     /*
     El resultado del código es: "El nombre de mi gato es Dumas"
     */

> Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript.
> Hoisting se lleva también bien con otros tipos de datos y variables. Observemos el siguiente ejemplo:

     //Ejemplo técnico
     var x = 5;
     (function () {
     console.log("x:", x); // no obtenemos '5' sino 'undefined'
     var x = 10;
     console.log("x:", x); // 10
     }());

> ¿No hemos obtenido lo esperado?, como la declaración de variables se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es igual a declararla al inicio del mismo. Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable se eleva y pasa a declararse al comienzo de su contexto, en este caso la función que la contiene.

> El ejemplo anterior se entiende implícitamente como:

     var x = 5;
     (function () {
     var x; // Se elevo la declaración
     console.log("x:", x); // undefined
     x = 10;
     console.log("x:", x); // 10
     }());

> JavaScript sólo utiliza el hoisting en declaraciones, no inicializaciones. Si está utilizando una variable que es declarada e inicializada después (está después en el código) de usarla, el valor será undefined. El siguiente ejemplo demuestra ese comportamiento:

     var x = 1; // Inicializa x
     console.log(x + " " + y); // '1 undefined'
     var y = 2; // Inicializa y

> como se puede apreciar la elevación afecta la declaración de variables, pero no su inicialización. El valor será asignado exactamente cuando la sentencia de asignación sea alcanzada.

> El ejemplo anterior se entiende implícitamente como:

     var x = 1; // Inicializa x
     var y;// Se elevo la declaración
     console.log(x + " " + y); // '1 undefined'
     y = 2; // Inicializa y

---

<p style="color:red">La elevación (hoisting) ya no funciona con let. Si cambiamos var a let en el ejemplo anterior, fallaría con un error. Esto es bueno — declarar una variable después de iniciarla resulta en un código confuso y más difícil de entender.</p>

En segundo lugar, cuando usas var, puedes declarar la misma variable tantas veces como desees, pero con let no puedes. Lo siguiente funcionaría:

     var myName = 'Chris';
     var myName = 'Bob';

Pero lo siguiente arrojaría un error en la segunda línea:

     let myName = 'Chris';
     let myName = 'Bob';

Tendrías que hacer esto en su lugar:

     let name = 'Chris';
     name = 'Bob';

> Nuevamente, esta es una sensata decisión del lenguaje. No hay razón para volver a declarar las variables — solo hace que las cosas sean más confusas.

Por estas y otras razones, se recomienda utilizar let tanto como sea posible en tu código, en lugar de var. No hay ninguna razón para usar var, a menos que necesites admitir versiones antiguas de Internet Explorer con tu código (no es compatible con let hasta la versión 11; Edge el moderno navegador de Windows admite let perfectamente).

### 4. Tipos Primitivos

- **`string\`**: Cadenas de texto.
- Ejemplo: \`"Hola"\`, \`'Mundo'\`.
- **`number\`**: Números enteros y decimales.
- Ejemplo: \`42\`, \`3.14\`.
- **`BigInt\`**: Números muy grandes.
- Ejemplo: \`2n \*\* 53n\`, \` 9007199254740992n\`.
- **`boolean\`**: Valores verdadero o falso.
- Ejemplo: \`true\`, \`false\`.
- **`null\`**: Valor nulo intencional.
- Ejemplo: \`null\`.
- **`undefined\`**: Valor de una variable no inicializada.
- Ejemplo: \`undefined\`.
- **`symbol\`**: Valores únicos e inmutables (ES6).
- Ejemplo:

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false
const persona = {
  [id1]: "Juan",
  nombre: "Juan",
};
console.log(persona[id1]); // Juan
```

### 5. Tipos Complejos: Objetos y Arrays

- **Objetos**: Colecciones de pares clave-valor.
- Ejemplo: \`{ nombre: "Juan", edad: 30 }\`.
- **Arrays**: Listas ordenadas de valores.
- Ejemplo: \`[1, 2, 3, "Hola"]\`.

### 6. Métodos Útiles para Manipular Strings y Arrays

- **Strings**:
- \`.length\`, \`.toUpperCase()\`, \`.toLowerCase()\`, \`.slice()\`, \`.split()\`, \`.trim()\`.
- **Arrays**:
- \`.length\`, \`.push()\`, \`.pop()\`, \`.shift()\`, \`.unshift()\`, \`.slice()\`, \`.splice()\`, \`.map()\`, \`.filter()\`, \`.reduce()\`.
- Otros métodos útiles: \`.find()\`, \`.some()\`, \`.every()\`, \`.includes()\`, \`.join()\`, \`.concat()\`.
- Nota: Los strings son inmutables, los arrays son mutables.

### 7. Operadores en JavaScript

JavaScript proporciona una variedad de operadores para realizar diferentes tipos de operaciones. Los operadores se utilizan para manipular datos y realizar cálculos.

#### 7.1. Operadores Aritméticos

Los operadores aritméticos se utilizan para realizar operaciones matemáticas.

| Operador | Descripción                   | Ejemplo           | Resultado |
| :------- | :---------------------------- | :---------------- | :-------- |
| `+`      | Suma                          | `5 + 2`           | `7`       |
| `-`      | Resta                         | `5 - 2`           | `3`       |
| `*`      | Multiplicación                | `5 * 2`           | `10`      |
| `/`      | División                      | `5 / 2`           | `2.5`     |
| `%`      | Módulo (resto de la división) | `5 % 2`           | `1`       |
| `**`     | Exponenciación                | `5 ** 2`          | `25`      |
| `++`     | Incremento (pre/post)         | `let x = 5; x++;` | `6`       |
| `--`     | Decremento (pre/post)         | `let x = 5; x--;` | `4`       |

#### 7.2. Operadores de Asignación

Los operadores de asignación se utilizan para asignar valores a las variables.

| Operador | Descripción                 | Ejemplo   | Equivalente a |
| :------- | :-------------------------- | :-------- | :------------ |
| `=`      | Asignación simple           | `x = 10`  | `x = 10`      |
| `+=`     | Suma y asignación           | `x += 5`  | `x = x + 5`   |
| `-=`     | Resta y asignación          | `x -= 5`  | `x = x - 5`   |
| `*=`     | Multiplicación y asignación | `x *= 5`  | `x = x * 5`   |
| `/=`     | División y asignación       | `x /= 5`  | `x = x / 5`   |
| `%=`     | Módulo y asignación         | `x %= 5`  | `x = x % 5`   |
| `**=`    | Exponenciación y asignación | `x **= 5` | `x = x ** 5`  |

#### 7.3. Operadores de Comparación

Los operadores de comparación se utilizan para comparar valores.

| Operador | Descripción                         | Ejemplo     | Resultado |
| :------- | :---------------------------------- | :---------- | :-------- |
| `==`     | Igualdad (valor)                    | `5 == '5'`  | `true`    |
| `===`    | Igualdad estricta (valor y tipo)    | `5 === '5'` | `false`   |
| `!=`     | Desigualdad (valor)                 | `5 != '5'`  | `false`   |
| `!==`    | Desigualdad estricta (valor y tipo) | `5 !== '5'` | `true`    |
| `>`      | Mayor que                           | `5 > 2`     | `true`    |
| `<`      | Menor que                           | `5 < 2`     | `false`   |
| `>=`     | Mayor o igual que                   | `5 >= 5`    | `true`    |
| `<=`     | Menor o igual que                   | `5 <= 5`    | `true`    |

#### 7.4. Operadores Lógicos

#### 7.4. Operadores Lógicos

Los operadores lógicos se utilizan para combinar expresiones booleanas.

| Operador | Descripción | Ejemplo          | Resultado |
| :------- | :---------- | :--------------- | :-------- |
| `&&`     | AND lógico  | `true && false`  | `false`   |
| `\|\|`   | OR lógico   | `true \|\| false` | `true`    |
| `!`      | NOT lógico  | `!true`          | `false`   |

### Explicación Detallada de Operadores Lógicos

* **&& (AND lógico):**
    * Devuelve `true` si ambos operandos son `true`.
    * Devuelve `false` si al menos uno de los operandos es `false`.
    * Ejemplo:
        * `true && true` devuelve `true`.
        * `true && false` devuelve `false`.
        * `false && false` devuelve `false`.
* **|| (OR lógico):**
    * Devuelve `true` si al menos uno de los operandos es `true`.
    * Devuelve `false` si ambos operandos son `false`.
    * Ejemplo:
        * `true || true` devuelve `true`.
        * `true || false` devuelve `true`.
        * `false || false` devuelve `false`.
* **! (NOT lógico):**
    * Invierte el valor booleano del operando.
    * Si el operando es `true`, devuelve `false`.
    * Si el operando es `false`, devuelve `true`.
    * Ejemplo:
        * `!true` devuelve `false`.
        * `!false` devuelve `true`.

#### 7.5. Operador Ternario

El operador ternario es una forma abreviada de escribir una sentencia `if...else`.

```javascript
condicion ? valorSiVerdadero : valorSiFalso;
let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"
```

### 7.6. Operadores de Tipo

El operador `typeof` se utiliza para determinar el tipo de dato de una variable.

| Operador     | Descripción                                          | Ejemplo               | Resultado  |
| :----------- | :--------------------------------------------------- | :-------------------- | :--------- |
| `typeof`     | Devuelve una cadena que indica el tipo de dato       | `typeof "Hola"`       | `"string"` |
| `instanceof` | Comprueba si un objeto es una instancia de una clase | `[] instanceof Array` | `true`     |

#### Ejemplos adicionales de `typeof`

```javascript
typeof 42; // "number"
typeof 3.14; // "number"
typeof NaN; // "number"
typeof Infinity; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (un error histórico, debería ser "null")
typeof Symbol(); // "symbol"
typeof function () {}; // "function"
typeof {}; // "object"
typeof []; // "object"

function Persona(nombre) {
  this.nombre = nombre;
}

const persona1 = new Persona("Juan");
console.log(persona1 instanceof Persona); // true

console.log([] instanceof Object); // true (los arrays son objetos)
```

### 7.7. Operadores Especiales

- **Operador Spread (`...`)**:

  - Permite expandir un iterable (array, string, etc.) en lugares donde se esperan múltiples argumentos o elementos.
  - Ejemplo:

  ```javascript
  const numeros = [1, 2, 3];
  const nuevosNumeros = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]
  ```

  - Otros ejemplos:

  ```javascript
  const objeto1 = { a: 1, b: 2 };
  const objeto2 = { ...objeto1, c: 3 }; // { a: 1, b: 2, c: 3 }

  const cadena = "Hola";
  const arrayDeCaracteres = [...cadena]; // ["H", "o", "l", "a"]
  ```

- **Operador Nullish Coalescing (`??`)**:

  - Devuelve el operando derecho cuando el operando izquierdo es `null` o `undefined`.
  - Ejemplo:

  ```javascript
  let valor = null;
  let resultado = valor ?? "Valor por defecto"; // "Valor por defecto"
  ```

  - Diferencia con `||`:

  ```javascript
  let valor2 = 0;
  let resultado2 = valor2 || "Valor por defecto"; // "Valor por defecto" (0 es falsy)
  let resultado3 = valor2 ?? "Valor por defecto"; // 0 (0 no es null ni undefined)
  ```

- **Operador Optional Chaining (`?.`)**:

  - Permite acceder a propiedades de objetos que pueden ser `null` o `undefined` sin causar errores.
  - Ejemplo:

  ```javascript
  const persona = { nombre: "Juan", direccion: { ciudad: "Madrid" } };
  const ciudad = persona?.direccion?.ciudad; // "Madrid"
  const codigoPostal = persona?.direccion?.codigoPostal; // undefined
  ```

  - Otros ejemplos:

  ```javascript
  const persona2 = null;
  const nombre = persona2?.nombre; // undefined

  const funcion = persona?.saludar?.(); // undefined si persona o persona.saludar es null/undefined
  ```

### 8. Ejercicios Prácticos: Manipulación de Datos y Resolución de Problemas

1.  **Manipulación de cadenas**:
- Crea una función que invierta una cadena de texto.
- Crea una función que cuente el número de vocales en una cadena.
- Crea una función que determine si una cadena es un palíndromo.
2.  **Manipulación de arrays**:
- Crea una función que encuentre el número más grande en un array.
- Crea una función que elimine los elementos duplicados de un array.
- Crea una función que invierta el orden de los elementos en un array.
3.  **Objetos**:
- Crea un objeto "persona" con propiedades como "nombre", "edad" y "profesión".
- Crea una función que tome un array de objetos "persona" y devuelva un nuevo array con los nombres de todas las personas.

4.  **Combinación de tipos**:
- Crea una función que tome un array de strings y devuelva un objeto donde las claves sean las strings y los valores sean sus longitudes.


