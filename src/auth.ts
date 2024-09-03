import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";
import { Adapter } from "next-auth/adapters";

export const { handlers, signIn, signOut, auth } = NextAuth({
  theme: {
    logo: "/logo.png",
  },
  adapter: PrismaAdapter(prisma) as Adapter,  // type for not showing error after session role extend mismatch
  providers: [Google, GitHub],
  callbacks: {
    session({ session, user }) {  // this needed for client side 
      session.user.role = user.role;
      return session;
    },
  },
});
