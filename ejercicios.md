# CLI en Node.js: Consignas y Ejemplos

## **Objetivo**
Crea un **CLI (Interfaz de Línea de Comandos)** en Node.js que permita a los usuarios interactuar con él mediante entradas de teclado y mostrar los resultados en la pantalla. El CLI debe ser capaz de ejecutar los siguientes comandos:

1. **`pwd`**: Muestra el directorio actual.
2. **`date`**: Muestra la fecha y hora actual.
3. **`ls`**: Muestra la lista de archivos y carpetas en el directorio actual.  
   - Opcionalmente, soporta la opción `-l` para mostrar detalles adicionales (por ejemplo, si es un archivo o directorio).
4. **`cat <archivo>`**: Muestra el contenido de un archivo especificado.
5. **`echo <texto>`**: Muestra el texto especificado en la pantalla.
6. **`touch <nombre_archivo>`**: Crea un nuevo archivo vacío con el nombre especificado.

---

## **Requisitos**

1. **Entrada/Salida:**
   - Utiliza el módulo `process.stdin` para leer las entradas del usuario desde la terminal.
   - Utiliza el módulo `process.stdout` para mostrar los resultados en la pantalla.

2. **Interacción con el Sistema de Archivos:**
   - Utiliza el módulo `fs` (preferiblemente `fs/promises`) para interactuar con el sistema de archivos.
   - Utiliza el módulo `path` para trabajar con rutas de archivos y carpetas de manera segura.

3. **Manejo de Comandos:**
   - El CLI debe ser capaz de manejar comandos con opciones y argumentos.
   - Ejemplo:
     - `ls -l` muestra detalles adicionales sobre los archivos.
     <!-- - `cat archivo_con_espacios.txt` maneja nombres de archivo con espacios. -->

4. **Manejo de Errores:**
   - Asegúrate de que el CLI maneje errores de manera adecuada:
     - Si un comando no existe, muestra un mensaje claro y una lista de comandos disponibles.
     - Si falta un argumento obligatorio, muestra un mensaje indicando qué se necesita.
     - Si ocurre un error (por ejemplo, archivo no encontrado), muestra un mensaje descriptivo.

5. **Entradas Especiales:**
   - Asegúrate de que el CLI sea capaz de manejar entradas con espacios y caracteres especiales.
   - Implementa un comando `exit` para permitir que el usuario salga del programa limpiamente.

---

## **Ejemplos de Entradas y Salidas**

### **1. Comando `pwd`**
```bash
> $ pwd
/home/user/projects/cli
> $ date
Fri Oct 27 2023 14:30:00 GMT+0000
> $ ls
index.js
package.json
README.md
> $ cat file1.txt
Este es el contenido del archivo file1.txt
> $ cat non_existent_file.txt
Error: Archivo no encontrado: non_existent_file.txt
> $ echo Hola Mundo
Hola Mundo
> $ echo Este es un texto con espacios
Este es un texto con espacios
> $ touch newfile.txt
Archivo creado: newfile.txt
> $ invalidcommand
Error: Comando desconocido: invalidcommand
Comandos disponibles: pwd, date, ls, cat, echo, touch
> $ exit
$
```