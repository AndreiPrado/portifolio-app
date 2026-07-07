# Space-Themed Portfolio — Andrei Prado

A modern, responsive portfolio website with a space-inspired design, built with Next.js and featuring internationalization, a contact form backed by a database, and transactional email delivery.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 18, Tailwind CSS 3 |
| Language | TypeScript |
| Internationalization | next-intl (EN / PT / ES) |
| Database | PostgreSQL + Drizzle ORM |
| Email | Resend |
| Validation | Zod |
| Parallax | react-scroll-parallax |

## Features

- **Space theme** — dark color scheme with animated starfield canvas
- **Multilingual** — English, Portuguese, and Spanish via locale-prefixed routes (`/en`, `/pt`, `/es`)
- **Contact form** — submissions are validated with Zod, stored in PostgreSQL, and trigger transactional emails (notification to owner + confirmation to visitor)
- **Parallax & scroll animations** — `ParallaxSection`, `DirectionalParallax`, `ScrollReveal`, `AnimatedCounter`
- **Skills carousel** — animated display of technical skills
- **Fully responsive** — optimized for mobile through desktop

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-scoped pages
│   │   ├── page.tsx       # Home
│   │   ├── about/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── contact/
│   ├── api/contact/       # Contact form API route
│   ├── components/        # Reusable UI components
│   └── data/              # Static content (projects, experience, skills)
├── db/                    # Drizzle schema and client
├── i18n/                  # next-intl routing and request config
├── lib/                   # Email helpers (Resend)
└── middleware.ts          # Locale detection and routing
```

## Getting Started

### Prerequisites

- Node.js 18.17+
- PostgreSQL database

### Environment Variables

Create a `.env.local` file:

```env
DATABASE_URL=postgresql://user:password@host:5432/dbname
RESEND_API_KEY=re_...
CONTACT_EMAIL=your@email.com
CONTACT_FROM=noreply@yourdomain.com
```

### Installation

```bash
git clone [repository-url]
cd portifolio-app
npm install
```

### Database Setup

```bash
npm run db:push      # apply schema to the database
npm run db:studio    # open Drizzle Studio (optional)
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the default locale redirects automatically.

### Production Build

```bash
npm run build
npm run start
```

## Internationalization

Routes are prefixed with the locale (`/en`, `/pt`, `/es`). The default locale is `en`. Locale detection and redirects are handled by `src/middleware.ts` using `next-intl`.

## Deployment

Hosted on [Railway](https://railway.app). Set the environment variables listed above in the project settings before deploying.

## License

MIT
