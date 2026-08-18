# ism-family

A professional, modular implementation of the first slice of **ism-family**, an exclusive alumni portal for IIT (ISM) Dhanbad.

## Deployment placeholders

Live URL:

```text
https://ism-family.vercel.app/
```

GitHub:

```text
https://github.com/Raunak0794/ism_family
```

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


