# Clase Teórica: Módulos Esenciales en Node.js

## **Objetivos**

Al finalizar esta clase, los estudiantes serán capaces de:

1. Comprender qué es el módulo `process` y cómo usarlo para interactuar con la terminal.
2. Entender qué son los flujos de entrada (`stdin`) y salida (`stdout`) y cómo manejarlos en Node.js.
3. Aprender a usar el módulo `path` para trabajar con rutas de archivos y directorios.

---

## **1. El Módulo `process` en Node.js**

### **¿Qué es `process`?**

El módulo `process` es un objeto global en Node.js que proporciona información y control sobre el entorno de ejecución del programa. Es una herramienta esencial para interactuar con el sistema operativo y la terminal.

### **Principales características de `process`:**

1. **Información del entorno:**

   - Proporciona detalles sobre el sistema operativo, variables de entorno y otros datos útiles.
   - Ejemplo: `process.env` contiene las variables de entorno del sistema.

2. **Control del ciclo de vida del programa:**

   - Puedes terminar el programa usando `process.exit()` o capturar eventos como `beforeExit`.

3. **Interacción con la terminal:**

   - Permite leer entradas desde la terminal (`stdin`) y escribir salidas en la terminal (`stdout`).

4. **Propiedades útiles:**
   - `process.cwd()`: Devuelve el directorio actual de trabajo.

```
      console.log(process.cwd());

```

- `process.argv`: Contiene los argumentos pasados al ejecutar el programa.
  ```
   console.log(process.argv);
   ```
- `process.platform`: Indica el sistema operativo (por ejemplo, `win32`, `linux`, `darwin`).
```
  // console.log(process.platform);
```


---

### **Ejemplos prácticos con `process`:**

#### **1. Mostrar el directorio actual (`process.cwd()`):**
```
console.log(process.cwd()); // Imprime el directorio actual de trabajo
```

#### **2. Leer argumentos de la línea de comandos (`process.argv`):**

Cuando ejecutas un programa en Node.js, puedes pasar argumentos adicionales. Estos argumentos se almacenan en `process.argv` como un array.
// Código comentado:
// console.log(process.argv);

Ejemplo de ejecución:

```bash
// Código comentado:
// node app.js nombre Juan edad 25
```


## Entrada y Salida en Node.js: `stdin` y `stdout`**

### **¿Qué son los flujos `stdin` y `stdout`?**
- **`stdin` (Standard Input):** Es el flujo de entrada estándar. En Node.js, permite leer datos ingresados por el usuario desde la terminal.
- **`stdout` (Standard Output):** Es el flujo de salida estándar. Se utiliza para mostrar resultados o mensajes en la terminal.

Estos flujos son fundamentales para crear programas interactivos en la línea de comandos.

---

### **Cómo usar `stdin` y `stdout`:**

#### **1. Leer entradas desde la terminal (`stdin`):**
El evento `data` se activa cuando el usuario ingresa datos y presiona Enter.
```
// import { stdin } from "node:process";
// stdin.on("data", (data) => {
//   const input = data.toString().trim(); // Elimina saltos de línea y espacios
//   console.log(`Ingresaste: ${input}`);
// });
```

#### **2. Mostrar salidas en la terminal (`stdout`):**
Usa `process.stdout.write()` para escribir directamente en la terminal sin agregar un salto de línea.

````
// import { stdout } from "node:process";
// stdout.write("Hola, mundo!\n");
````

---

### **Ejemplo completo: Interacción básica**
Este ejemplo muestra cómo interactuar con el usuario leyendo su nombre y saludándolo.

````

// import { stdin, stdout } from "node:process";
// stdout.write("¿Cuál es tu nombre? ");
// stdin.on("data", (data) => {
//   const name = data.toString().trim();
//   stdout.write(`Hola, ${name}!\n`);
//   process.exit(); // Finaliza el programa después de saludar
// });
````

---

## **3. El Módulo `path`**

### **¿Qué es `path`?**
El módulo `path` es un módulo nativo de Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios. Es especialmente útil para construir aplicaciones que interactúen con el sistema de archivos.

---

### **Funciones principales de `path`:**

#### **1. `path.resolve([...paths])`:**
Construye una ruta absoluta a partir de segmentos de ruta relativos.

````
// import path from "node:path";
// const absolutePath = path.resolve("folder", "file.txt");
// console.log(absolutePath); // Por ejemplo: /home/user/folder/file.txt

````

#### **2. `path.join([...paths])`:**
Une segmentos de ruta en una sola ruta normalizada.
```
// import path from "node:path";
// const joinedPath = path.join("folder", "subfolder", "file.txt");
// console.log(joinedPath); // folder/subfolder/file.txt
```

#### **3. `path.basename(path)`:**
Extrae el nombre del archivo o directorio de una ruta.
```

// import path from "node:path";
// const fileName = path.basename("/home/user/file.txt");
// console.log(fileName); // file.txt
```

#### **4. `path.extname(path)`:**
Extrae la extensión de un archivo.

```
// import path from "node:path";
// const extension = path.extname("/home/user/file.txt");
// console.log(extension); // .txt
```

---

### **Ejemplo práctico con `path`:**
Este ejemplo muestra cómo extraer información de una ruta de archivo y construir rutas absolutas.

```
// import path from "node:path";
// const filePath = "/home/user/documents/report.pdf";
// // Obtener el nombre del archivo
// const fileName = path.basename(filePath);
// console.log(`Nombre del archivo: ${fileName}`); // report.pdf
// // Obtener la extensión del archivo
// const extension = path.extname(filePath);
// console.log(`Extensión del archivo: ${extension}`); // .pdf
// // Construir una ruta absoluta
// const absolutePath = path.resolve("documents", "report.pdf");
// console.log(`Ruta absoluta: ${absolutePath}`);
```
