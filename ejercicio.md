# Sistema de Gestión de Archivos con `fs.promises`

**Instrucciones Generales:**
- Resuelve los siguientes ejercicios utilizando **Node.js** y el módulo `fs.promises`.
- Asegúrate de manejar correctamente los errores en cada ejercicio.
- Usa `.then/.catch o async/await` para trabajar con las promesas.
- Organiza tu código en funciones claras y bien nombradas.
- Entrega tu código completo al finalizar.

---

## **Consigna: Crear un Sistema de Gestión de Archivos**

Tu tarea es implementar un sistema básico de gestión de archivos utilizando el módulo `fs.promises`. Cada ejercicio te guiará para construir funcionalidades que se conectan entre sí. Sigue las instrucciones paso a paso.

---

### **Ejercicio 1: Crear un Directorio**
Crea una función llamada `crearDirectorio` que reciba la ruta de un directorio como parámetro y genere un nuevo directorio en esa ubicación. Si el directorio ya existe, muestra un mensaje adecuado.

**Requisitos:**
- Usa `fs.promises.mkdir`.

---

### **Ejercicio 2: Crear un Archivo en el Directorio**
Crea una función llamada `crearArchivo` que reciba la ruta de un archivo dentro del directorio y escriba un mensaje inicial en el archivo. Si el archivo ya existe, muestra un mensaje adecuado.

**Requisitos:**
- Usa `fs.promises.writeFile`.

---

### **Ejercicio 3: Leer el Contenido del Archivo**
Crea una función llamada `leerArchivo` que lea y muestre el contenido del archivo en la consola. Si el archivo no existe, muestra un mensaje adecuado.

**Requisitos:**
- Usa `fs.promises.readFile`.


---

### **Ejercicio 4: Agregar Contenido al Archivo**
Crea una función llamada `agregarContenido` que reciba la ruta del archivo y un mensaje como parámetros, y agregue el mensaje al final del archivo sin sobrescribir su contenido. Si el archivo no existe, muestra un mensaje adecuado.

**Requisitos:**
- Usa `fs.promises.appendFile`.


---

### **Ejercicio 5: Listar Archivos en el Directorio**
Crea una función llamada `listarArchivos` que liste todos los archivos contenidos en el directorio. Si el directorio está vacío o no existe, muestra un mensaje adecuado.

**Requisitos:**
- Usa `fs.promises.readdir`.
- Si el directorio contiene archivos, muestra una lista numerada de los nombres de los archivos.


---

### **Ejercicio 6: Eliminar el Archivo**
Crea una función llamada `eliminarArchivo` que elimine el archivo especificado. Si el archivo no existe, muestra un mensaje adecuado.

**Requisitos:**
- Usa `fs.promises.unlink`.

---

### **Bonus: Integración Completa**
Crea una función principal llamada `gestionarSistema` que integre todas las funciones anteriores en un flujo lógico. Por ejemplo:
1. Crea un directorio.
2. Crea un archivo dentro del directorio.
3. Lee el contenido del archivo.
4. Agrega contenido al archivo.
5. Lista los archivos en el directorio.
6. Elimina el archivo.

Asegúrate de que el flujo sea claro y que manejes los errores en cada paso.

---
