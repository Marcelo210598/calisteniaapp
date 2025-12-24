'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useChallengeStore } from '@/store/challengeStore';
import { usePremiumStore } from '@/store/usePremiumStore';
import { useWorkoutStore } from '@/store/workoutStore';
import { exercises } from '@/data/exercises';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Trophy, Flame, Target, Share2, Play, X, Copy, Check, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DesafiosPage() {
    const router = useRouter();
    const { challenges, activeChallenge, acceptChallenge, completeDay, abandonChallenge, isChallengeCompleted, getCurrentStreak } = useChallengeStore();
    const { isPremium } = usePremiumStore();
    const { saveWorkout, startWorkout } = useWorkoutStore();

    const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null);
    const [showCompletionScreen, setShowCompletionScreen] = useState(false);
    const [copied, setCopied] = useState(false);

    const activeC = activeChallenge ? challenges.find(c => c.id === activeChallenge.challengeId) : null;
    const isCompleted = isChallengeCompleted();
    const streak = getCurrentStreak();

    useEffect(() => {
        if (isCompleted && !showCompletionScreen) {
            setShowCompletionScreen(true);

            // Confetti celebration!
            const duration = 5000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min: number, max: number) {
                return Math.random() * (max - min) + min;
            }

            const interval = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                });
            }, 250);
        }
    }, [isCompleted, showCompletionScreen]);

    const handleAcceptChallenge = (challengeId: string) => {
        acceptChallenge(challengeId);
        setSelectedChallenge(null);
    };

    const handleCompleteTodayWorkout = () => {
        if (!activeC) return;

        const today = new Date().toISOString().split('T')[0];
        completeDay(today);

        // Create workout from challenge exercises
        const workoutExercises = activeC.exercises.map((ex, index) => ({
            exerciseId: ex.exerciseId,
            sets: ex.sets,
            reps: ex.reps,
            order: index,
        }));

        // Save as temporary workout
        const tempWorkout = {
            id: Date.now().toString(),
            name: `${activeC.name} - Dia ${activeChallenge!.currentDay}`,
            exercises: workoutExercises,
            createdAt: new Date().toISOString(),
        };

        // Manually add to store (we'll use the workout store's save function)
        saveWorkout(tempWorkout.name);

        // Navigate to workout
        router.push('/iniciar-treino');
    };

    const handleCopyShareMessage = () => {
        if (!activeC) return;

        navigator.clipboard.writeText(activeC.shareMessage);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFinishCelebration = () => {
        abandonChallenge();
        setShowCompletionScreen(false);
    };

    // Completion Screen
    if (showCompletionScreen && activeC) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#FF9F1C]/20 to-[#080357]/20">
                <Header />

                <main className="container mx-auto px-4 py-8 max-w-2xl">
                    <Card className="p-8 text-center">
                        <div className="mb-6">
                            <div className="w-32 h-32 bg-gradient-to-br from-[#FF9F1C] to-[#080357] rounded-full flex items-center justify-center mx-auto mb-4 text-6xl">
                                {activeC.badge}
                            </div>
                            <h1 className="text-4xl font-bold mb-2">Desafio Concluído! 🎉</h1>
                            <p className="text-xl text-muted-foreground">
                                Você completou o {activeC.name}
                            </p>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-6 mb-6">
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div>
                                    <div className="text-3xl font-bold text-[#FF9F1C]">{activeC.duration}</div>
                                    <div className="text-sm text-muted-foreground">Dias</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#FF9F1C]">{activeChallenge?.completedDays.length}</div>
                                    <div className="text-sm text-muted-foreground">Treinos</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#FF9F1C]">{streak}</div>
                                    <div className="text-sm text-muted-foreground">Sequência</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#080357]/10 border border-[#080357]/20 rounded-lg p-6 mb-6">
                            <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Compartilhe sua conquista!
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Copie a mensagem abaixo e compartilhe nas suas redes sociais:
                            </p>
                            <div className="bg-background rounded-lg p-4 mb-4 text-left text-sm border border-border">
                                {activeC.shareMessage}
                            </div>
                            <Button
                                onClick={handleCopyShareMessage}
                                className="w-full"
                                variant={copied ? 'default' : 'outline'}
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 mr-2" />
                                        Copiado!
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4 mr-2" />
                                        Copiar Mensagem
                                    </>
                                )}
                            </Button>
                        </div>

                        <div className="space-y-3">
                            <Button onClick={handleFinishCelebration} className="w-full" size="lg">
                                Voltar aos Desafios
                            </Button>
                            <Button
                                onClick={() => router.push('/')}
                                variant="outline"
                                className="w-full"
                            >
                                Ir para Início
                            </Button>
                        </div>
                    </Card>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Desafios Motivacionais</h1>
                    <p className="text-muted-foreground">
                        Aceite um desafio e transforme seu corpo com treinos diários estruturados
                    </p>
                </div>

                {/* Active Challenge */}
                {activeC && activeChallenge && !isCompleted && (
                    <Card className="p-6 mb-8 bg-gradient-to-r from-[#FF9F1C]/10 to-[#080357]/10 border-[#FF9F1C]/20">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="text-4xl">{activeC.badge}</div>
                                <div>
                                    <h2 className="text-2xl font-bold">{activeC.name}</h2>
                                    <p className="text-muted-foreground">Desafio Ativo</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={abandonChallenge}
                                className="text-destructive hover:text-destructive"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-background/50 rounded-lg p-4 text-center">
                                <Calendar className="w-8 h-8 mx-auto mb-2 text-[#FF9F1C]" />
                                <div className="text-2xl font-bold">{activeChallenge.currentDay}</div>
                                <div className="text-sm text-muted-foreground">Dia Atual</div>
                            </div>
                            <div className="bg-background/50 rounded-lg p-4 text-center">
                                <Flame className="w-8 h-8 mx-auto mb-2 text-[#FF9F1C]" />
                                <div className="text-2xl font-bold">{streak}</div>
                                <div className="text-sm text-muted-foreground">Sequência</div>
                            </div>
                            <div className="bg-background/50 rounded-lg p-4 text-center">
                                <Target className="w-8 h-8 mx-auto mb-2 text-[#FF9F1C]" />
                                <div className="text-2xl font-bold">{activeChallenge.completedDays.length}/{activeC.duration}</div>
                                <div className="text-sm text-muted-foreground">Progresso</div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="font-medium">Progresso do Desafio</span>
                                <span className="text-muted-foreground">
                                    {Math.round((activeChallenge.completedDays.length / activeC.duration) * 100)}%
                                </span>
                            </div>
                            <Progress value={(activeChallenge.completedDays.length / activeC.duration) * 100} className="h-3" />
                        </div>

                        <div className="bg-background/50 rounded-lg p-4 mb-6">
                            <h3 className="font-semibold mb-2">Meta de Hoje</h3>
                            <p className="text-sm text-muted-foreground">{activeC.dailyGoal}</p>
                        </div>

                        <Button
                            onClick={handleCompleteTodayWorkout}
                            className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                            size="lg"
                            disabled={activeChallenge.completedDays.includes(new Date().toISOString().split('T')[0])}
                        >
                            {activeChallenge.completedDays.includes(new Date().toISOString().split('T')[0]) ? (
                                <>
                                    <Check className="w-5 h-5 mr-2" />
                                    Treino de Hoje Concluído
                                </>
                            ) : (
                                <>
                                    <Play className="w-5 h-5 mr-2" />
                                    Iniciar Treino de Hoje
                                </>
                            )}
                        </Button>
                    </Card>
                )}

                {/* Available Challenges */}
                {!activeC && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {challenges.map((challenge) => {
                            const isLocked = !isPremium && ['desafio-beast-mode-45-dias', 'desafio-core-killer-14-dias'].includes(challenge.id);

                            return (
                                <Card
                                    key={challenge.id}
                                    className={`p-6 transition-colors border-2 ${isLocked ? 'opacity-80' : 'hover:border-[#FF9F1C]/50 cursor-pointer'}`}
                                    onClick={() => !isLocked && setSelectedChallenge(challenge.id)}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-5xl">{challenge.badge}</div>
                                        {isLocked && <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full"><Lock className="w-5 h-5 text-gray-500" /></div>}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                        {challenge.name}
                                        {isLocked && <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">PREMIUM</span>}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                        {challenge.description}
                                    </p>

                                    <div className="flex gap-2 mb-4">
                                        <Badge variant="outline">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {challenge.duration} dias
                                        </Badge>
                                        <Badge variant="outline">
                                            {challenge.exercises.length} exercícios
                                        </Badge>
                                    </div>

                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (isLocked) {
                                                router.push('/premium');
                                            } else {
                                                setSelectedChallenge(challenge.id);
                                            }
                                        }}
                                        className="w-full"
                                        variant={isLocked ? 'secondary' : 'outline'}
                                    >
                                        {isLocked ? (
                                            <>
                                                <Lock className="w-4 h-4 mr-2" />
                                                Desbloquear Premium
                                            </>
                                        ) : (
                                            'Ver Detalhes'
                                        )}
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                )}

                {/* Challenge Details Modal */}
                {selectedChallenge && (
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="text-5xl">
                                            {challenges.find(c => c.id === selectedChallenge)?.badge}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                {challenges.find(c => c.id === selectedChallenge)?.name}
                                            </h2>
                                            <Badge variant="outline" className="mt-1">
                                                {challenges.find(c => c.id === selectedChallenge)?.duration} dias
                                            </Badge>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setSelectedChallenge(null)}
                                    >
                                        <X className="w-5 h-5" />
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mb-6">
                                    {challenges.find(c => c.id === selectedChallenge)?.description}
                                </p>

                                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold mb-2">Meta Diária</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {challenges.find(c => c.id === selectedChallenge)?.dailyGoal}
                                    </p>
                                </div>

                                <h3 className="font-semibold mb-3">Exercícios do Desafio</h3>
                                <div className="space-y-3 mb-6">
                                    {challenges.find(c => c.id === selectedChallenge)?.exercises.map((ex) => {
                                        const exercise = exercises.find(e => e.id === ex.exerciseId);
                                        if (!exercise) return null;

                                        return (
                                            <div key={ex.exerciseId} className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                                                <div>
                                                    <div className="font-medium">{exercise.name}</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {exercise.muscleGroups.join(', ')}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="font-semibold text-[#FF9F1C]">
                                                        {ex.sets} × {ex.reps}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">séries × reps</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <Button
                                    onClick={() => handleAcceptChallenge(selectedChallenge)}
                                    className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                                    size="lg"
                                >
                                    <Trophy className="w-5 h-5 mr-2" />
                                    Aceitar Desafio
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}
            </main>
        </div>
    );
}
