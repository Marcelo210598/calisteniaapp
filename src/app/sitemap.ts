import { MetadataRoute } from 'next'
import { exercises } from '@/data/exercises'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://califorce.vercel.app' // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/exercicios',
        '/treino-personalizado',
        '/meus-treinos',
        '/progresso',
        '/desafios',
        '/ciclos',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic exercise routes
    const exerciseRoutes = exercises.map((exercise) => ({
        url: `${baseUrl}/exercicios/${exercise.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...exerciseRoutes]
}
