import {pgTable, timestamp, uuid, varchar} from 'drizzle-orm/pg-core';

export const newsletter = pgTable('Newsletter', {
  id: uuid('id').primaryKey().defaultRandom().unique(),
  email: varchar('email', {length: 255}).notNull().unique(),
  createdAt: timestamp('createdAt', {mode: 'date'}).defaultNow().notNull(),
});

export type Newsletter = typeof newsletter.$inferSelect;
export type NewNewsletter = typeof newsletter.$inferInsert;
