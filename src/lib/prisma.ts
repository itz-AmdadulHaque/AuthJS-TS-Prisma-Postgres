import { PrismaClient } from "@prisma/client"
 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma = globalForPrisma.prisma || new PrismaClient()
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// in our project we are not using middleware which run on edge
// so if you use middleware then you have to make the prisma edge compatable
// see this code: https://github.com/codinginflow/next-auth-v5/blob/3-Next-Auth-Prisma-setup/src/lib/prisma.ts