# CTHUB

## Descripción del Proyecto
El Club de Crecimiento Tecnológico busca fomentar el aprendizaje y la colaboración en el ámbito tecnológico. Este proyecto tiene como objetivo desarrollar una plataforma web que permita a los usuarios acceder a contenido exclusivo del club, como cursos, dinámicas y actividades, además de mantenerlos informados con una sección de noticias.

## Tecnologías Utilizadas
- **Backend**: FastAPI
- **Frontend**: React
- **Base de Datos**: PostgreSQL
- **Autenticación**: JWT
- **Despliegue**: Docker, Nginx

## Objetivos del Proyecto
### Objetivo General
Desarrollar una plataforma web para centralizar la gestión de contenidos, actividades y noticias del Club de Crecimiento Tecnológico.

### Objetivos Específicos
- Permitir el registro e inicio de sesión de usuarios (miembros del club).
- Gestionar contenido educativo, como cursos y actividades, de forma organizada.
- Facilitar la entrega y revisión de tareas o dinámicas asignadas por los administradores del club.
- Incorporar una sección de noticias para anunciar eventos, nuevas dinámicas y actualizaciones del club.
- Proveer una experiencia de usuario moderna e intuitiva con interfaces responsivas.

## Características del Proyecto
### 1. Autenticación de Usuarios
- Registro, inicio de sesión y recuperación de contraseñas.
- Roles de usuario: Administrador y Usuario Miembro.

### 2. Gestión de Cursos y Actividades
- Los administradores podrán crear y gestionar cursos y actividades.
- Los usuarios podrán visualizar contenido asociado a los cursos en los que estén inscritos.

### 3. Entrega de Tareas
- Sistema para que los usuarios puedan subir archivos o completar actividades asignadas.
- Los administradores podrán revisar y calificar las entregas.

### 4. Sección de Noticias
- Publicación de artículos relacionados con el club.
- Visualización de noticias en formato de lista o detalle.

### 5. Interfaz de Usuario (Frontend)
- Navegación intuitiva y diseño atractivo con React.
- Compatibilidad con dispositivos móviles y navegadores modernos.

## Instalación y Configuración
1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/usuario/proyecto_club.git
   cd proyecto_club
   ```

2. **Configurar el Backend (FastAPI):**
   ```sh
   cd backend
   python -m venv venv
   source venv/bin/activate  # En Windows usar: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

3. **Configurar el Frontend (React):**
   ```sh
   cd frontend
   npm install
   npm start
   ```

4. **Configurar la Base de Datos (PostgreSQL):**
   ```sh
   docker-compose up -d
   ```

## Contribución
Las contribuciones al proyecto son bienvenidas. Para colaborar:
1. Hacer un fork del repositorio.
2. Crear una rama con la nueva funcionalidad o mejora.
3. Enviar un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT.

