import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const session = await getServerSession()

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: 'Não autenticado' },
                { status: 401 }
            )
        }

        const { plan } = await req.json()

        // Update user premium status
        const user = await prisma.user.update({
            where: { email: session.user.email },
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
