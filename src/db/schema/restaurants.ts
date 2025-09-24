import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { createId } from '@paralleldrive/cuid2'


export const restaurant = pgTable("restaurants ", {
  id: text("id").$default(() => createId()).primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
