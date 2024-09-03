// next-auth.d.ts
import { type DefaultSession } from "next-auth"; // Importing DefaultSession for extending Session type
import { AdapterUser } from "@auth/core/adapters"; // Importing AdapterUser to extend it

// Extending NextAuth module types
declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"]; // Merging custom User type with DefaultSession's user
  }

  interface User {
    role: string | null; // Your custom property for user role
  }
}

// when you extend the authjs session type, it will mismatch to adapteruser type
// so in auth.ts -   'adapter: PrismaAdapter(prisma) as Adapter' solve this, if not
// then  Extending the AdapterUser type for Prisma adapter as below will solve this
// declare module "@auth/core/adapters" {
//   interface AdapterUser {
//     role?: string | null; // Adding custom role property to AdapterUser
//   }
// }

// you are using jwt stratigy you have to extend it type
