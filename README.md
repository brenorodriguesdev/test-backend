
# **Backend Application**

This is a **NestJS** backend application with **MySQL**, **Redis**, and **BullMQ** for queue processing. The application is containerized using **Docker** and supports **TypeORM migrations**, **JWT authentication**, and **mailing capabilities**.

---

## 🚀 **Features**
- **NestJS** framework for scalable server-side development.
- **MySQL** database with TypeORM for data modeling and migrations.
- **Redis** as a cache and queue system for background jobs using **BullMQ**.
- **JWT Authentication** to secure routes and manage user sessions.
- **Mailing** via **@nestjs-modules/mailer**.
- **Dockerized** for easy deployment and development.
- **CI/CD Ready** with scripts for migration and build.

---

## 📂 **Project Structure**
```
.
├── src
│   ├── application       # Business logic layer (Use Cases, Services, etc)
│   ├── domain            # Domain models and entities
│   ├── infra             # Infrastructure (database repositories, migrations, etc)
│   ├── main.ts           # Main entry point
│   └── app.module.ts     # Main module
│
├── test                  # Unit and e2e tests
├── Dockerfile            # Dockerfile to containerize the app
├── docker-compose.yml    # Docker Compose configuration
├── .env                  # Environment variables file
├── package.json          # Node.js dependencies and scripts
└── README.md             # This file
```

---

## 🛠️ **Technologies Used**
- **Node.js** (v20 or later)
- **NestJS** (v10)
- **MySQL** (v8.0)
- **Redis** (v6.2)
- **BullMQ** for job queues
- **TypeORM** for database migrations
- **Docker & Docker Compose** for containerization

---

## 📦 **Setup and Installation**

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yourusername/backend.git
cd backend
```

---

### **2️⃣ Set up environment variables**
Create a **.env** file in the root directory and add the following:
```env
# MySQL configuration
MYSQL_ROOT_PASSWORD=your_mysql_password
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=your_database

# Redis configuration
REDIS_PASSWORD=secretaesenha

# JWT configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s

# Email configuration
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=your_mail_user
MAIL_PASS=your_mail_pass
```

> **Note:** Adjust the **MySQL** and **Redis** passwords according to your requirements.

---

### **3️⃣ Run Docker containers**
To start the containers (**MySQL**, **Redis**, and **App**):
```bash
docker-compose up --build
```

This command will:
- **Build the app container** using the **Dockerfile**.
- **Run migrations** automatically before the app starts.
- **Start the MySQL and Redis services** with passwords from the **.env** file.

> 💡 The server will be accessible on **http://localhost:3000**.

---

### **4️⃣ Run Migrations**
If you want to run migrations manually, use:
```bash
docker-compose exec app npm run migration:run
```

This will apply pending migrations to the MySQL database.

---

### **5️⃣ Run Tests**
Run **unit tests** with:
```bash
npm run test
```

Run **end-to-end (e2e) tests** with:
```bash
npm run test:e2e
```

Run **test coverage** with:
```bash
npm run test:cov
```

---

## 🚀 **Usage**

### **Run app in development mode**
```bash
npm run start:dev
```

This will start the server at **http://localhost:3000** with **hot-reloading** enabled.

---

### **Run app in production mode**
Build and run the production version of the app:
```bash
docker-compose up --build
```

This will:
- **Build the production image**.
- **Run migrations**.
- **Start the app, MySQL, and Redis**.

---

### **Available Scripts**
| **Script**         | **Description**                                  |
|-------------------|--------------------------------------------------|
| `npm run build`    | Compiles the TypeScript files                    |
| `npm run start`    | Starts the application                           |
| `npm run start:dev`| Starts the app in development mode (watch)       |
| `npm run start:prod`| Starts the production build                     |
| `npm run test`     | Runs the unit tests                              |
| `npm run test:e2e` | Runs the end-to-end (e2e) tests                  |
| `npm run lint`     | Lints the code using ESLint                      |
| `npm run format`   | Formats the code using Prettier                  |
| `npm run migration:generate` | Generates a new migration file         |
| `npm run migration:run`       | Runs all pending migrations            |
| `npm run migration:revert`    | Reverts the last applied migration      |

---

## 📜 **License**
This project is licensed under the **UNLICENSED** license. This means the project is not open-source.

---

## 🤝 **Contributing**
1. Fork the project.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

---

## 📞 **Contact**
If you have questions, please feel free to reach out.

