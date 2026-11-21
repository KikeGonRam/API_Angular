# secure-api — API REST con Node.js y MySQL

API REST construida con **Express** y **MySQL**, organizada en una arquitectura **MVC** (modelos, controladores y rutas). Gestiona usuarios, productos y administradores, con validación de entradas y configuración por variables de entorno.

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-mysql2-4479A1?logo=mysql&logoColor=white)
![Express Validator](https://img.shields.io/badge/validación-express--validator-2C3E50)

## Características

- **Arquitectura MVC:** `models/`, `controllers/`, `routes/` y `middleware/`.
- **Validación de entradas** con `express-validator`.
- **CORS** habilitado y configuración por `.env` con `dotenv`.
- Conexión a MySQL mediante `mysql2`.
- Rutas separadas por recurso: usuarios, productos, administradores y pruebas.

> El middleware de autenticación (`middleware/auth.js`) está planteado como punto de extensión para JWT; conviene completarlo antes de usar la API en producción.

## Estructura

```
secure-api/
├── server.js            # Arranque del servidor Express
├── config/database.js   # Conexión a MySQL
├── models/              # user.js · product.js · admin.js
├── controllers/         # Lógica de cada recurso
├── routes/              # userRoutes · productRoutes · adminRoutes · testRoutes
├── middleware/          # auth.js (extensible) · validate.js
└── .env.example         # Plantilla de variables de entorno
```

## Requisitos

- Node.js
- MySQL Server

## Instalación

```bash
git clone https://github.com/KikeGonRam/API_Angular.git
cd API_Angular
npm install
cp .env.example .env
```

Completa el archivo `.env`:

| Variable | Descripción | Ejemplo |
| --- | --- | --- |
| `DB_HOST` | Host de MySQL | `localhost` |
| `DB_USER` | Usuario de MySQL | `root` |
| `DB_PASSWORD` | Contraseña de MySQL | |
| `DB_NAME` | Base de datos | `secure_api_db` |
| `PORT` | Puerto del servidor | `3000` |

## Ejecución

```bash
npm run dev    # desarrollo, con recarga (nodemon)
npm start      # producción (node server.js)
```

## Endpoints

| Grupo | Ruta | Para |
| --- | --- | --- |
| Usuarios | `/api/users` | registro, inicio de sesión y perfil |
| Productos | `/api/products` | listar, crear, actualizar y eliminar |
| Administradores | `/api/admin` | funciones administrativas y roles |
| Pruebas | `/api/test` | verificación de conectividad |

## Esquema de la base de datos

- **users**: `id`, `username` (único), `email` (único), `password`, `created_at`.
- **products**: `id`, `name`, `description`, `price`, `stock`, `created_at`.
- **admins**: `id`, `user_id` (FK → users), `role`, `created_at`.

## Tecnologías

Node.js · Express · MySQL (mysql2) · express-validator · CORS · dotenv

---

Proyecto de Luis Enrique González Ramírez — [github.com/KikeGonRam](https://github.com/KikeGonRam)
