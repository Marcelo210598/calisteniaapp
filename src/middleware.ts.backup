import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Only protect routes that MUST have authentication
// Free users can access everything else
const protectedRoutes = [
    '/api/workouts/save', // Only API routes that save to DB
    '/api/progress/save',
]

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Check if the route requires authentication
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute) {
        try {
            const token = await getToken({
                req: request,
                secret: process.env.NEXTAUTH_SECRET,
            })

            if (!token) {
                // For API routes, return 401
                if (pathname.startsWith('/api/')) {
                    return NextResponse.json(
                        { error: 'Authentication required' },
                        { status: 401 }
                    )
                }

                // For pages, redirect to login
                const url = new URL('/login', request.url)
                url.searchParams.set('callbackUrl', pathname)
                return NextResponse.redirect(url)
            }
        } catch (error) {
            console.error('Middleware auth error:', error)

            if (pathname.startsWith('/api/')) {
                return NextResponse.json(
                    { error: 'Authentication error' },
                    { status: 401 }
                )
            }
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/api/workouts/:path*',
        '/api/progress/:path*',
    ],
}
