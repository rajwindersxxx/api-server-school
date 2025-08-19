# Internship challenge

a small internship challenge for building a simple api return school list and create schools

---

## 🛠 Tech Stack

### **Backend**

- **Node.js** & **Express.js** – Server & routing
- **TypeScript** – Type-safe development
- **Prisma ORM** – Type-safe database access
- **PostgreSQL** – Relational database
- **Zod** – Runtime schema validation

### **Dev Tools**

- **Nodemon** – Development server auto-restart
- **ESLint + Prettier** – Code linting & formatting
- **Postman** – API testing & documentation

---

## 📂 Project Structure

```bash
.
├── src/
│   ├── config/          # App & database configuration
│   ├── controller/      # Route controllers
│   ├── middleware/      # Auth, error handling, validation
│   ├── routes/          # API routes
│   ├── utils/           # Helper functions
│   ├── zod/             # Zod validation schemas
│   ├── types/           # Type definitions
│   ├── tests/           # integration and uni testing
│   ├── app.ts           # Express app initialization
│   └── server.ts        # Server entry point
├── prisma/              # Prisma schema & migrations
├── uploads/             # Uploaded files (images) localTesting
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### **System Requirements**

- Node.js v22+
- PostgreSQL v16+

---

### **Manual Setup**

1. Clone the repository:

```bash
git clone https://github.com/rajwindersxxx/api-server-school
cd api-server-school
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```bash
DATABASE_URL=<postgres-url>

```

4. Initialize Prisma:

```bash
npx prisma generate      # Generate Prisma client
npx prisma db push       # Push schema to DB
npx prisma db seed       # Seed sample data

npx prisma migrate       # generate after making changes in db
npx prisma migrate deploy  #push schema in production safely

```

Note: seed Data totalAmount and items price not accurate !

5. Start development server:

```bash
npm run dev
```

You should see:

> `Server is running on http://localhost:4000` > `✅ Database connection successful`

---

- API → [http://localhost:4000](http://localhost:4000)

---

## 📜 API Documentation

All API endpoints are documented with **Postman**:
[**View API Docs in Postman**](https://documenter.getpostman.com/view/36192494/2sB3BKETje)

**Key endpoints include:**

| Feature         | Endpoint             | Method |
| --------------- | -------------------- | ------ |
| Add school      | `/api/v1/school`     | POST   |
| get school list | `/api/v1/auth/login` | GET    |

---

## ✅ Features

- **Type-safe backend & database** using Prisma + TypeScript
- **Runtime validation** with Zod
- **Create and read operations** for School
- **Postman documentation** for all endpoints
