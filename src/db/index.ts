import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import { env } from "@/env";

const turso = createClient({
  url: env.TURSO_DATABASE_URL as string,
  authToken: env.TURSO_AUTH_TOKEN as string
});

export const db = drizzle(turso, { schema });
