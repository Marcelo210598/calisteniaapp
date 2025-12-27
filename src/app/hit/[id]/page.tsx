'use client';

import { notFound } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { hitWorkouts } from '@/data/hitWorkouts';
import { HITTimer } from '@/components/HITTimer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Lock, Clock, Zap, Target, BookOpen, Lightbulb, Heart } from 'lucide-react';
import { DirectCheckoutButton } from '@/components/DirectCheckoutButton';
import { use } from 'react';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function HITWorkoutPage({ params }: PageProps) {
    // Unwrap params using React.use()
    const { id } = use(params);
    const workout = hitWorkouts.find(w => w.id === id);

    if (!workout) {
        notFound();
    }

    return <HITWorkoutClient workout={workout} />;
}

// Client component for session handling
function HITWorkoutClient({ workout }: { workout: typeof hitWorkouts[0] }) {
    const { data: session } = useSession();
    const isPremium = session?.user?.isPremium || false;

    // Check if user has access
    if (workout.isPremium && !isPremium) {
        // Show preview but block timer
        return (
            <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
                <div className="container px-4 py-8 max-w-4xl mx-auto">
                    {/* Back Button */}
                    <Link href="/hit">
                        <Button variant="ghost" className="mb-6">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Voltar para Treinos HIT
                        </Button>
                    </Link>

                    {/* Premium Lock Screen */}
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-6">
                            <Lock className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-4">
                            {workout.name}
                        </h1>

                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full mb-6">
                            TREINO PREMIUM
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            {workout.description}
                        </p>

                        {/* Workout Details */}
                        <div className="bg-card border rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <Clock className="h-6 w-6 mx-auto mb-2 text-[#FF9F1C]" />
                                    <div className="text-2xl font-bold text-[#080357] dark:text-white">{workout.duration}</div>
                                    <div className="text-sm text-muted-foreground">minutos</div>
                                </div>
                                <div className="text-center">
                                    <Zap className="h-6 w-6 mx-auto mb-2 text-[#FF9F1C]" />
                                    <div className="text-2xl font-bold text-[#080357] dark:text-white">{workout.exercises.length}</div>
                                    <div className="text-sm text-muted-foreground">exercícios</div>
                                </div>
                                <div className="text-center">
                                    <Target className="h-6 w-6 mx-auto mb-2 text-[#FF9F1C]" />
                                    <div className="text-2xl font-bold text-[#080357] dark:text-white capitalize">{workout.level}</div>
                                    <div className="text-sm text-muted-foreground">nível</div>
                                </div>
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="font-semibold mb-3 text-[#080357] dark:text-white">Benefícios</h3>
                                <ul className="space-y-2 text-left">
                                    {workout.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-[#FF9F1C] mt-1">✓</span>
                                            <span className="text-muted-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t pt-6 mt-6">
                                <h3 className="font-semibold mb-3 text-[#080357] dark:text-white">Exercícios</h3>
                                <div className="space-y-2">
                                    {workout.exercises.map((exercise, index) => (
                                        <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                                            <span className="font-medium text-sm">{exercise.name}</span>
                                            <span className="text-xs text-muted-foreground">
                                                {exercise.workTime}s / {exercise.restTime}s × {exercise.rounds}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Upgrade CTA */}
                        <div className="bg-gradient-to-br from-[#080357] to-[#0a0560] text-white rounded-xl p-8 max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                Desbloqueie este treino com Premium
                            </h2>
                            <p className="text-white/90 mb-6">
                                Tenha acesso a todos os treinos HIT avançados, CalIA ilimitada, treinos sem limite e muito mais!
                            </p>
                            <DirectCheckoutButton
                                priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || ''}
                                label="Ser Premium Agora"
                                size="lg"
                                className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white w-full sm:w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // User has access - show timer
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="container px-4 py-8 max-w-4xl mx-auto">
                {/* Back Button */}
                <Link href="/hit">
                    <Button variant="ghost" className="mb-6">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para Treinos HIT
                    </Button>
                </Link>

                {/* Workout Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-2">
                        {workout.name}
                    </h1>
                    <p className="text-muted-foreground mb-4">
                        {workout.description}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-[#FF9F1C]" />
                            <span>{workout.duration} minutos</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Zap className="h-4 w-4 text-[#FF9F1C]" />
                            <span>{workout.exercises.length} exercícios</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Target className="h-4 w-4 text-[#FF9F1C]" />
                            <span className="capitalize">{workout.level}</span>
                        </div>
                    </div>
                </div>

                {/* Beginner Explanations */}
                {(workout.whatIsIt || workout.howItWorks || workout.formTips || workout.motivation) && (
                    <div className="bg-card border rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                        {workout.whatIsIt && (
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="h-5 w-5 text-[#FF9F1C]" />
                                    <h3 className="text-lg font-semibold text-[#080357] dark:text-white">O que é este treino?</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{workout.whatIsIt}</p>
                            </div>
                        )}

                        {workout.howItWorks && (
                            <div className="mb-6 border-t pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Zap className="h-5 w-5 text-[#FF9F1C]" />
                                    <h3 className="text-lg font-semibold text-[#080357] dark:text-white">Como funciona?</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">{workout.howItWorks}</p>
                            </div>
                        )}

                        {workout.formTips && workout.formTips.length > 0 && (
                            <div className="mb-6 border-t pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb className="h-5 w-5 text-[#FF9F1C]" />
                                    <h3 className="text-lg font-semibold text-[#080357] dark:text-white">Dicas de Forma e Técnica</h3>
                                </div>
                                <ul className="space-y-2">
                                    {workout.formTips.map((tip, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-[#FF9F1C] mt-1">•</span>
                                            <span className="text-muted-foreground text-sm">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {workout.motivation && (
                            <div className="border-t pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Heart className="h-5 w-5 text-[#FF9F1C]" />
                                    <h3 className="text-lg font-semibold text-[#080357] dark:text-white">Motivação</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed italic">{workout.motivation}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Timer Component */}
                <HITTimer workout={workout} />

                {/* Benefits Section */}
                <div className="mt-12 bg-card border rounded-xl p-6 max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold mb-4 text-[#080357] dark:text-white">
                        Benefícios deste Treino
                    </h3>
                    <ul className="space-y-3">
                        {workout.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-[#FF9F1C] text-xl">✓</span>
                                <span className="text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
