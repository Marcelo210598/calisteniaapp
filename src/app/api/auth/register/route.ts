import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
    try {
        console.log('Registration attempt started')
        const { name, email, password } = await req.json()
        console.log('Registration data received:', { name, email, hasPassword: !!password })

        // Validate input
        if (!email || !password) {
            console.log('Validation failed: missing email or password')
            return NextResponse.json(
                { error: 'Email e senha são obrigatórios' },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            console.log('Validation failed: password too short')
            return NextResponse.json(
                { error: 'A senha deve ter pelo menos 6 caracteres' },
                { status: 400 }
            )
        }

        // Check if Prisma is available
        if (!prisma || typeof prisma.user === 'undefined') {
            console.error('Prisma client not initialized properly')
            return NextResponse.json(
                { error: 'Banco de dados não disponível. Por favor, configure DATABASE_URL.' },
                { status: 503 }
            )
        }

        console.log('Checking if user exists...')
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            console.log('User already exists:', email)
            return NextResponse.json(
                { error: 'Este e-mail já está cadastrado' },
                { status: 400 }
            )
        }

        console.log('Hashing password...')
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        console.log('Creating user...')
        // Create user
        const user = await prisma.user.create({
            data: {
                name: name || email.split('@')[0],
                email,
                password: hashedPassword,
            }
        })

        console.log('User created successfully:', user.id)
        return NextResponse.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        }, { status: 201 })

    } catch (error: any) {
        console.error('Registration error details:', {
            message: error.message,
            code: error.code,
            stack: error.stack
        })
        return NextResponse.json(
            {
                error: 'Erro ao criar conta. Tente novamente.',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        )
    }
}
