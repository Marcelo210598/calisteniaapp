import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { decode } from 'next-auth/jwt'

export async function POST(req: Request) {
    try {
        // Get the session token from cookies
        const cookieStore = await cookies()
        const sessionToken = cookieStore.get('next-auth.session-token') || cookieStore.get('__Secure-next-auth.session-token')

        if (!sessionToken) {
            return NextResponse.json(
                { error: 'Não autenticado' },
                { status: 401 }
            )
        }

        // Decode the JWT token
        const decoded = await decode({
            token: sessionToken.value,
            secret: process.env.NEXTAUTH_SECRET!,
            salt: 'authjs.session-token',
        })

        if (!decoded?.email) {
            return NextResponse.json(
                { error: 'Não autenticado' },
                { status: 401 }
            )
        }

        const { plan } = await req.json()

        // Update user premium status
        const user = await prisma.user.update({
            where: { email: decoded.email as string },
            data: {
                isPremium: true,
                premiumPlan: plan || 'monthly',
            },
        })

        return NextResponse.json({
            success: true,
            user: {
                isPremium: user.isPremium,
                premiumPlan: user.premiumPlan,
            },
        })
    } catch (error: any) {
        console.error('Premium upgrade error:', error)
        return NextResponse.json(
            { error: 'Erro ao atualizar premium' },
            { status: 500 }
        )
    }
}
