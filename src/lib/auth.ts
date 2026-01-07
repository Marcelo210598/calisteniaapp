import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email e senha são obrigatórios")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                })

                if (!user || !user.password) {
                    throw new Error("Credenciais inválidas")
                }

                const isPasswordValid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                )

                if (!isPasswordValid) {
                    throw new Error("Credenciais inválidas")
                }

                // Check if user is the creator and grant permanent premium access
                const isCreator = user.email === 'difoggijuniormarcelo@gmail.com';

                // If creator and not already premium, update database
                if (isCreator && !user.isPremium) {
                    await prisma.user.update({
                        where: { id: user.id },
                        data: {
                            isPremium: true,
                            premiumPlan: 'lifetime'
                        }
                    });
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    isPremium: isCreator ? true : user.isPremium,
                    premiumPlan: isCreator ? 'lifetime' : user.premiumPlan
                }
            }
        })
    ],
    session: {
        strategy: "jwt" as const,
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    cookies: {
        sessionToken: {
            name: process.env.NODE_ENV === 'production'
                ? '__Secure-next-auth.session-token'
                : 'next-auth.session-token',
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: process.env.NODE_ENV === 'production'
            }
        }
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id
                token.isPremium = user.isPremium
                token.premiumPlan = user.premiumPlan
            }
            return token
        },
        async session({ session, token }: any) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.isPremium = token.isPremium as boolean
                session.user.premiumPlan = token.premiumPlan as string | null
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    trustHost: true, // Required for production deployment
    debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig

