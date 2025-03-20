  # Clase 1: Introducción a Git
 
  ## Objetivos
  Al finalizar esta clase, los estudiantes serán capaces de:
  - Entender qué es Git y por qué es importante en el control de versiones.
  - Configurar Git en su entorno local.
  - Usar los comandos básicos de Git.
  - Trabajar con ramas y repositorios remotos.
 
  ---
 
  ## Contenido de la Clase
 
  ### 1. ¿Qué es Git y Control de Versiones?
  Git es un sistema de control de versiones distribuido que permite rastrear cambios en el código y colaborar en proyectos.
  El control de versiones permite:
   Registrar el historial de cambios en un proyecto.
   Volver a versiones anteriores del código.
   Colaborar con otros desarrolladores de manera eficiente.
 
  ---
 
  ### 2. Instalación y Configuración Inicial
 
  #### a) Instalar Git
  Descarga e instala Git desde [https://git-scm.com](https://git-scm.com).
  Verifica la instalación ejecutando:
  ```
  git --version
  ```
 
  #### b) Configuración Global
  Configura tu nombre y correo electrónico:
  ```
  git config --global user.name "Tu Nombre"
  git config --global user.email "tu.correo@example.com"
  ```
  Verifica la configuración:
  ```
  git config --list
  ```
 
  #### c) Configurar Visual Studio Code como Editor
  Instala Visual Studio Code desde [https://code.visualstudio.com](https://code.visualstudio.com).
  Configúralo como editor predeterminado:
  ```
  git config --global core.editor "code --wait"
  ```
 
  #### d) Configurar \`core.autocrlf\`
  Para Windows:
  ```
  git config --global core.autocrlf true
  ```
  Para macOS/Linux:
  ```
  git config --global core.autocrlf input
  ```
 
  ---
 
  ### 3. Comandos Básicos de Git
 
  #### a) Inicializar un Repositorio
  ```
  git init
  ```
  Este comando crea un nuevo repositorio Git en el directorio actual.
 
  #### b) Ver el Estado
  ```
  git status
  ```
   Muestra el estado de los archivos en el directorio de trabajo y el área de preparación.
   Los archivos pueden estar en uno de los siguientes estados:
   Untracked: Archivos que Git no está rastreando.
   Modified: Archivos que han sido modificados pero aún no se han añadido al área de preparación.
   Staged: Archivos que han sido añadidos al área de preparación y están listos para ser confirmados.
   Committed: Archivos que han sido confirmados y guardados en el repositorio.
 
  #### c) Añadir Archivos
  Agregar un archivo específico:
  ```
  git add nombre_del_archivo
  ```
  Agregar todos los archivos:
  ```
  git add .
  ```
   El comando \`git add\` añade archivos al área de preparación, preparándolos para ser confirmados.
   El archivo \`.gitignore\` se utiliza para especificar archivos y directorios que Git debe ignorar.
 
  #### d) Realizar un Commit
  ```
  git commit -m "Mensaje descriptivo"
  ```
  Un commit es una instantánea de los cambios realizados en el código. Es la unidad básica de control de versiones en Git.
 
  #### e) Ver el Historial
  ```
  git log
  ```
  Versión resumida:
  ```
  git log --oneline
  ```
 
  ---
 
  ### 4. Trabajo con Ramas
 
  #### a) Crear una Rama
  ```
  git branch nombre_de_la_rama
  ```
 
  #### b) Cambiar de Rama
  ```
  git checkout nombre_de_la_rama
  ```
  O crear y cambiar de rama:
  ```
  git checkout -b nombre_de_la_rama
  ```
 
  #### c) Fusionar Ramas
  ```
  git merge nombre_de_la_rama
  ```
  Este comando integra los cambios de \`nombre_de_la_rama\` en la rama actual.
   Conflictos de fusión: Ocurren cuando Git no puede resolver automáticamente los cambios. Se deben resolver manualmente.
 
  #### d) Eliminar una Rama
  ```
  git branch -d nombre_de_la_rama
  ```
 
  ---
 
  ### 5. Uso de Repositorios Remotos
 
  #### a) Conectar un Repositorio Local a GitHub/GitLab
  Conectar el repositorio local al remoto:
  ```
  git remote add origin [https://github.com/usuario/repositorio.git](https://github.com/usuario/repositorio.git)
  ```
 
  #### b) Subir Cambios al Repositorio Remoto
  ```
  git push -u origin main
  ```
 
  #### c) Clonar un Repositorio Remoto
  ```
  git clone [https://github.com/usuario/repositorio.git](https://github.com/usuario/repositorio.git)
  ```
 
  #### d) Actualizar el Repositorio Local
  ```
  git pull origin main
  ```
 
  ---
 
  ### 6. Ejercicio Práctico
 
  #### Actividad 1: Configuración Inicial
  1.  Instala Git en tu computadora.
  2.  Configura tu nombre y correo electrónico globalmente.
  3.  Configura Visual Studio Code como editor predeterminado de Git.
  4.  Configura \`core.autocrlf\` según tu sistema operativo.
 
  #### Actividad 2: Crear un Repositorio Local
  1.  Crea una carpeta llamada \`mi-primer-repositorio\`.
  2.  Inicializa un repositorio Git dentro de la carpeta:
  \`\`\`
  git init
  \`\`\`
  3.  Crea un archivo llamado \`README.md\` con el siguiente contenido:
  \`\`\`markdown
  # Mi Primer Repositorio
  Este es mi primer repositorio en Git.
  \`\`\`
  4.  Añade el archivo al staging area y realiza un commit:
  \`\`\`
  git add README.md
  git commit -m "Añadir README inicial"
  \`\`\`
 
  #### Actividad 3: Trabajar con Ramas
  1.  Crea una nueva rama llamada \`feature/nueva-funcionalidad\`:
  \`\`\`
  git checkout -b feature/nueva-funcionalidad
  \`\`\`
  2.  Modifica el archivo \`README.md\` añadiendo una nueva línea:
  \`\`\`markdown
  ## Nueva Funcionalidad
  Esta es una nueva funcionalidad en desarrollo.
  \`\`\`
  3.  Realiza un commit:
  \`\`\`
  git add README.md
  git commit -m "Añadir sección de nueva funcionalidad"
  \`\`\`
  4.  Cambia a la rama principal (\`main\`) y fusiona la rama:
  \`\`\`
  git checkout main
  git merge feature/nueva-funcionalidad
  \`\`\`
 
  #### Actividad 4: Conectar con GitHub
  1.  Crea un repositorio en GitHub.
  2.  Conecta tu repositorio local al repositorio remoto:
  \`\`\`
  git remote add origin https://github.com/usuario/repositorio.git
  \`\`\`
  3.  Sube los cambios a GitHub:
  \`\`\`
  git push -u origin main
  \`\`\`
 
  #### Actividad 5: Resolver un conflicto de fusión
  1. Modifica el archivo README.md en la rama main, y realiza un commit.
  2. Modifica la misma linea del archivo README.md en la rama feature/nueva-funcionalidad, y realiza un commit.
  3. Intenta realizar un merge de la rama feature/nueva-funcionalidad a la rama main.
  4. Resuelve el conflicto generado.
  5. Realiza el commit del merge.
 
  #### Actividad 6: Revertir un commit.
  1. Realiza un commit en la rama main.
  2. Utiliza el comando git revert para deshacer el commit realizado.
  3. Realiza un push de los cambios al repositorio