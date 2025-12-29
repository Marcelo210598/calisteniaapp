import { notFound } from 'next/navigation';
import { hitWorkouts } from '@/data/hitWorkouts';
import { HITWorkoutClient } from './HITWorkoutClient';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate static params for all HIT workouts at build time
// This fixes the Next.js 16 cacheComponents compatibility issue
export async function generateStaticParams() {
    return hitWorkouts.map((workout) => ({
        id: workout.id,
    }));
}

export default async function HITWorkoutPage({ params }: PageProps) {
    const { id } = await params;
    const workout = hitWorkouts.find(w => w.id === id);

    if (!workout) {
        notFound();
    }

    return <HITWorkoutClient workout={workout} />;
}
