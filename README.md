# ISM Family

ISM Family is an alumni portal for **IIT (ISM) Dhanbad** where alumni can register and admins can review, approve, or reject registrations.

## Tech Stack

* **Frontend:** React, Vite, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Deployment:** Vercel + Render

## Setup Instructions

Clone the repository:

```bash
git clone https://github.com/Raunak0794/ism_family.git
cd ism_family
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`.

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_url
FRONTEND_URL=http://localhost:5173
ADMIN_SECRET=your_admin_secret
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

> Do not commit `.env` files or real database/admin credentials to GitHub.

## Database Setup

1. Install PostgreSQL.
2. Create a database named `ism_family`.
3. Open PostgreSQL Query Tool or `psql`.
4. Run:

```text
database/schema.sql
```

5. Set the PostgreSQL connection string in `DATABASE_URL`.

Example:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/ism_family
```

## Admin Access

Open:

```text
http://localhost:5173/admin
```

Enter the same secret configured as:

```env
ADMIN_SECRET=your_admin_secret
```

The admin dashboard allows you to view registrations and approve or reject users.

## Live Website

**Frontend:** https://ism-family.vercel.app

**Backend API:** https://ism-family.onrender.com

## Main Features

* Alumni registration
* PostgreSQL data storage
* Admin authentication
* Approve/reject alumni applications
* Responsive React UI
* Deployed frontend and backend
