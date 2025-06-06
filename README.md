## Project Title
# secure-api

## Description
API RESTful segura con Node.js y MySQL

## Prerequisites
- Node.js (check version with `node -v`)
- MySQL (or any compatible MySQL server)

## Installation
1. Clone the repository: `git clone https://your-repository-url-here.git`
2. Navigate to the project directory: `cd secure-api`
3. Install dependencies: `npm install`

## Environment Variables Setup
This project uses a `.env` file to manage environment variables. A file named `.env.example` is provided as a template.

1. Create a `.env` file by copying the example: `cp .env.example .env`
2. Update the `.env` file with your specific configurations:
    - `DB_HOST`: Hostname of the MySQL server (e.g., `localhost`)
    - `DB_USER`: MySQL username (e.g., `root`)
    - `DB_PASSWORD`: MySQL password (e.g., `password`)
    - `DB_NAME`: Name of the database to be used (e.g., `secure_api_db`)
    - `PORT`: Port on which the server will run (e.g., `3000`)

## Available Scripts
- `npm start`: Runs the application in production mode using `node server.js`.
- `npm run dev`: Runs the application in development mode using `nodemon server.js`. Nodemon will automatically restart the server when file changes are detected.

## API Endpoints
The API provides the following main route groups:
- `/api/users`: For user management operations like registration, login, and profile updates.
- `/api/products`: For managing products, including listing, creating, updating, and deleting products.
- `/api/admin`: For administrative functionalities, such as managing user roles or other admin-specific tasks.
- `/api/test`: Contains test routes for basic API connectivity checks.

(A detailed explanation of each endpoint, its HTTP methods, and expected payload is typically provided in separate API documentation, e.g., using Swagger or Postman collections.)

## Database Schema
The application initializes and uses the following tables in the MySQL database:
- **users**: Stores user information.
    - `id`: INT AUTO_INCREMENT PRIMARY KEY
    - `username`: VARCHAR(50) NOT NULL UNIQUE
    - `email`: VARCHAR(100) NOT NULL UNIQUE
    - `password`: VARCHAR(255) NOT NULL
    - `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- **products**: Stores product details.
    - `id`: INT AUTO_INCREMENT PRIMARY KEY
    - `name`: VARCHAR(100) NOT NULL
    - `description`: TEXT
    - `price`: DECIMAL(10, 2) NOT NULL
    - `stock`: INT NOT NULL
    - `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
- **admins**: Stores information about admin users, linking to the `users` table.
    - `id`: INT AUTO_INCREMENT PRIMARY KEY
    - `user_id`: INT NOT NULL (FOREIGN KEY REFERENCES users(id))
    - `role`: VARCHAR(50) NOT NULL
    - `created_at`: TIMESTAMP DEFAULT CURRENT_TIMESTAMP
