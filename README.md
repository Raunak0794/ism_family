# ism-family

A professional, modular implementation of the first slice of **ism-family**, an exclusive alumni portal for IIT (ISM) Dhanbad.

## Architecture

The backend follows a lightweight MVC/service separation suited to Express + PostgreSQL:

```text
backend/
├── server.js                    # Starts HTTP server only
└── src/
    ├── app.js                   # Express configuration + route mounting
    ├── config/
    │   └── db.js                # PostgreSQL Pool
    ├── models/
    │   └── user.model.js        # SQL/database operations
    ├── controllers/
    │   ├── user.controller.js   # Signup request logic
    │   ├── admin.controller.js  # Admin request logic
    │   └── health.controller.js # Health endpoint logic
    ├── routes/
    │   ├── user.routes.js
    │   ├── admin.routes.js
    │   └── health.routes.js
    ├── middleware/
    │   ├── adminAuth.js
    │   └── notFound.js
    └── utils/
        └── normalize.js
```

The React frontend is component-based:

```text
frontend/src/
├── App.jsx
├── main.jsx
├── index.css
├── pages/
│   ├── Landing.jsx
│   ├── Signup.jsx
│   └── Admin.jsx
├── components/
│   ├── common/
│   │   └── Alert.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── landing/
│   │   ├── Hero.jsx
│   │   └── BenefitCard.jsx
│   ├── signup/
│   │   ├── FormField.jsx
│   │   ├── SignupForm.jsx
│   │   └── SignupSuccess.jsx
│   └── admin/
│       ├── AdminLogin.jsx
│       ├── StatsCards.jsx
│       ├── StatusBadge.jsx
│       └── UsersTable.jsx
├── constants/
│   └── app.js
└── services/
    └── api.js
```

## Why this structure is better

- `server.js` has one responsibility: start the server.
- SQL is isolated inside the model layer.
- Controllers contain HTTP/business-flow logic.
- Middleware is reusable and independent.
- Routes only map URLs to controllers.
- Frontend API calls are centralized in `services/api.js`.
- Repeated form/table/layout UI is extracted into components.
- Pages are easier to read, test, and maintain.

## Database

No database changes are required if you already ran the previous schema. The same `users` table and API behavior are preserved.

To initialize a fresh database:

```bash
psql -d ism_family -f database/schema.sql
```

## Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/ism_family
FRONTEND_URL=http://localhost:5173
ADMIN_SECRET=your-admin-secret
```

Run:

```bash
npm run dev
```

API endpoints remain unchanged:

```text
GET  /api/health
POST /api/signup
GET  /api/admin/users
PUT  /api/admin/users/:id/status
```

Admin endpoints require:

```text
x-admin-secret: YOUR_ADMIN_SECRET
```

## Frontend setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

Run:

```bash
npm run dev
```

## Existing PostgreSQL users

Your existing database data continues to work because this refactor does **not** rename the database, table, columns, statuses, or API routes.

## Deployment placeholders

Frontend:

```text
https://YOUR-FRONTEND-DOMAIN
```

Backend:

```text
https://YOUR-BACKEND-DOMAIN
```

GitHub:

```text
https://github.com/YOUR_USERNAME/ism-family
```

## Security note

Do not commit `.env` files or real passwords/secrets to GitHub. The hardcoded-style admin access requested by the assignment is implemented through the `ADMIN_SECRET` environment variable rather than exposing the password in frontend source code.
