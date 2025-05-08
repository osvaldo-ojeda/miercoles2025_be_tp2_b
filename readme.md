## Clase 7: Fundamentos de la Web - Cliente-Servidor y Protocolo HTTP

**Objetivos:**

* Comprender la arquitectura cliente-servidor y el protocolo HTTP.
* Utilizar métodos HTTP y códigos de estado.
* Comprender qué son las APIs RESTful y cómo funcionan.

**Contenido:**

### 1. Arquitectura Cliente-Servidor: Conceptos Básicos

Imagina un restaurante. El **cliente** (tú, el comensal) hace una **petición** al **servidor** (el camarero y la cocina) para obtener un servicio (comida). El servidor procesa la petición y envía una **respuesta** al cliente (tu plato).

En el mundo de la web, la arquitectura cliente-servidor funciona de manera similar:

* **Cliente:** Una aplicación (generalmente un navegador web como Chrome, Firefox, Safari) que realiza peticiones de recursos.
* **Servidor:** Una computadora o software que recibe las peticiones del cliente, las procesa y envía las respuestas. Estas respuestas suelen ser archivos HTML, CSS, JavaScript, imágenes, videos, datos en formato JSON o XML, etc.

**Flujo típico:**

1.  El cliente (navegador) envía una **petición** al servidor (ej. `www.google.com`).
2.  El servidor recibe la petición y la procesa (busca la página solicitada).
3.  El servidor envía una **respuesta** al cliente (el código HTML de la página de Google).
4.  El cliente (navegador) interpreta la respuesta y la muestra al usuario.

### 2. Protocolo HTTP: Métodos, Códigos de Estado, Cabeceras

El **Protocolo de Transferencia de Hipertexto (HTTP)** es el lenguaje que utilizan los clientes y servidores web para comunicarse. Define cómo se formatean y transmiten los mensajes.

**Métodos HTTP (Verbos):** Indican la acción que el cliente quiere realizar en el servidor. Los más comunes son:

* **`GET`:** Solicita un recurso específico al servidor (ej. pedir una página web).
    ```
    GET /index.html HTTP/1.1
    Host: [www.example.com](https://www.example.com)
    ```
* **`POST`:** Envía datos al servidor para crear un nuevo recurso (ej. enviar un formulario de registro).
    ```
    POST /users HTTP/1.1
    Host: [www.example.com](https://www.example.com)
    Content-Type: application/json
    Content-Length: ...

    { "name": "Juan", "email": "[dirección de correo electrónico eliminada]" }
    ```
* **`PUT`:** Envía datos para actualizar un recurso existente en el servidor (ej. actualizar la información de un usuario).
    ```
    PUT /users/123 HTTP/1.1
    Host: [www.example.com](https://www.example.com)
    Content-Type: application/json
    Content-Length: ...

    { "email": "[dirección de correo electrónico eliminada]", "age": 30 }
    ```
* **`DELETE`:** Solicita al servidor que elimine un recurso específico (ej. eliminar un usuario).
    ```
    DELETE /users/123 HTTP/1.1
    Host: [www.example.com](https://www.example.com)
    ```

**Códigos de Estado HTTP:** Son códigos de tres dígitos que el servidor envía en la respuesta para indicar el resultado de la petición. Se dividen en categorías:

* **1xx (Informativo):** La petición fue recibida y el proceso continúa.
* **2xx (Éxito):** La petición fue recibida, entendida y aceptada.
    * **`200 OK`:** La petición tuvo éxito y la respuesta contiene el recurso solicitado.
    * **`201 Created`:** La petición tuvo éxito y se creó un nuevo recurso.
* **3xx (Redirección):** Se necesitan acciones adicionales para completar la petición.
    * **`301 Moved Permanently`:** El recurso solicitado se ha movido permanentemente a una nueva URL.
    * **`302 Found` (o `307 Temporary Redirect`):** El recurso se encuentra temporalmente en otra URL.
* **4xx (Error del Cliente):** La petición contiene errores y no puede ser procesada.
    * **`400 Bad Request`:** La petición no pudo ser entendida por el servidor debido a una sintaxis inválida.
    * **`401 Unauthorized`:** Se requiere autenticación para acceder al recurso.
    * **`403 Forbidden`:** El servidor entiende la petición pero se niega a autorizarla.
    * **`404 Not Found`:** El servidor no pudo encontrar el recurso solicitado.
* **5xx (Error del Servidor):** El servidor encontró un error y no pudo completar la petición.
    * **`500 Internal Server Error`:** El servidor encontró una condición inesperada que le impidió cumplir la petición.
    * **`503 Service Unavailable`:** El servidor no está listo para manejar la petición (puede estar sobrecargado o en mantenimiento).

**Cabeceras HTTP (Headers):** Proporcionan información adicional sobre la petición o la respuesta. Se envían tanto del cliente al servidor como del servidor al cliente. Algunos ejemplos:

* `Host`: Especifica el nombre de dominio del servidor al que se está enviando la petición.
* `Content-Type`: Indica el tipo de contenido del cuerpo de la petición o la respuesta (ej. `application/json`, `text/html`).
* `Content-Length`: Especifica el tamaño del cuerpo de la petición o la respuesta en bytes.
* `User-Agent`: Identifica el navegador o la aplicación cliente que realiza la petición.
* `Authorization`: Contiene las credenciales de autenticación del cliente.

### 3. ¿Qué es una API?

Una **Interfaz de Programación de Aplicaciones (API)** es un conjunto de reglas y especificaciones que permiten que diferentes aplicaciones de software se comuniquen e intercambien datos entre sí. Piensa en una API como un **intermediario**. En lugar de que una aplicación acceda directamente a la base de datos de otra, interactúa con la API, que define cómo se pueden solicitar y recibir los datos.

**Tipos de APIs:**

* APIs RESTful: Basadas en el estándar REST (Representational State Transfer).
* APIs SOAP: Basadas en XML y más rígidas.
* APIs GraphQL: Permiten consultas más flexibles.

**Ejemplos cotidianos de APIs:**

* Una aplicación móvil que muestra el pronóstico del tiempo utiliza una API de un servicio meteorológico para obtener los datos.
* Una aplicación de redes sociales que te permite compartir contenido en otras plataformas utiliza las APIs de esas plataformas.

### 4. REST (Representational State Transfer)

**REST** es un estilo de arquitectura para diseñar APIs que se centra en la transferencia de representaciones de recursos. Se basa en los siguientes principios clave:

* **Arquitectura Cliente-Servidor:** Separación clara entre el cliente que realiza las peticiones y el servidor que las responde.
* **Sin Estado (Stateless):** Cada petición del cliente al servidor debe contener toda la información necesaria para entender la petición. El servidor no guarda ningún estado sobre las sesiones del cliente entre peticiones.
Por ejemplo, si un usuario inicia sesión en una aplicación, el servidor no recuerda que el usuario está autenticado. En su lugar, el cliente debe enviar un token o credenciales con cada solicitud para demostrar su identidad.
Esto mejora la escalabilidad porque el servidor no necesita almacenar información de sesión, lo que permite manejar más usuarios simultáneamente.
* **Cacheable:** Las respuestas deben ser etiquetadas como cacheables o no para que los clientes y los intermediarios puedan almacenar en caché las respuestas y mejorar la eficiencia.
* **Interfaz Uniforme:** La comunicación entre el cliente y el servidor se realiza a través de una interfaz consistente, utilizando los métodos HTTP estándar, identificadores de recursos (URLs), representaciones de recursos (ej. JSON, XML) y enlaces.
* **Sistema en Capas (Layered System):** La arquitectura puede estar compuesta por múltiples capas (cliente, servidor, proxies, etc.), y cada capa no necesita conocer los detalles de las otras capas.
* **Código Bajo Demanda (Code-On-Demand) (Opcional):** El servidor puede extender la funcionalidad del cliente enviando código ejecutable (ej. JavaScript).

### 5. APIs RESTful

Una **API RESTful** es una API que implementa los principios de la arquitectura REST. Son ampliamente utilizadas para construir servicios web debido a su simplicidad, escalabilidad y facilidad de integración.

**Características comunes de las APIs RESTful:**

* Uso de URLs (URI) para identificar recursos: Cada recurso (usuario, producto, orden, etc.) tiene una URL única.
    * Ejemplo: `/users` (lista de usuarios), `/users/123` (información del usuario con ID 123).
* Uso de métodos HTTP para realizar acciones: `GET` (obtener), `POST` (crear), `PUT` (actualizar), `DELETE` (eliminar).
* Uso de formatos de datos estándar: Generalmente JSON (JavaScript Object Notation) para la transferencia de datos debido a su ligereza y facilidad de parseo. También se puede usar XML.
* Respuestas con códigos de estado HTTP: Para indicar el resultado de la petición.
* Sin estado (Stateless): Cada petición del cliente es independiente y contiene toda la información necesaria.

### 6. Diferencia entre API REST y RESTful

La distinción a menudo es sutil y en la práctica los términos se usan de manera intercambiable. Sin embargo, se podría decir que:

* **API REST:** Se refiere a cualquier API que sigue los principios de la arquitectura REST.
* **API RESTful:** Se enfatiza que la API implementa *completamente* y de forma *pura* todos los principios de REST.

En la práctica, la mayoría de las APIs que se autodenominan "RESTful" intentan adherirse lo más posible a los principios de REST, aunque algunas pueden tener ciertas desviaciones.

### 7. ¿Qué son los módulos `http`, `http2` y `https` y cuáles son sus diferencias?

Node.js proporciona módulos nativos para trabajar con diferentes versiones del protocolo HTTP:

* **`http`:** Este es el módulo principal para crear servidores y clientes HTTP/1.1. Es el módulo más básico y ampliamente utilizado para la mayoría de las aplicaciones web.
* **`http2`:** Este módulo implementa el protocolo HTTP/2, una versión más reciente de HTTP que ofrece mejoras significativas en rendimiento, como multiplexación (enviar múltiples peticiones/respuestas simultáneamente sobre la misma conexión), compresión de encabezados y priorización de streams. Requiere una conexión segura (TLS/SSL).
* **`https`:** Este módulo proporciona funcionalidades similares al módulo `http` pero para trabajar con conexiones seguras a través de TLS/SSL (Transport Layer Security/Secure Sockets Layer). Se utiliza para crear servidores y clientes HTTPS (HTTP sobre TLS/SSL). Internamente, utiliza el módulo `http` para la lógica HTTP y añade la capa de seguridad.

**Diferencias clave:**

| Característica        | `http` (HTTP/1.1) | `http2`           | `https` (HTTP/1.1 sobre TLS/SSL) |
| :-------------------- | :---------------- | :---------------- | :------------------------------- |
| Protocolo           | HTTP/1.1          | HTTP/2            | HTTP/1.1                         |
| Multiplexación        | No                | Sí                | No                               |
| Compresión de Headers | No                | Sí (HPACK)        | No                               |
| Priorización          | No                | Sí                | No                               |
| Seguridad             | No (implícita)    | Requiere TLS/SSL  | Sí (implícita)                   |
| Uso                 | General para HTTP | Aplicaciones que   | Conexiones seguras (HTTPS)       |
| Módulo Node.js       | `http`            | `http2`           | `https`                          |

### 8. ¿Qué me conviene para trabajar localmente? ¿Se puede trabajar con cualquiera de los tres? ¿Se trabaja de la misma manera?

Para trabajar **localmente**, el módulo **`http`** es generalmente suficiente y el más sencillo de configurar para la mayoría de las pruebas y desarrollos iniciales. No necesitas inherentemente la seguridad de `https` en un entorno local aislado, a menos que estés probando funcionalidades específicas que requieran HTTPS (como ciertas APIs de navegador o autenticación).

Se **puede trabajar con cualquiera de los tres** módulos localmente:

* **`http`:** Para servidores HTTP básicos sin cifrado.
* **`https`:** Para simular un entorno HTTPS local. Esto requiere la generación de certificados SSL/TLS auto-firmados o el uso de herramientas como `mkcert`.
* **`http2`:** También se puede usar localmente, pero requiere configurar HTTPS primero, ya que HTTP/2 se implementa sobre TLS/SSL en la mayoría de los navegadores.

**¿Se trabaja de la misma manera?**

No, la forma de trabajar varía ligeramente:

* **`http`:** La creación de un servidor es directa.
* **`https`:** Requiere la configuración de las opciones de TLS/SSL, incluyendo la especificación de certificados y claves.
* **`http2`:** La API es un poco diferente a `http` y `https`, ya que maneja streams y headers de forma distinta para aprovechar las características de HTTP/2.


### 9. Crear un servidor con el módulo `http` de Node.js

```javascript
// Importar el módulo http
const http = require('http');

// Definir el host y el puerto en el que el servidor escuchará
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Crear el servidor
const server = http.createServer((req, res) => {
  // `req` (request): Objeto que representa la petición del cliente
  // `res` (response): Objeto que se utiliza para enviar la respuesta al cliente

  // Establecer las cabeceras de la respuesta
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200; // Código de estado OK

  // Enviar el cuerpo de la respuesta
  res.end('¡Hola desde el servidor de Node.js!\n');
});

// Hacer que el servidor escuche en el host y puerto especificados
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
`````

¿Por qué se envían los datos en chunks?

Eficiencia de la red: Dividir los datos en chunks más pequeños permite una transmisión más eficiente a través de la red. Los chunks pueden enviarse en paralelo o intercalarse con otros datos, lo que reduce la latencia y mejora el rendimiento.
Manejo de grandes cantidades de datos: Si el cliente envía una gran cantidad de datos (por ejemplo, un archivo grande), el servidor no tiene que esperar a que lleguen todos los datos antes de empezar a procesarlos. Puede empezar a procesar los chunks a medida que llegan, lo que reduce el consumo de memoria y mejora la capacidad de respuesta del servidor.
Transmisión en tiempo real: Los chunks permiten la transmisión de datos en tiempo real. Por ejemplo, en una aplicación de streaming de video, el servidor puede enviar los datos del video en chunks a medida que se van generando, y el cliente puede empezar a reproducirlos antes de que se haya descargado el video completo.
Cómo se manejan los chunks en Node.js

En Node.js, el objeto req (que representa la petición del cliente) es un flujo de lectura (Readable Stream). Esto significa que puedes leer los datos de la petición de forma asíncrona, a medida que los chunks van llegando.

Para leer los datos de la petición, se utilizan los eventos del flujo de lectura:

data event: Este evento se emite cada vez que llega un nuevo chunk de datos. El callback de este evento recibe el chunk de datos como argumento.
end event: Este evento se emite cuando se han recibido todos los chunks de datos y se ha completado la transmisión.
En el código del ejercicio, esto se ve así:

JavaScript

let body = '';
req.on('data', (chunk) => {
    body += chunk;
});
req.on('end', () => {
    // Aquí se procesan todos los datos recibidos
    // La variable 'body' contiene la concatenación de todos los chunks
    try {
        const nuevaTareaData = JSON.parse(body);
        // ...
    } catch (error) {
        // ...
    }
});