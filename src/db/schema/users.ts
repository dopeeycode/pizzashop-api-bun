import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { createId } from '@paralleldrive/cuid2'

export const userRoleEnum = pgEnum("user_role", ["manager", "customer"]);

export const usersTable = pgTable("users", {
  id: text("id").$default(() => createId()).primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  phone: text("phone"),
  role: userRoleEnum('role').default('customer').notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
