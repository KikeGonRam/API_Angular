# secure-api — API REST con Node.js y MySQL

API REST con **Express** y **MySQL** en arquitectura **MVC**. Gestiona usuarios, productos y administradores, con validación de entradas y configuración por variables de entorno.

[![Seguridad](https://github.com/KikeGonRam/API_Angular/actions/workflows/security.yml/badge.svg)](https://github.com/KikeGonRam/API_Angular/actions/workflows/security.yml)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-mysql2-4479A1?logo=mysql&logoColor=white)

[Seguridad](SECURITY.md)

## Arquitectura

| Capa | Archivos |
| --- | --- |
| Servidor | `server.js` (Express + CORS) |
| Configuración | `config/database.js` (conexión a MySQL con `mysql2`) |
| Modelos | `models/user.js`, `product.js`, `admin.js` |
| Controladores | `controllers/` (lógica por recurso) |
| Rutas | `routes/` (users, products, admin, test) |
| Middleware | `middleware/validate.js`, `auth.js` |

> El middleware `auth.js` es un punto de extensión para JWT; conviene completarlo antes
> de usar la API en producción.

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

Completa `.env`:

| Variable | Descripción | Ejemplo |
| --- | --- | --- |
| `DB_HOST` | Host de MySQL | `localhost` |
| `DB_USER` | Usuario | `root` |
| `DB_PASSWORD` | Contraseña | |
| `DB_NAME` | Base de datos | `secure_api_db` |
| `PORT` | Puerto | `3000` |

## Ejecución

```bash
npm run dev    # desarrollo con recarga (nodemon)
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

## Seguridad

Análisis estático (Semgrep) y escaneo de secretos (Gitleaks) corren en cada *push* y PR
(ver [workflow](.github/workflows/security.yml)). El archivo `.env` no se versiona (usa
`.env.example`). Reporta vulnerabilidades según [SECURITY.md](SECURITY.md).

## Tecnologías

Node.js · Express · MySQL (mysql2) · express-validator · CORS · dotenv

---

Proyecto de Luis Enrique González Ramírez — [github.com/KikeGonRam](https://github.com/KikeGonRam)
