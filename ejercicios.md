# Ejercicio 1: Simulación de una llamada a una API

## Descripción
En este ejercicio, simularás una llamada a una API que devuelve datos después de un cierto tiempo. Deberás manejar tanto el caso de éxito como el caso de error utilizando **promesas**.

Tu tarea consiste en:

1. Crear una función llamada `obtenerDatos` que simule una llamada a una API. La función debe:
   - Recibir un parámetro `exitosa` (booleano).
   - Si `exitosa` es `true`, la promesa debe resolverse después de **2 segundos** con un objeto que contenga datos ficticios.
   - Si `exitosa` es `false`, la promesa debe rechazarse después de **2 segundos** con un mensaje de error.

2. Usar `.then` y `.catch` para manejar el resultado de la promesa:
   - En el caso de éxito, muestra los datos en la consola.
   - En el caso de error, muestra el mensaje de error en la consola


# Ejercicio: Consulta a la API de Rick and Morty

## Descripción

Tu tarea consiste en:

1. Crear una función llamada `obtenerPersonajes` que realice una solicitud HTTP GET a la siguiente URL: https://rickandmortyapi.com/api/character

2. Usar la función `fetch` para realizar la solicitud.
- Si la solicitud es exitosa:
  - Extraer los nombres de los primeros 5 personajes y mostrarlos en la consola.
- Si ocurre un error (por ejemplo, problemas de conexión):
  - Capturar el error y mostrar un mensaje adecuado en la consola.
