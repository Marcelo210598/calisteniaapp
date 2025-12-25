import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.DATABASE_URL) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL })
    // @ts-ignore - Type mismatch between @prisma/adapter-neon and @neondatabase/serverless
    const adapter = new PrismaNeon(pool) as any
    prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter } as any)
} else {
    // Fallback for development without DATABASE_URL
    prisma = globalForPrisma.prisma ?? new PrismaClient()
}

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
