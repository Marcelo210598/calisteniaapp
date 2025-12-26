'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { HITWorkout } from '@/data/hitWorkouts';

interface HITTimerProps {
    workout: HITWorkout;
}

export function HITTimer({ workout }: HITTimerProps) {
    const [isRunning, setIsRunning] = useState(false);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [currentRound, setCurrentRound] = useState(1);
    const [timeLeft, setTimeLeft] = useState(workout.exercises[0].workTime);
    const [isResting, setIsResting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [soundEnabled, setSoundEnabled] = useState(true);

    const audioContextRef = useRef<AudioContext | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const currentExercise = workout.exercises[currentExerciseIndex];
    const nextExercise = workout.exercises[currentExerciseIndex + 1];
    const totalRounds = currentExercise.rounds;

    // Initialize audio context
    useEffect(() => {
        if (typeof window !== 'undefined') {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    // Play beep sound
    const playBeep = (frequency: number = 800, duration: number = 200) => {
        if (!soundEnabled || !audioContextRef.current) return;

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + duration / 1000);

        oscillator.start(audioContextRef.current.currentTime);
        oscillator.stop(audioContextRef.current.currentTime + duration / 1000);
    };

    // Vibrate
    const vibrate = (pattern: number | number[]) => {
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    };

    // Timer logic
    useEffect(() => {
        if (!isRunning || isComplete) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Time's up for current interval
                    if (isResting) {
                        // Rest is over, move to next round or exercise
                        if (currentRound < totalRounds) {
                            // Next round of same exercise
                            setCurrentRound(currentRound + 1);
                            setIsResting(false);
                            playBeep(1000, 300);
                            vibrate([100, 50, 100]);
                            return currentExercise.workTime;
                        } else {
                            // Move to next exercise
                            if (currentExerciseIndex < workout.exercises.length - 1) {
                                setCurrentExerciseIndex(currentExerciseIndex + 1);
                                setCurrentRound(1);
                                setIsResting(false);
                                playBeep(1200, 400);
                                vibrate([200, 100, 200]);
                                return workout.exercises[currentExerciseIndex + 1].workTime;
                            } else {
                                // Workout complete!
                                setIsComplete(true);
                                setIsRunning(false);
                                playBeep(1500, 600);
                                vibrate([300, 100, 300, 100, 300]);
                                return 0;
                            }
                        }
                    } else {
                        // Work is over, start rest
                        setIsResting(true);
                        playBeep(600, 200);
                        vibrate(100);
                        return currentExercise.restTime;
                    }
                }

                // Countdown beeps
                if (prev <= 3 && prev > 0) {
                    playBeep(400, 100);
                    vibrate(50);
                }

                return prev - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, isResting, currentRound, currentExerciseIndex, isComplete, soundEnabled]);

    const handlePlayPause = () => {
        setIsRunning(!isRunning);
        if (!isRunning) {
            vibrate(50);
        }
    };

    const handleReset = () => {
        setIsRunning(false);
        setCurrentExerciseIndex(0);
        setCurrentRound(1);
        setTimeLeft(workout.exercises[0].workTime);
        setIsResting(false);
        setIsComplete(false);
        vibrate(100);
    };

    const progress = isResting
        ? ((currentExercise.restTime - timeLeft) / currentExercise.restTime) * 100
        : ((currentExercise.workTime - timeLeft) / currentExercise.workTime) * 100;

    const circumference = 2 * Math.PI * 120;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    if (isComplete) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
                <div className="mb-8">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-[#080357] dark:text-white mb-2">
                        Treino Completo!
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Parabéns! Você completou o {workout.name}
                    </p>
                </div>
                <Button
                    onClick={handleReset}
                    size="lg"
                    className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                >
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Fazer Novamente
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-4 md:p-8 max-w-2xl mx-auto">
            {/* Timer Circle */}
            <div className="relative mb-8">
                <svg className="transform -rotate-90" width="280" height="280">
                    {/* Background circle */}
                    <circle
                        cx="140"
                        cy="140"
                        r="120"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-gray-200 dark:text-gray-700"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="140"
                        cy="140"
                        r="120"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className={isResting ? 'text-blue-500' : 'text-[#FF9F1C]'}
                        style={{ transition: 'stroke-dashoffset 1s linear' }}
                    />
                </svg>

                {/* Timer content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-7xl font-bold text-[#080357] dark:text-white mb-2">
                        {timeLeft}
                    </div>
                    <div className={`text-lg font-semibold uppercase tracking-wide ${isResting ? 'text-blue-500' : 'text-[#FF9F1C]'}`}>
                        {isResting ? 'Descanso' : 'Trabalho'}
                    </div>
                </div>
            </div>

            {/* Current Exercise */}
            <div className="text-center mb-6 w-full">
                <div className="text-sm text-muted-foreground mb-1">
                    Exercício {currentExerciseIndex + 1} de {workout.exercises.length}
                </div>
                <h3 className="text-3xl font-bold text-[#080357] dark:text-white mb-2">
                    {currentExercise.name}
                </h3>
                <div className="text-lg text-muted-foreground">
                    Round {currentRound} de {totalRounds}
                </div>
            </div>

            {/* Next Exercise Preview */}
            {nextExercise && !isResting && (
                <div className="bg-muted/50 rounded-lg p-4 mb-6 w-full">
                    <div className="text-sm text-muted-foreground mb-1">Próximo:</div>
                    <div className="font-semibold text-[#080357] dark:text-white">
                        {nextExercise.name}
                    </div>
                </div>
            )}

            {/* Controls */}
            <div className="flex gap-4 mb-6">
                <Button
                    onClick={handlePlayPause}
                    size="lg"
                    className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white h-16 w-16 rounded-full"
                >
                    {isRunning ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                </Button>
                <Button
                    onClick={handleReset}
                    size="lg"
                    variant="outline"
                    className="h-16 w-16 rounded-full"
                >
                    <RotateCcw className="h-6 w-6" />
                </Button>
                <Button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    size="lg"
                    variant="outline"
                    className="h-16 w-16 rounded-full"
                >
                    {soundEnabled ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
                </Button>
            </div>

            {/* Exercise List */}
            <div className="w-full bg-card rounded-lg border p-4">
                <h4 className="font-semibold mb-3 text-[#080357] dark:text-white">Lista de Exercícios</h4>
                <div className="space-y-2">
                    {workout.exercises.map((exercise, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg transition-colors ${index === currentExerciseIndex
                                    ? 'bg-[#FF9F1C]/10 border-2 border-[#FF9F1C]'
                                    : index < currentExerciseIndex
                                        ? 'bg-green-50 dark:bg-green-900/20 opacity-60'
                                        : 'bg-muted/50'
                                }`}
                        >
                            <div className="flex justify-between items-center">
                                <div className="font-medium text-sm">{exercise.name}</div>
                                <div className="text-xs text-muted-foreground">
                                    {exercise.workTime}s / {exercise.restTime}s × {exercise.rounds}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
