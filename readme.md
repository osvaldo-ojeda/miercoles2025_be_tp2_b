# Clase 3: Fundamentos de JavaScript - Funciones y Objetos

**Objetivos:**

* Dominar la creación y uso de funciones en JavaScript.
* Comprender el concepto de scope y closures.
* Aprender a manipular objetos y sus métodos.

**Contenido:**

## 1. Funciones Básicas

* **Declaración de Función:**
    * Se utiliza la palabra clave `function` seguida del nombre de la función, paréntesis para los parámetros y llaves para el bloque de código.
    * Ejemplo:

    ```javascript
    function saludar(nombre) {
      console.log("Hola, " + nombre + "!");
    }

    saludar("Juan"); // Imprime "Hola, Juan!"
    ```

* **Expresión de Función:**
    * Se asigna una función a una variable.
    * Puede ser anónima (sin nombre).
    * Ejemplo:

    ```javascript
    const saludar = function (nombre) {
      console.log("Hola, " + nombre + "!");
    };

    saludar("Ana"); // Imprime "Hola, Ana!"
    ```

* **Funciones Flecha (Arrow Functions):**
    * Sintaxis más corta para escribir funciones.
    * No tienen su propio `this`.
    * Ejemplo:

    ```javascript
    const saludar = (nombre) => {
      console.log(`Hola, ${nombre}!`);
    };

    saludar("Carlos"); // Imprime "Hola, Carlos!"

    const sumar = (a, b) => a + b;
    console.log(sumar(5, 3)); // Imprime 8
    ```

## 2. Parámetros y Argumentos

* **Parámetros:**
    * Variables declaradas en la definición de la función.
* **Argumentos:**
    * Valores pasados a la función cuando se llama.
* **Parámetros por defecto:**
    * Se puede asignar un valor por defecto a los parámetros de una función.
    * Ejemplo:

    ```javascript
    function saludar(nombre = "Invitado") {
      console.log(`Hola, ${nombre}!`);
    }

    saludar(); // Imprime "Hola, Invitado!"
    saludar("Laura"); // Imprime "Hola, Laura!"
    ```

* **Paso por Valor:**
    * Los tipos primitivos (números, strings, booleanos, etc.) se pasan por valor.
    * Los cambios en los parámetros no afectan a los argumentos originales.
    * Ejemplo:

    ```javascript
    let numero = 5;

    function cambiarNumero(num) {
      num = 10;
    }

    cambiarNumero(numero);
    console.log(numero); // Imprime 5
    ```

* **Paso por Referencia:**
    * Los objetos y arrays se pasan por referencia.
    * Los cambios en los parámetros afectan a los argumentos originales.
    * Ejemplo:

    ```javascript
    let persona = { nombre: "Pedro" };

    function cambiarNombre(obj) {
      obj.nombre = "Pablo";
    }

    cambiarNombre(persona);
    console.log(persona.nombre); // Imprime "Pablo"
    ```

## 3. Scope (Ámbito)

* **Variables Locales:**
    * Declaradas dentro de una función.
    * Solo accesibles dentro de esa función.
* **Variables Globales:**
    * Declaradas fuera de cualquier función.
    * Accesibles desde cualquier parte del código.
* **Ámbito de bloque:**
    * Variables declaradas con let y const tienen ámbito de bloque, esto significa que solo son accesibles dentro del bloque donde fueron declaradas.
    * Ejemplo:

    ```javascript
    if (true) {
      let mensaje = "Hola";
      console.log(mensaje); // Imprime "Hola"
    }

    // console.log(mensaje); // Error: mensaje is not defined
    ```

## 4. Callbacks

* **Concepto Básico:**
    * Una función que se pasa como argumento a otra función.
    * Se ejecuta después de que la función principal ha completado su tarea.
    * Ejemplo:

    ```javascript
    function operacion(a, b, callback) {
      const resultado = callback(a, b);
      console.log(resultado);
    }

    function sumar(x, y) {
      return x + y;
    }

    operacion(5, 3, sumar); // Imprime 8
    ```

## 5. Funciones Lambda

* Las funciones lambda son funciones anónimas concisas que se pueden definir en línea.
* En JavaScript, las funciones lambda se implementan comúnmente utilizando funciones de flecha.
* Ejemplo:

    ```javascript
    const multiplicar = (x, y) => x * y;
    console.log(multiplicar(4, 5)); // Imprime 20
    ```

## 6. Closures

* Una función que recuerda el ámbito léxico en el que fue creada.
* Puede acceder a variables de su ámbito padre, incluso después de que la función padre ha finalizado.
* Ejemplo:

    ```javascript
    function crearContador() {
      let contador = 0;
      return function () {
        contador++;
        console.log(contador);
      };
    }

    const incrementar = crearContador();
    incrementar(); // Imprime 1
    incrementar(); // Imprime 2
    ```

## 7. Métodos de Objetos

* Funciones asociadas a un objeto.
* Se definen como propiedades del objeto.
* El contexto de "this" dentro de un método se refiere al objeto que lo contiene.
* Ejemplo:

    ```javascript
    const persona = {
      nombre: "Juan",
      saludar: function () {
        console.log(`Hola, soy ${this.nombre}`);
      },
    };

    persona.saludar(); // Imprime "Hola, soy Juan"
    ```

## 8. Ejercicios Prácticos

1.  Crea una función que calcule el área de un círculo.
2.  Crea una función que determine si un número es par o impar.
3.  Crea un objeto "calculadora" con métodos para sumar, restar, multiplicar y dividir.
4.  Crea una función que tome un array de números y devuelva un nuevo array con los números pares.
5.  Crea una función que simule un contador utilizando closures.
6.  Crea un objeto "persona" con propiedades como "nombre", "edad" y un método "presentarse" que imprima una presentación de la persona.