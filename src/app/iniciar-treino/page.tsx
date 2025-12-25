'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { exercises } from '@/data/exercises';
import { useWorkoutStore } from '@/store/workoutStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, Timer, Trophy, Play, Pause, SkipForward, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export default function IniciarTreinoPage() {
    const router = useRouter();
    const { customWorkouts, activeWorkout, startWorkout, completeSet, nextExercise, finishWorkout } = useWorkoutStore();

    const [restTimer, setRestTimer] = useState(0);
    const [isResting, setIsResting] = useState(false);
    const [restDuration, setRestDuration] = useState(90); // Default 90 seconds
    const [showCompletion, setShowCompletion] = useState(false);
    const [completedSetsInCurrentExercise, setCompletedSetsInCurrentExercise] = useState<number[]>([]);

    // Get the last saved workout
    const lastWorkout = customWorkouts[customWorkouts.length - 1];

    useEffect(() => {
        if (lastWorkout && !activeWorkout) {
            startWorkout(lastWorkout.id);
        }
    }, [lastWorkout, activeWorkout, startWorkout]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isResting && restTimer > 0) {
            interval = setInterval(() => {
                setRestTimer((prev) => {
                    if (prev <= 1) {
                        setIsResting(false);
                        // Vibrate when rest is complete
                        if (typeof navigator !== 'undefined' && navigator.vibrate) {
                            navigator.vibrate([100, 50, 100]);
                        }
                        toast.success('Descanso completo!', {
                            description: 'Próxima série',
                        });
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isResting, restTimer]);

    if (!lastWorkout || !activeWorkout) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="p-8 text-center max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Nenhum treino ativo</h2>
                    <p className="text-muted-foreground mb-6">
                        Crie um treino personalizado primeiro
                    </p>
                    <Button
                        onClick={() => router.push('/treino-personalizado')}
                        className="min-h-[56px] w-full"
                    >
                        Montar Treino
                    </Button>
                </Card>
            </div>
        );
    }

    const currentExerciseData = lastWorkout.exercises[activeWorkout.currentExerciseIndex];
    const currentExercise = exercises.find(e => e.id === currentExerciseData?.exerciseId);
    const completedSetsCount = activeWorkout.completedSets[currentExerciseData?.exerciseId] || 0;
    const totalExercises = lastWorkout.exercises.length;
    const completedExercises = activeWorkout.currentExerciseIndex;
    const progressPercentage = ((completedExercises / totalExercises) * 100);

    const handleCompleteSet = (setIndex: number) => {
        if (!currentExerciseData) return;

        // Toggle set completion
        if (completedSetsInCurrentExercise.includes(setIndex)) {
            setCompletedSetsInCurrentExercise(prev => prev.filter(i => i !== setIndex));
            return;
        }

        setCompletedSetsInCurrentExercise(prev => [...prev, setIndex]);
        completeSet(currentExerciseData.exerciseId);

        // Vibrate on set completion
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(200);
        }

        toast.success(`Série ${setIndex + 1} concluída! 💪`);

        // If all sets completed, prepare to move to next exercise
        if (completedSetsCount + 1 >= currentExerciseData.sets) {
            if (activeWorkout.currentExerciseIndex < totalExercises - 1) {
                // Not the last exercise
                setTimeout(() => {
                    toast.info('Exercício completo!', {
                        description: 'Preparando próximo exercício...',
                    });
                }, 500);
            } else {
                // Last exercise - workout complete!
                setTimeout(() => {
                    handleFinishWorkout();
                }, 500);
            }
        } else {
            // Start rest timer
            setRestTimer(restDuration);
            setIsResting(true);
        }
    };

    const handleNextExercise = () => {
        if (activeWorkout.currentExerciseIndex < totalExercises - 1) {
            nextExercise();
            setCompletedSetsInCurrentExercise([]);
            toast.success('Próximo exercício!');
            // Vibrate
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate([100, 50, 100]);
            }
        } else {
            handleFinishWorkout();
        }
    };

    const handleFinishWorkout = () => {
        setShowCompletion(true);

        // Vibrate celebration
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }

        // Show motivational Instagram toast
        toast.success('Treino concluído, monstro! 💪', {
            description: 'Marca @califorce_oficial no seu story e inspire a comunidade!',
            duration: 8000,
            action: {
                label: 'Abrir Instagram',
                onClick: () => window.open('https://www.instagram.com/califorce_oficial/', '_blank')
            }
        });

        // Confetti celebration!
        const duration = 3000;
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
    };

    const handleClose = () => {
        finishWorkout();
        router.push('/');
    };

    if (showCompletion) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#FF9F1C]/20 to-[#080357]/20 flex items-center justify-center p-4">
                <Card className="p-8 text-center max-w-md w-full">
                    <div className="mb-6">
                        <div className="w-24 h-24 bg-[#FF9F1C] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-12 h-12 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Parabéns! 🎉</h1>
                        <p className="text-xl text-muted-foreground">
                            Você completou o treino!
                        </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold mb-2">{lastWorkout.name}</h3>
                        <p className="text-sm text-muted-foreground">
                            {totalExercises} exercícios • {lastWorkout.exercises.reduce((acc, ex) => acc + ex.sets, 0)} séries totais
                        </p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                        Continue assim e você vai conquistar seus objetivos! 💪
                    </p>

                    <div className="space-y-3">
                        <Button
                            onClick={handleClose}
                            className="w-full min-h-[60px] text-lg"
                            size="lg"
                        >
                            Voltar ao Início
                        </Button>
                        <Button
                            onClick={() => router.push('/treino-personalizado')}
                            variant="outline"
                            className="w-full min-h-[60px] text-lg"
                        >
                            Criar Novo Treino
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    if (!currentExercise || !currentExerciseData) {
        return null;
    }

    const difficultyColors = {
        beginner: 'bg-green-500/10 text-green-500 border-green-500/20',
        intermediate: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        advanced: 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    // Calculate circular progress for timer
    const timerProgress = restTimer > 0 ? ((restDuration - restTimer) / restDuration) * 100 : 0;
    const circumference = 2 * Math.PI * 70; // radius = 70
    const strokeDashoffset = circumference - (timerProgress / 100) * circumference;

    return (
        <div className="min-h-screen bg-background">
            {/* Header - Hidden on Mobile for Fullscreen */}
            <div className="bg-card border-b border-border sticky top-0 z-10 hidden md:block">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <Button variant="ghost" size="icon" onClick={() => router.back()}>
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <h1 className="text-lg font-semibold">{lastWorkout.name}</h1>
                        <Button variant="ghost" size="icon" onClick={handleClose}>
                            ✕
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                                Exercício {completedExercises + 1} de {totalExercises}
                            </span>
                            <span className="font-medium">{Math.round(progressPercentage)}%</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                    </div>
                </div>
            </div>

            {/* Mobile Progress Bar - Sticky Top */}
            <div className="md:hidden sticky top-0 z-10 bg-background/95 backdrop-blur-lg border-b border-border">
                <div className="px-4 py-3">
                    <div className="flex items-center justify-between mb-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleClose}
                            className="min-h-[48px] min-w-[48px]"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                        <span className="text-sm font-medium">
                            {completedExercises + 1}/{totalExercises}
                        </span>
                        <span className="text-sm font-bold text-[#FF9F1C]">
                            {Math.round(progressPercentage)}%
                        </span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-6 md:py-8 max-w-2xl pb-32 md:pb-8">
                {/* Rest Timer with Circular Animation */}
                {isResting && (
                    <Card className="p-8 mb-6 bg-[#FF9F1C]/10 border-[#FF9F1C]/20">
                        <div className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4">
                                {/* Background circle */}
                                <svg className="transform -rotate-90 w-48 h-48">
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="70"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        className="text-muted"
                                    />
                                    {/* Progress circle */}
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="70"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        className="text-[#FF9F1C] transition-all duration-1000"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                {/* Timer text in center */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <Timer className="w-8 h-8 text-[#FF9F1C] mb-2" />
                                    <div className="text-5xl font-bold text-[#FF9F1C]">
                                        {Math.floor(restTimer / 60)}:{(restTimer % 60).toString().padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Descansando...</h3>
                            <div className="flex gap-3 justify-center">
                                <Button
                                    onClick={() => {
                                        setIsResting(false);
                                        setRestTimer(0);
                                        toast.info('Descanso pulado');
                                    }}
                                    variant="outline"
                                    className="min-h-[56px] px-8 touch-manipulation"
                                >
                                    <SkipForward className="w-5 h-5 mr-2" />
                                    Pular Descanso
                                </Button>
                            </div>
                        </div>
                    </Card>
                )}

                {/* Current Exercise */}
                <Card className="p-6 md:p-8 mb-6">
                    <div className="mb-6">
                        <div className="flex gap-2 mb-3 flex-wrap">
                            <Badge className={difficultyColors[currentExercise.difficulty as keyof typeof difficultyColors]}>
                                {currentExercise.difficulty === 'beginner' ? 'Iniciante' : currentExercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                            </Badge>
                            <Badge variant="outline">{currentExercise.category}</Badge>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentExercise.name}</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            {currentExercise.muscleGroups.join(' • ')}
                        </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6 mb-6">
                        <div className="grid grid-cols-2 gap-6 text-center">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-[#FF9F1C]">{currentExerciseData.sets}</div>
                                <div className="text-sm md:text-base text-muted-foreground mt-1">Séries</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-[#FF9F1C]">{currentExerciseData.reps}</div>
                                <div className="text-sm md:text-base text-muted-foreground mt-1">Repetições</div>
                            </div>
                        </div>
                    </div>

                    {/* Sets Checkboxes - Touch Optimized */}
                    <div className="mb-6">
                        <div className="flex justify-between text-sm mb-3">
                            <span className="font-medium">Marque as séries concluídas</span>
                            <span className="text-muted-foreground">
                                {completedSetsCount} / {currentExerciseData.sets}
                            </span>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                            {Array.from({ length: currentExerciseData.sets }).map((_, i) => {
                                const isCompleted = completedSetsInCurrentExercise.includes(i);
                                return (
                                    <button
                                        key={i}
                                        onClick={() => handleCompleteSet(i)}
                                        disabled={isResting}
                                        className={`
                                            min-h-[72px] rounded-lg border-2 flex flex-col items-center justify-center
                                            transition-all duration-200 touch-manipulation
                                            ${isCompleted
                                                ? 'bg-[#FF9F1C] border-[#FF9F1C] text-white'
                                                : 'bg-background border-border hover:border-[#FF9F1C]/50'
                                            }
                                            ${isResting ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
                                        `}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className="w-8 h-8 mb-1" />
                                        ) : (
                                            <div className="w-8 h-8 rounded-full border-2 border-current mb-1" />
                                        )}
                                        <span className="text-sm font-semibold">Série {i + 1}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                {/* Exercise Tips */}
                <Card className="p-6 mb-6">
                    <h3 className="font-semibold mb-3 text-base md:text-lg">Dicas de Execução</h3>
                    <ul className="space-y-2">
                        {currentExercise.tips.slice(0, 3).map((tip, i) => (
                            <li key={i} className="text-sm md:text-base text-muted-foreground flex gap-2">
                                <span className="text-[#FF9F1C] shrink-0">•</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Rest Duration Settings */}
                <Card className="p-6">
                    <h3 className="font-semibold mb-3 text-base md:text-lg">Tempo de Descanso</h3>
                    <div className="grid grid-cols-4 gap-2">
                        {[60, 90, 120, 180].map((seconds) => (
                            <Button
                                key={seconds}
                                variant={restDuration === seconds ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => {
                                    setRestDuration(seconds);
                                    toast.success(`Descanso: ${seconds}s`);
                                }}
                                className="min-h-[56px] touch-manipulation"
                            >
                                {seconds}s
                            </Button>
                        ))}
                    </div>
                </Card>
            </main>

            {/* Sticky Bottom Button - Mobile */}
            <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border p-4 z-40">
                <div className="container mx-auto max-w-2xl">
                    <Button
                        onClick={handleNextExercise}
                        disabled={isResting || completedSetsCount < currentExerciseData.sets}
                        className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white min-h-[72px] text-xl font-bold touch-manipulation disabled:opacity-50"
                    >
                        {activeWorkout.currentExerciseIndex < totalExercises - 1 ? (
                            <>
                                <Check className="w-7 h-7 mr-2" />
                                Próximo Exercício
                            </>
                        ) : (
                            <>
                                <Trophy className="w-7 h-7 mr-2" />
                                Finalizar Treino
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
