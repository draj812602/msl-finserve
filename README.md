# MSL Financial Services

Production-grade full-stack financial services platform scaffold built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Prisma, and PostgreSQL (Supabase).

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** shadcn/ui
- **Charts:** Recharts
- **Tables:** TanStack Table
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** JWT (HTTP-only cookies)
- **Forms:** React Hook Form + Zod
- **State:** TanStack Query
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── (public)/          # Public pages: /, /about, /services, /contact
│   ├── (auth)/            # /login, /register
│   ├── (dashboard)/       # Customer dashboard: /dashboard/*
│   ├── (admin)/           # Admin: /admin/login, /admin/*
│   ├── api/               # API routes
│   ├── layout.tsx
│   └── providers.tsx
├── components/
│   ├── ui/                # shadcn components
│   ├── charts/            # Recharts placeholders
│   ├── tables/            # TanStack Table wrappers
│   └── layout/            # PublicLayout, AuthLayout, DashboardLayout, AdminLayout
├── lib/
│   ├── auth/              # JWT, password hashing
│   ├── api/               # Response helpers
│   └── db.ts               # Prisma client
├── hooks/
├── types/
└── middleware.ts          # Route protection, JWT validation
prisma/
└── schema.prisma
```

## Developer Setup

### 1. Create Supabase PostgreSQL database

1. Go to [Supabase](https://supabase.com) and create an account or sign in.
2. Click **New project** and choose organization, name, database password, and region.
3. Wait for the project to be provisioned.
4. Open **Project Settings** → **Database**.
5. Copy the **Connection string** (URI format). Use the **Transaction pooler** (port 6543) for the app and the **Session pooler** (port 5432) for migrations if needed.

Example format:

```
postgresql://postgres.[project-ref]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true
```

### 2. Connect Prisma to Supabase

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Set `DATABASE_URL` in `.env` to your Supabase connection string:

   ```env
   DATABASE_URL="postgresql://postgres.xxxxx:YOUR_PASSWORD@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
   ```

3. Set a strong `JWT_SECRET` (at least 32 characters):

   ```env
   JWT_SECRET="your-secret-key-at-least-32-characters-long"
   ```

### 3. Run migrations

Generate the Prisma client and push the schema to the database:

```bash
npm run db:generate
npm run db:push
```

For named migrations (recommended for production):

```bash
npm run db:migrate
```

When prompted, give the migration a name (e.g. `init`).

(Optional) Open Prisma Studio to inspect data:

```bash
npm run db:studio
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- **Public:** `/`, `/about`, `/services`, `/contact`
- **Auth:** `/login`, `/register`
- **Dashboard:** `/dashboard` (after login)
- **Admin:** `/admin/login`, then `/admin/dashboard` (admin role required)

To test admin, create a user via `/register`, then in Prisma Studio or SQL set that user’s `role` to `admin`.

### 5. Deploy to Vercel

1. Push the repo to GitHub (or another Git provider supported by Vercel).
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Add environment variables in the Vercel project:
   - `DATABASE_URL` – Supabase connection string (use pooler URL).
   - `JWT_SECRET` – Same secret as locally (min 32 characters).
4. Deploy. Vercel will run `npm run build` (which includes `prisma generate`).

**Post-deploy:** Run migrations against the production database:

```bash
DATABASE_URL="your-production-url" npx prisma migrate deploy
```

Use the same `DATABASE_URL` as in Vercel (or a direct connection for migrations).

## Scripts

| Script         | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server               |
| `npm run build`| Generate Prisma + build Next   |
| `npm run start`| Start production server        |
| `npm run lint` | Run ESLint                     |
| `npm run format` | Format with Prettier         |
| `npm run db:generate` | Generate Prisma client   |
| `npm run db:push`    | Push schema (no migrations) |
| `npm run db:migrate` | Create/run migrations       |
| `npm run db:studio`  | Open Prisma Studio          |

## API Routes

- `POST /api/auth/login` – Login (body: `email`, `password`, optional `admin: true`)
- `POST /api/auth/register` – Register (body: `name`, `email`, `password`)
- `POST /api/auth/logout` – Logout (clears cookie)
- `GET /api/auth/logout` – Logout via redirect (clears cookie, redirects to `/`)
- `GET /api/users` – List users (admin only)
- `GET /api/accounts` – List accounts (customer: own; admin: all)
- `GET /api/transactions` – List transactions
- `GET /api/reports` – List reports

Protected routes expect the JWT in the `token` HTTP-only cookie (set by login/register).

## License

Private / internal use.
