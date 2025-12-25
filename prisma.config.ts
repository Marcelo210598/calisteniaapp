// Load environment variables from .env.local first, then .env
import { config } from 'dotenv';
import { resolve } from 'path';

// Load .env.local first (higher priority)
config({ path: resolve(process.cwd(), '.env.local') });
// Then load .env as fallback
config({ path: resolve(process.cwd(), '.env') });

import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
