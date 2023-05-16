# API RESTful de Lista de Tareas con Autenticación JWT
Esta es una API RESTful simple creada utilizando Node.js, Express y MySQL que permite realizar operaciones CRUD en una lista de tareas. También incluye funcionalidad de autenticación utilizando JSON Web Tokens (JWT) para los endpoints de registro, inicio de sesión y cierre de sesión.

se utiliza el formato json para recibir y enviar informacion

## Nota:

 *En el proyecto se encuentra el script que genera las tablas de la base de datos*

## Requisitos
Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js (https://nodejs.org)
- npm (normalmente se instala junto con Node.js)


## Configuración
1. Clona este repositorio o descarga los archivos en tu máquina local.
2. Abre una terminal y navega hasta el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:
    - npm install
4. Crea un archivo .env en el directorio raíz del proyecto y agrega las siguientes variables de entorno:
    - PORT=PORT
    - HOST=HOST
    - USER=USER
    - PASSWORD=PASSWORD
    - DATABASE=DATABASE
    - SECRET=SECRET


## Uso
1. En la terminal, asegúrate de estar en el directorio raíz del proyecto.
2. Ejecuta el siguiente comando para iniciar el servidor:
    npm run dev
3. La API estará disponible en http://localhost:3000 (o el puerto que hayas configurado).
4. Puedes probar los diferentes endpoints de la API utilizando herramientas como Postman o cURL. A continuación, se muestra una descripción de los endpoints disponibles.

## Endpoints

**Autenticación Usuarios**

- POST /crear-usuario &nbsp;&nbsp;&nbsp;&nbsp; *Registra un nuevo usuario.*
- POST /login-usuario &nbsp;&nbsp;&nbsp;&nbsp; *Inicia sesión y obtiene un token JWT*
- GET /logout &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Cierra la sesión y revoca el token JWT.*

**Operaciones CRUD de la Lista de Tareas**

- POST /crear-tarea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Crea un nuevo elemento en la lista de tareas*
- GET /listar-tarea &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Recupera todos los elementos de la lista de tareas.*
- GET /listar-tarea-id/:id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *Recupera un elemento específico de la lista de tareas por el parametro ID en la url.*
- DELETE /eliminar-tarea &nbsp;&nbsp;&nbsp;&nbsp; *Elimina una tarea específica de la lista de tareas por ID. El ID de la tarea debe proporcionarse en el cuerpo de la petición en formato JSON*

