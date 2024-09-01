import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const todo = sqliteTable("todo", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  text: text("text").notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false)
});

export type Todo = typeof todo.$inferInsert;
