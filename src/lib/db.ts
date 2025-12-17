import {drizzle} from 'drizzle-orm/postgres-js';

if (!process.env.POSTGRES_URL_NON_POOLING) {
  throw new Error('POSTGRES_URL_NON_POOLING is not set');
}

export const db = drizzle(process.env.POSTGRES_URL_NON_POOLING);
