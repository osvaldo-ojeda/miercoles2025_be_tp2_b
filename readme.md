# Clase 4: Promesas en JavaScript

## Objetivos

- Comprender qué son las promesas y cómo funcionan.
- Aplicar promesas para manejar operaciones asíncronas.
- Utilizar `then`, `catch` y `finally` para gestionar resultados y errores.
- Implementar funciones que retornen promesas y encadenarlas eficientemente.
- Aprender a usar `async/await` para simplificar el manejo de promesas.

## Contenido

### 1. Introducción a las promesas

#### ¿Qué son las promesas?
Las promesas en JavaScript son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Son una forma más limpia y eficiente de manejar operaciones asíncronas en comparación con los callbacks.

#### Estados de una promesa:
1. **Pending (pendiente):** La promesa aún no se ha resuelto ni rechazado.
2. **Fulfilled (cumplida):** La promesa se ha resuelto exitosamente.
3. **Rejected (rechazada):** La promesa ha fallado.

#### Ventajas de usar promesas frente a callbacks:
- Evitan el "callback hell" (anidación excesiva de callbacks).
- Facilitan el manejo de errores.
- Permiten encadenar operaciones de manera clara y legible.

---

### 2. Métodos principales de las promesas

#### `.then()`
El método `.then()` se utiliza para manejar el resultado exitoso de una promesa.
```javascript
// Ejemplo de uso de .then()
const promesa = new Promise((resolve, reject) => {
  resolve("¡Éxito!");
});

promesa.then((resultado) => {
  console.log(resultado); // Imprime: ¡Éxito!
});
```
#### `.catch()`
El método `.catch()` se utiliza para capturar y manejar errores.
```javascript
// Ejemplo de uso de .catch()
const promesa = new Promise((resolve, reject) => {
  reject("¡Error!");
});

promesa.catch((error) => {
  console.error(error); // Imprime: ¡Error!
});
```

#### `.finally()`
El método `.finally()` se ejecuta independientemente de si la promesa se resuelve o se rechaza.
```javascript
// Ejemplo de uso de .finally()
const promesa = new Promise((resolve, reject) => {
  resolve("¡Éxito!");
});

promesa
  .then((resultado) => console.log(resultado)) // Imprime: ¡Éxito!
  .catch((error) => console.error(error))
  .finally(() => console.log("Finalizado.")); // Imprime: Finalizado.
```
---

### 3. Creación de promesas personalizadas
```javascript
// Ejemplo de creación de una promesa personalizada
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("Operación exitosa.");
  } else {
    reject("Operación fallida.");
  }
});

miPromesa
  .then((mensaje) => console.log(mensaje)) // Imprime: Operación exitosa.
  .catch((error) => console.error(error));
```
---

### 4. Encadenamiento de promesas
```javascript
// Ejemplo de encadenamiento de promesas
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Datos obtenidos"), 1000);
  });
};

obtenerDatos()
  .then((datos) => {
    console.log(datos); // Imprime: Datos obtenidos
    return datos.toUpperCase(); // Transforma los datos
  })
  .then((datosTransformados) => {
    console.log(datosTransformados); // Imprime: DATOS OBTENIDOS
  })
  .catch((error) => console.error(error));
```
---

### 5. Uso de `async/await`
```javascript
// Ejemplo básico de async/await
const obtenerDatosAsync = async () => {
  try {
    const datos = await new Promise((resolve) => {
      setTimeout(() => resolve("Datos obtenidos"), 1000);
    });
    console.log(datos); // Imprime: Datos obtenidos
  } catch (error) {
    console.error(error);
  }
};

obtenerDatosAsync();
```
#### Diferencias entre `async/await` y `.then/.catch`
- `async/await` hace que el código sea más legible y fácil de entender.
- `.then/.catch` es más adecuado para casos donde necesitas encadenar múltiples operaciones.

#### Buenas prácticas al usar `async/await`
- Siempre usa `try...catch` para manejar errores.
- No abuses de `await` dentro de bucles; considera usar `Promise.all()` para ejecutar múltiples promesas en paralelo.

