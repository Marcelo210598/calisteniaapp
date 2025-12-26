import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { hitWorkouts } from '@/data/hitWorkouts';
import { Clock, Zap, Lock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Treinos HIT - High Intensity Training',
    description: 'Treinos rápidos e intensos para queimar gordura e ganhar força em pouco tempo. Circuitos de alta intensidade com exercícios de calistenia.',
    keywords: ['HIT', 'high intensity training', 'treino intenso', 'queimar gordura', 'calistenia', 'circuito'],
};

const levelColors = {
    beginner: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

const levelLabels = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
};

export default function HITPage() {
    const freeWorkouts = hitWorkouts.filter(w => !w.isPremium);
    const premiumWorkouts = hitWorkouts.filter(w => w.isPremium);

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#080357] to-[#0a0560] text-white py-16 md:py-24">
                <div className="absolute inset-0 bg-[url('/background-hero.svg')] opacity-10" />
                <div className="container relative z-10 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-[#FF9F1C]/20 text-[#FF9F1C] px-4 py-2 rounded-full mb-6">
                            <Zap className="h-5 w-5" />
                            <span className="font-semibold">High Intensity Training</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Treinos Rápidos e Intensos
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8">
                            Queime gordura e ganhe força em pouco tempo com nossos treinos HIT!
                            Circuitos explosivos de calistenia para resultados máximos.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#FF9F1C]" />
                                <span>15-35 minutos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#FF9F1C]" />
                                <span>Queima máxima</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-[#FF9F1C]" />
                                <span>Timer integrado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Workouts */}
            <section className="py-12 md:py-16">
                <div className="container px-4">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-2">
                            Treinos Gratuitos
                        </h2>
                        <p className="text-muted-foreground">
                            Comece agora mesmo com nossos treinos HIT gratuitos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {freeWorkouts.map((workout) => (
                            <Link key={workout.id} href={`/hit/${workout.id}`}>
                                <div className="group h-full bg-card border-2 border-transparent hover:border-[#FF9F1C] rounded-xl p-6 transition-all hover:shadow-lg cursor-pointer">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                                    FREE
                                                </span>
                                                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${levelColors[workout.level]}`}>
                                                    {levelLabels[workout.level]}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#080357] dark:text-white group-hover:text-[#FF9F1C] transition-colors">
                                                {workout.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {workout.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{workout.duration} min</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Zap className="h-4 w-4" />
                                            <span>{workout.exercises.length} exercícios</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white">
                                        Iniciar Treino
                                    </Button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Workouts */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container px-4">
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-2">
                            Treinos Premium
                        </h2>
                        <p className="text-muted-foreground">
                            Desbloqueie treinos avançados e leve seu condicionamento ao próximo nível
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {premiumWorkouts.map((workout) => (
                            <Link key={workout.id} href={`/hit/${workout.id}`}>
                                <div className="group h-full bg-card border-2 border-transparent hover:border-yellow-500 rounded-xl p-6 transition-all hover:shadow-lg cursor-pointer relative overflow-hidden">
                                    {/* Premium Badge */}
                                    <div className="absolute top-4 right-4">
                                        <Lock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                                    </div>

                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1 pr-8">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                                                    PREMIUM
                                                </span>
                                                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${levelColors[workout.level]}`}>
                                                    {levelLabels[workout.level]}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-[#080357] dark:text-white group-hover:text-yellow-600 transition-colors">
                                                {workout.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {workout.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{workout.duration} min</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Zap className="h-4 w-4" />
                                            <span>{workout.exercises.length} exercícios</span>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/20" variant="outline">
                                        Ver Treino Premium
                                    </Button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4">
                    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#080357] to-[#0a0560] text-white rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Pronto para o Desafio?
                        </h2>
                        <p className="text-lg text-white/90 mb-8">
                            Escolha um treino HIT e comece agora mesmo. Timer integrado com beeps e vibração para você não perder o ritmo!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="#treinos-gratuitos">
                                <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white">
                                    Começar Grátis
                                </Button>
                            </Link>
                            <Link href="/premium">
                                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                                    Ver Premium
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
