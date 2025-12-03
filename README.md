# Nails Jules API

🚀 API para la gestión de citas de un salón de manicure y pedicure.

Esta API permite:
- Registrar clientes y citas
- Gestionar servicios y horarios
- Autenticación de administradores con JWT
- Rutas públicas y privadas protegidas

---

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- JWT para autenticación
- PM2 para gestión de procesos
- GitHub Actions para CI/CD

---

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/CristianBorreDev/nails-jules-api.git
cd nails-jules-api
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear .env con tu variables:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/nailsjules
JWT_SECRET=miSuperSecreto123
```

4. Levantar servidor modo desarrollo:
```bash
npm run start
```
O en produccion con:
```bash
pm2 start src/server.js --name nails-api
pm2 save
```

# Rutas de la API - Nails Jules

## Salud de la API
- **GET** `/health` ✅ Pública  
  Retorna el estado de la API.  

  **Respuesta:**
  ```json
  { "status": "API OK" }
  ```
## Authenticacion Admin
- **POST** `/auth/login` ✅ Pública
  Permite al admin iniciar sesión y recibir un token JWT.

  **Cuerpo**
  ```json
  {
    "email": "admin@nailsjules.com",
    "password": "123456"
  }
  ```

  **Respuesta:**
  ```json
  {
    "token": "TOKEN",
    "user": "USER"
  }
  ```

## Citas (Appointments)
- **GET** `/api/appointments` 🔒 Privada  
  Listar todas las citas.

- **POST** `/api/appointments` ✅ Pública  
  Crear una nueva cita (verifica o crea cliente automáticamente).

- **PUT** `/api/appointments/:id` 🔒 Privada  
  Actualizar cita (estatus, notas).

- **DELETE** `/api/appointments/:id` 🔒 Privada  
  Eliminar una cita.

---

## Clientes (Clients)
- **GET** `/api/clients` 🔒 Privada  

- **POST** `/api/clients` 🔒 Privada  

- **PUT** `/api/clients/:id` 🔒 Privada  

- **DELETE** `/api/clients/:id` 🔒 Privada  

---

## Servicios (Services)
- **GET** `/api/services` 🔒 Privada  

- **POST** `/api/services` 🔒 Privada  

- **PUT** `/api/services/:id` 🔒 Privada  

- **DELETE** `/api/services/:id` 🔒 Privada  

---

## Horarios (Schedules)
- **GET** `/api/schedules` 🔒 Privada  

- **POST** `/api/schedules` 🔒 Privada  

- **PUT** `/api/schedules/:id` 🔒 Privada  

- **DELETE** `/api/schedules/:id` 🔒 Privada  

---

> ✅ Pública: No requiere autenticación  
> 🔒 Privada: Requiere token JWT válido
