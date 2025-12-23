'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { exercises } from '@/data/exercises';
import { useWorkoutStore } from '@/store/workoutStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, Timer, Trophy, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function IniciarTreinoPage() {
    const router = useRouter();
    const { customWorkouts, activeWorkout, startWorkout, completeSet, nextExercise, finishWorkout } = useWorkoutStore();

    const [restTimer, setRestTimer] = useState(0);
    const [isResting, setIsResting] = useState(false);
    const [restDuration, setRestDuration] = useState(90); // Default 90 seconds
    const [showCompletion, setShowCompletion] = useState(false);

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
                    <Button onClick={() => router.push('/treino-personalizado')}>
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

    const handleCompleteSet = () => {
        if (!currentExerciseData) return;

        completeSet(currentExerciseData.exerciseId);

        // If all sets completed, move to next exercise
        if (completedSetsCount + 1 >= currentExerciseData.sets) {
            if (activeWorkout.currentExerciseIndex < totalExercises - 1) {
                nextExercise();
            } else {
                // Workout completed!
                handleFinishWorkout();
            }
        } else {
            // Start rest timer
            setRestTimer(restDuration);
            setIsResting(true);
        }
    };

    const handleFinishWorkout = () => {
        setShowCompletion(true);

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
                        <Button onClick={handleClose} className="w-full" size="lg">
                            Voltar ao Início
                        </Button>
                        <Button
                            onClick={() => router.push('/treino-personalizado')}
                            variant="outline"
                            className="w-full"
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

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-card border-b border-border sticky top-0 z-10">
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

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 max-w-2xl">
                {/* Rest Timer */}
                {isResting && (
                    <Card className="p-6 mb-6 bg-[#FF9F1C]/10 border-[#FF9F1C]/20">
                        <div className="text-center">
                            <Timer className="w-12 h-12 mx-auto mb-3 text-[#FF9F1C]" />
                            <h3 className="text-2xl font-bold mb-2">Descansando</h3>
                            <div className="text-5xl font-bold text-[#FF9F1C] mb-4">
                                {Math.floor(restTimer / 60)}:{(restTimer % 60).toString().padStart(2, '0')}
                            </div>
                            <Button
                                onClick={() => {
                                    setIsResting(false);
                                    setRestTimer(0);
                                }}
                                variant="outline"
                            >
                                Pular Descanso
                            </Button>
                        </div>
                    </Card>
                )}

                {/* Current Exercise */}
                <Card className="p-6 mb-6">
                    <div className="mb-4">
                        <div className="flex gap-2 mb-3">
                            <Badge className={difficultyColors[currentExercise.difficulty as keyof typeof difficultyColors]}>
                                {currentExercise.difficulty === 'beginner' ? 'Iniciante' : currentExercise.difficulty === 'intermediate' ? 'Intermediário' : 'Avançado'}
                            </Badge>
                            <Badge variant="outline">{currentExercise.category}</Badge>
                        </div>

                        <h2 className="text-3xl font-bold mb-2">{currentExercise.name}</h2>
                        <p className="text-muted-foreground">
                            {currentExercise.muscleGroups.join(' • ')}
                        </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                                <div className="text-3xl font-bold text-[#FF9F1C]">{currentExerciseData.sets}</div>
                                <div className="text-sm text-muted-foreground">Séries</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-[#FF9F1C]">{currentExerciseData.reps}</div>
                                <div className="text-sm text-muted-foreground">Repetições</div>
                            </div>
                        </div>
                    </div>

                    {/* Sets Progress */}
                    <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">Progresso das Séries</span>
                            <span className="text-muted-foreground">
                                {completedSetsCount} / {currentExerciseData.sets}
                            </span>
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: currentExerciseData.sets }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 h-3 rounded-full ${i < completedSetsCount ? 'bg-[#FF9F1C]' : 'bg-muted'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Complete Set Button */}
                    <Button
                        onClick={handleCompleteSet}
                        disabled={isResting}
                        className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                        size="lg"
                    >
                        <Check className="w-5 h-5 mr-2" />
                        {completedSetsCount + 1 >= currentExerciseData.sets
                            ? activeWorkout.currentExerciseIndex < totalExercises - 1
                                ? 'Próximo Exercício'
                                : 'Finalizar Treino'
                            : `Completar Série ${completedSetsCount + 1}`}
                    </Button>
                </Card>

                {/* Exercise Tips */}
                <Card className="p-6">
                    <h3 className="font-semibold mb-3">Dicas de Execução</h3>
                    <ul className="space-y-2">
                        {currentExercise.tips.slice(0, 3).map((tip, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-[#FF9F1C]">•</span>
                                <span>{tip}</span>
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Rest Duration Settings */}
                <Card className="p-6 mt-6">
                    <h3 className="font-semibold mb-3">Tempo de Descanso</h3>
                    <div className="flex gap-2">
                        {[60, 90, 120, 180].map((seconds) => (
                            <Button
                                key={seconds}
                                variant={restDuration === seconds ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setRestDuration(seconds)}
                            >
                                {seconds}s
                            </Button>
                        ))}
                    </div>
                </Card>
            </main>
        </div>
    );
}
