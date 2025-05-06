#  Curso de Node.js

Bienvenido al curso de **Node.js**, donde aprenderás desde los fundamentos de JavaScript hasta la creación de servidores web utilizando Express.js, bases de datos, APIs RESTful y buenas prácticas de desarrollo. Este curso está diseñado para estudiantes que desean adquirir habilidades prácticas en el desarrollo backend con Node.js.

## Índice
1.  [Clase 1: Introducción a Git](#clase-1-introducción-a-git)
2.  [Clase 2: Fundamentos de JavaScript - Tipos de Datos](#clase-2-fundamentos-de-javascript---tipos-de-datos)
3.  [Clase 3: Fundamentos de JavaScript - Funciones y Objetos](#clase-3-fundamentos-de-javascript---funciones-y-objetos)
4.  [Clase 4: Programación Funcional en JavaScript](#clase-4-programación-funcional-en-javascript)
5.  [Clase 5: Introducción a Node.js](#clase-5-introducción-a-nodejs)
6.  [Clase 6: Haciendo un Programa Interactivo con Node.js](#clase-6-haciendo-un-programa-interactivo-con-nodejs)


---

## Clase 1: Introducción a Git

**Objetivos:**

* Comprender qué es Git y su importancia en el desarrollo.
* Configurar Git y utilizar comandos básicos.
* Trabajar con ramas y repositorios remotos.

**Contenido:**

* ¿Qué es Git y por qué es importante?
* Configuración inicial de Git.
* Comandos básicos: `init`, `add`, `commit`, `status`, `log`.
* Trabajo con ramas: creación, cambio y fusión (`branch`, `checkout`, `merge`).
* Uso de GitHub/GitLab: subir repositorios remotos (`push`, `pull`, `clone`).

---

## Clase 2: Fundamentos de JavaScript - Tipos de Datos y operadores

**Objetivos:**

* Comprender la historia y evolución de JavaScript.
* Diferenciar los entornos de ejecución: navegador y Node.js.
* Dominar la declaración de variables con `var`, `let` y `const`.
* Identificar y utilizar los tipos de datos primitivos y compuestos.
* Aplicar métodos para manipular strings y arrays.
* Operadores.
* Resolver problemas prácticos utilizando los conceptos aprendidos.

**Contenido:**

* Historia y evolución de JavaScript.
* Entorno de ejecución: navegador vs Node.js.
* Declaración de variables: `var`, `let`, `const`.
* Tipos primitivos: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`.
* Tipos compuestos: objetos y arrays.
* Métodos útiles para manipular strings y arrays.
* Operadores Aritméticos, Operadores de Asignación,  Operadores de Comparación, Operadores Lógicos
* Operador Ternario
* Operadores de Tipo
* Operadores Especiales: Operador Spread , Operador Nullish Coalescing, Operador Optional Chaining
* Ejercicios prácticos: manipulación de datos y resolución de problemas.

---

## Clase 3: Fundamentos de JavaScript - Funciones y Objetos

**Objetivos:**

* Dominar la creación y uso de funciones en JavaScript.
* Comprender el concepto de scope y closures.
* Aprender a manipular objetos y sus métodos.

**Contenido:**

* Funciones básicas: declaración, expresión y funciones flecha.
* Parámetros y argumentos: paso por valor y referencia.
* Scope: variables locales y globales.
* Callbacks: concepto básico.
* Funciones Lamda
* Funciones Closure
* Metodos de Objetos.
* Ejercicios prácticos: resolver problemas simples usando funciones y objetos.

---

# Clase 4: Promesas en JavaScript

## Objetivos:

* Comprender qué son las promesas y cómo funcionan.
* Aplicar promesas para manejar operaciones asíncronas.
* Utilizar `then`, `catch` y `finally` para gestionar resultados y errores.
* Implementar funciones que retornen promesas y encadenarlas eficientemente.
* Aprender a usar `async/await` para simplificar el manejo de promesas.

## Contenido:

* **Introducción a las promesas:**
  - ¿Qué son las promesas?
  - Estados de una promesa: `pending`, `fulfilled`, `rejected`.
  - Ventajas de usar promesas frente a callbacks.

* **Métodos principales de las promesas:**
  - `.then`: Manejar resultados exitosos.
  - `.catch`: Capturar y manejar errores.
  - `.finally`: Ejecutar código independientemente del resultado.

* **Creación de promesas personalizadas:**
  - Uso del constructor `new Promise`.
  - Resolución (`resolve`) y rechazo (`reject`) de promesas.

* **Encadenamiento de promesas:**
  - Cómo encadenar múltiples `.then` para procesar datos paso a paso.
  - Evitar el "callback hell" con promesas.

* **Uso de `async/await`:**
  - Simplificar el manejo de promesas con `async/await`.
  - Diferencias entre `async/await` y el uso de `.then/.catch`.
  - Buenas prácticas al usar `async/await`.

---

# Clase 5: Introducción a Node.js

## Objetivos:

* Comprender qué es Node.js y sus características principales.
* Aprender cómo está construido Node.js internamente.
* Familiarizarse con el uso de `module.exports` para modularizar código.
* Explorar el módulo `fs` para interactuar con archivos (lectura y escritura).

---

## Contenido:

1. **¿Qué es Node.js?**
   - Definición y casos de uso.
   - Características principales: asincronismo, event-driven, cross-platform.

2. **¿Cómo está hecho Node.js?**
   - Motor V8: Compilación de JavaScript a código máquina.
   - Arquitectura interna: Single-threaded y Event Loop.
   - Libuv: Soporte para E/S asíncronas y manejo de hilos.

3. **Modularización con `module.exports`**
   - Exportar e importar módulos en Node.js.
   - Ejemplo básico de modularización.

4. **Módulo `fs`: Trabajo con archivos**
   - Lectura y escritura de archivos (sincrónica y asíncrona).
   - Uso práctico del módulo `fs`.

5. **Creación de un script básico**
   - Combinar `module.exports` y `fs` para crear un script funcional.
---

## Clase 6: Haciendo un Programa Interactivo con Node.js

**Objetivos:**

* Crear programas de línea de comandos (CLI) con Node.js.
* Manejar argumentos y opciones con `process.argv` y paquetes externos.
* Desarrollar aplicaciones interactivas en la terminal.

**Contenido:**

* Creación de un programa CLI (Command Line Interface).
* Manejo de argumentos con `process.argv`.
* Uso de paquetes externos como `yargs` o `commander`.
* Ejercicio práctico: desarrollar una calculadora CLI o una lista de tareas.
