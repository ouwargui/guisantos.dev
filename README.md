# guisantos.dev

## My personal website

This is my personal website, where I share my projects and my thoughts about programming and technology in general.

## Technologies

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Vercel](https://vercel.com/)

## How to run

1. Clone this repository
2. Install dependencies with `bun install`
3. Set up environment variables:
   - `POSTGRES_URL_NON_POOLING` - PostgreSQL connection string
   - `RESEND_API_KEY` - Resend API key for email
   - `NEWSLETTER_API_KEY` - API key for newsletter endpoint
4. Push the database schema with `bun run db:push` (or run migrations with `bun run db:migrate`)
5. Run the development server with `bun run dev`

## Database Commands

- `bun run db:generate` - Generate migration files
- `bun run db:migrate` - Run migrations
- `bun run db:push` - Push schema changes directly to database
- `bun run db:studio` - Open Drizzle Studio to view/edit data
