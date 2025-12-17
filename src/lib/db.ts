import { drizzle } from 'drizzle-orm/postgres-js';

export const db = drizzle(process.env.POSTGRES_URL_NON_POOLING!);
