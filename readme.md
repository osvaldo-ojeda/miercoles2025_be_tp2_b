 # Clase 5: Introducción a Node.js

## **Objetivos**

* Comprender qué es **Node.js**, sus características principales y cómo está construido.
* Aprender a modularizar código usando `module.exports`.
* Explorar el módulo `fs` para interactuar con archivos (lectura y escritura).

---

## **Contenido Detallado**

### **1. ¿Qué es Node.js?**

#### **Definición**
- **Node.js** es un entorno de ejecución de JavaScript del lado del servidor basado en el motor **V8** de Google Chrome.
- Permite escribir aplicaciones backend utilizando JavaScript, un lenguaje que tradicionalmente se usaba solo en el navegador.

#### **Características principales**
1. **Asincronismo**: Node.js maneja operaciones no bloqueantes, lo que significa que puede realizar múltiples tareas simultáneamente sin detener la ejecución del programa.
2. **Event-driven**: Basado en eventos y un bucle de eventos (`event loop`), lo que lo hace ideal para aplicaciones en tiempo real.
3. **Cross-platform**: Funciona en múltiples sistemas operativos (Windows, macOS, Linux).
4. **NPM (Node Package Manager)**: Gestor de paquetes con acceso a miles de bibliotecas y herramientas.

#### **Casos de uso comunes**
- Creación de APIs RESTful.
- Herramientas CLI (Command Line Interface).
- Aplicaciones en tiempo real (chat, juegos, streaming).
- Procesamiento de archivos y manipulación de datos.

---

### **2. ¿Cómo está hecho Node.js?**

#### **Motor V8**
- El motor **V8** compila JavaScript a código máquina directamente, lo que lo hace extremadamente rápido.
- Ejemplo:
  ```javascript


  // console.log("Hola desde Node.js");

  ````

  Este código se ejecuta directamente en tu sistema gracias al motor V8.

#### **Arquitectura interna**
1. **Single-threaded**:
   - Node.js utiliza un único hilo principal para manejar solicitudes.
   - Sin embargo, puede manejar múltiples tareas simultáneamente gracias al **Event Loop**.
2. **Event Loop**:
   - Es un mecanismo que permite manejar operaciones asíncronas sin bloquear el hilo principal.
   - Ejemplo básico:

     ```javascript
     // console.log("Inicio");
     // setTimeout(() => console.log("Tarea asíncrona"), 1000);
     // console.log("Fin");
     Output esperado: Inicio -> Fin -> Tarea asíncrona
     ```
3. **Libuv**:
   - Biblioteca C++ que proporciona soporte para E/S asíncronas y manejo de hilos en segundo plano.
   - Permite que Node.js maneje tareas como lectura/escritura de archivos o conexiones de red sin bloquear el hilo principal.

---

### **3. Modularización con `module.exports`**

#### **¿Qué son los módulos en Node.js?**
- Un **módulo** es una unidad de código reutilizable.
- Tipos de módulos:
  - **Core modules**: Módulos incluidos en Node.js (ej.: fs, path, http).
  - **Local modules**: Módulos creados por el usuario.
  - **Third-party modules**: Módulos instalados desde NPM (ej.: express, axios).

#### **Exportar e importar módulos**
- **Exportar**:
  - Usamos module.exports o exports para exportar funciones, objetos o variables.
- **Importar**:
  - Usamos require() para importar módulos.

#### **Ejemplo práctico**
  ```javascript
// math.js
// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// module.exports = { sum, multiply };

// app.js
// const math = require('./math');
// console.log(math.sum(2, 3)); // Output: 5
// console.log(math.multiply(2, 3)); // Output: 6

```

---

### **4. Módulo fs: Trabajo con archivos**

#### **Introducción al módulo fs**
- El módulo fs (File System) permite trabajar con archivos y directorios.
- Proporciona métodos para leer, escribir, modificar y eliminar archivos.

#### **Operaciones básicas**
1. **Lectura de archivos**:
   - Sincrónica: fs.readFileSync(path, encoding).
   - Asíncrona: fs.readFile(path, encoding, callback).

2. **Escritura de archivos**:
   - Sincrónica: fs.writeFileSync(path, data).
   - Asíncrona: fs.writeFile(path, data, callback).

#### **Ejemplo práctico**
  ```javascript
// const fs = require('fs');

// Lectura de un archivo
// fs.readFile('archivo.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Escritura en un archivo
// fs.writeFile('nuevo-archivo.txt', 'Hola, mundo!', (err) => {
//   if (err) throw err;
//   console.log('Archivo guardado correctamente.');
// });
```
---

### **5. Creación de un script básico**

#### **Combinar module.exports y fs**
- Podemos crear un módulo que encapsule las funcionalidades de lectura y escritura de archivos.

#### **Ejemplo práctico**

  ```javascript
// fileManager.js
// const fs = require('fs');

// const leerArchivo = (ruta) => {
//   return fs.readFileSync(ruta, 'utf8');
// };

// const escribirArchivo = (ruta, contenido) => {
//   fs.writeFileSync(ruta, contenido);
// };

// module.exports = { leerArchivo, escribirArchivo };

// app.js
// const fileManager = require('./fileManager');

// const contenido = fileManager.leerArchivo('archivo.txt');
// console.log(contenido);

// fileManager.escribirArchivo('archivo-modificado.txt', contenido + '\nNuevo contenido');
```
