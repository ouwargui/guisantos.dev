import {defineConfig} from 'drizzle-kit';

if (!process.env.POSTGRES_URL_NON_POOLING) {
  throw new Error('POSTGRES_URL_NON_POOLING is not set');
}

export default defineConfig({
  schema: './src/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL_NON_POOLING,
  },
});
