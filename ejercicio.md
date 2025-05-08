# Clase 7: Ejercicio Práctico - API RESTful de Tareas

**Consigna:**

Crea un servidor en Node.js utilizando el módulo `http` para gestionar una lista de tareas pendientes (To-Do). El servidor deberá ser capaz de:

 **Obtener la lista completa de tareas (GET a `/tareas`)**: 
 
 * La respuesta debe ser un array de objetos JSON, donde cada objeto represente una tarea y tenga las propiedades `id` (string - UUID), `descripcion` (string) y `completada` (booleano).


 **Crear una nueva tarea (POST a `/tareas`)**: 
 
 * El cliente enviará en el cuerpo de la petición un objeto JSON con la propiedad `descripcion`. El servidor deberá generar un nuevo `id` único (puedes usar UUID), añadir la tarea a la lista (inicialmente como `no completada`) y responder con la tarea creada y un código de estado `201 Created`.

 **Obtener una tarea específica (GET a `/tareas/:id`)**:
 
  * El servidor deberá buscar la tarea con el `id` proporcionado en la URL. Responderá con la tarea encontrada y un código de estado `200 OK`, o con un código `404 Not Found` si la tarea no existe.

 **Actualizar el estado de una tarea (PUT a `/tareas/:id`)**: 
 
 * El cliente enviará en el cuerpo de la petición un objeto JSON con la propiedad `completada` (booleano). El servidor deberá buscar la tarea con el `id` proporcionado en la URL y actualizar su estado. Responderá con la tarea actualizada y un código de estado `200 OK`, o con un código `404 Not Found` si la tarea no existe.

 **Eliminar una tarea (DELETE a `/tareas/:id`)**:
 
  * El servidor deberá buscar la tarea con el `id` proporcionado en la URL y eliminarla de la lista. Responderá con un código de estado `204 No Content` si la tarea fue eliminada con éxito, o con un código `404 Not Found` si la tarea no existe.

  * curl http://localhost:3000/tareas
  * curl -X POST -H "Content-Type: application/json" -d '{"descripcion": "Comprar leche"}' http://localhost:3000/tareas
  * curl http://localhost:3000/tareas/tu-id-aqui
  *curl -X PUT -H "Content-Type: application/json" -d '{"completada": true}' http://localhost:3000/tareas/tu-id-aqui
* curl -X DELETE http://localhost:3000/tareas/tu-id-aqui