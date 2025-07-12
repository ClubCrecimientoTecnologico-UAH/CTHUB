# CTHub - Plataforma Central del Club de Crecimiento Tecnológico

🚀 **Descripción del Proyecto**

CTHub es la plataforma principal del Club Crecimiento Tecnológico de la Universidad Alejandro de Humboldt. Su propósito es servir como punto de entrada para los usuarios y redirigirlos hacia distintas plataformas internas del club, así como ofrecer funcionalidades básicas de autenticación y gestión.

---

## ⚙️ Funcionamiento del Proyecto

```

/CTHub
├── /Autenticación (Inicio de sesión)
│   ├── /Admin
│   └── /Usuario
│
└── /Redirección (Redirecciona a)
    ├── /CodeLink         ← Plataforma educativa principal
    ├── /Club Inglés      ← Próximamente
    └── /DisArt           ← Próximamente

```
---

## 📁 Estructura General del Proyecto

```
cthub/
├── frontend/          ← Next.js
├── backend/           ← FastAPI
├── docker-compose.yml
├── README.md
└── .env

```

### 🖼️ Estructura del Frontend

```

frontend/
├── app/
│   ├── admin/                  ← Dashboard de Administración
│   ├── codelink/               ← Comunidad para Programadores
│   ├── cthub-landing/          ← Landing principal
│   ├── english-club/           ← Página del Club de Inglés
│   └── login/                  ← Login
├── styles/
│   └── globals.css
├── public/
│   └── assets/
├── next.config.js
└── tsconfig.json

```

### 🏗️ Estructura del Backend

```
backend/
├── app/
│   ├── api/                        # Rutas (APIRouter agrupado)
│   │   ├── v1/
│   │   │   ├── auth.py             # Login / Registro / JWT
│   │   │   ├── users.py            # CRUD de usuarios
│   │   │   ├── codelink/           # Módulo CodeLink (Blog, Cursos, etc.)
│   │   │   │   ├── courses.py
│   │   │   │   ├── blog.py
│   │   │   ├── gestor/             # Módulo gestor de tareas (futuro)
│   │   │   │   ├── tasks.py
│   │   │   │   ├── progress.py
│   ├── core/
│   │   ├── config.py               # Configuración general (env vars)
│   │   ├── security.py             # JWT, OAuth2, hashing
│   │   ├── deps.py                 # Dependencias reutilizables
│   ├── db/
│   │   ├── base.py                 # Declaración de Base de modelos
│   │   ├── session.py              # Conexion a DB
│   │   ├── init_db.py              # Poblado inicial si aplica
│   ├── models/
│   │   ├── user.py
│   │   ├── codelink/
│   │   │   ├── blog.py
│   │   │   ├── course.py
│   │   ├── gestor/
│   │   │   ├── task.py
│   ├── schemas/
│   │   ├── user.py
│   │   ├── auth.py
│   │   ├── codelink/
│   │   │   ├── blog.py
│   │   │   ├── course.py
│   │   ├── gestor/
│   │   │   ├── task.py
│   ├── services/
│   │   ├── auth.py                 # Lógica de login / tokens
│   │   ├── user.py
│   ├── main.py                     # Entry point (FastAPI app)
│   ├── routers.py                  # Incluye todos los routers
├── alembic/                        # Migraciones
│   ├── versions/
│   └── env.py
├── .env                            # Variables de entorno
├── Dockerfile
├── requirements.txt
└── README.md

```
---

## 🎯 Objetivos del Proyecto

### Objetivo General
Centralizar el acceso a las distintas plataformas y sistemas del Club de Crecimiento Tecnológico.

### Objetivos Específicos

- Landing page como punto de entrada
- Redirección hacia otras plataformas del club
- Autenticación básica de usuarios
- Escalabilidad hacia módulos educativos, tareas y panel administrativo

---

## 💻 Stack Tecnológico

### Frontend
- **Next.js** — Framework principal del frontend (React + Routing + SSR)
- **Tailwind CSS** (opcional) — Para estilos rápidos y responsivos
- **HTML/CSS/JS Vanilla** — En plataformas derivadas como CodeLink, DisArt y Club de Inglés

### Backend
- **FastAPI** — API principal para autenticación, usuarios y futuros módulos
- **PostgreSQL** — Base de datos para usuarios, sesiones y registros

### DevOps
- **Docker** — Contenedores para frontend, backend y base de datos
- **Docker Compose** — Orquestación local
- **Nginx** — Reverse proxy (opcional en producción)

---

## 🔄 Flujo Inicial

1. El usuario accede a `cthub.com`
2. Desde allí puede:
   - Iniciar sesión (usuario o admin)
   - Redirigirse a CodeLink, DisArt o Club de Inglés
3. En el futuro podrá gestionar tareas, ver progreso, cargar contenido y más

---

## 🧱 Fases de Desarrollo

### MVP ✅
- [ ] Estructura del proyecto en Next.js y Docker
- [ ] Landing con botones de login y redirección
- [ ] Diseño de páginas de login y rutas de redirección

### Fases Futuras
- [ ] Integración real con backend FastAPI (login, registro)
- [ ] Panel de tareas
- [ ] Dashboard para usuarios
- [ ] Módulos independientes por plataforma

---

## 🔐 Autenticación

- Por ahora: frontend simple sin conexión a backend
- Futuro: JWT con FastAPI + PostgreSQL
- Roles: `usuario` y `admin`, con vista y control diferenciados

---

## 🌐 Plataformas Integradas

- **CodeLink** — Plataforma educativa (cursos, blog, recursos)
- **DisArt** — Comunidad de diseño y arte digital (próximamente)
- **Club de Inglés** — Plataforma de aprendizaje del idioma (próximamente)

---

## 👥 Contribución

¡Las contribuciones son bienvenidas!

1. Haz un fork del repositorio
2. Crea una rama nueva con tu funcionalidad: `git checkout -b feature/nombre`
3. Haz commit de los cambios: `git commit -m "Agrega nueva funcionalidad"`
4. Haz push: `git push origin feature/nombre`
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
