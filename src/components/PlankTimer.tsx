'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

export function PlankTimer() {
    const [duration, setDuration] = useState(30);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);

    const durations = [
        { label: '30 segundos', value: 30 },
        { label: '60 segundos', value: 60 },
        { label: '90 segundos', value: 90 },
        { label: '120 segundos', value: 120 },
        { label: '150 segundos', value: 150 },
    ];

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        handleComplete();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, timeLeft]);

    const playBeep = () => {
        try {
            // Create AudioContext
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            const audioContext = audioContextRef.current;

            // Create oscillator for beep sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800; // Frequency in Hz
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (error) {
            console.log('Audio not supported:', error);
        }
    };

    const vibrate = () => {
        if ('vibrate' in navigator) {
            // Vibration pattern: vibrate for 200ms, pause 100ms, vibrate 200ms
            navigator.vibrate([200, 100, 200]);
        }
    };

    const handleComplete = () => {
        setIsRunning(false);
        setIsCompleted(true);
        playBeep();
        vibrate();
    };

    const handleStart = () => {
        if (timeLeft === 0) {
            setTimeLeft(duration);
            setIsCompleted(false);
        }
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(duration);
        setIsCompleted(false);
    };

    const handleDurationChange = (value: string) => {
        const newDuration = parseInt(value);
        setDuration(newDuration);
        setTimeLeft(newDuration);
        setIsRunning(false);
        setIsCompleted(false);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = ((duration - timeLeft) / duration) * 100;

    return (
        <Card className="bg-gradient-to-br from-[#FF9F1C]/10 to-[#D6FFB7]/10 dark:from-[#FF9F1C]/5 dark:to-[#D6FFB7]/5 border-2 border-[#FF9F1C]/30">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                    <Timer className="h-6 w-6 text-[#FF9F1C]" />
                    Timer de Prancha
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Duration Selector */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Duração:</label>
                    <Select value={duration.toString()} onValueChange={handleDurationChange} disabled={isRunning}>
                        <SelectTrigger className="w-full text-lg">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {durations.map((d) => (
                                <SelectItem key={d.value} value={d.value.toString()}>
                                    {d.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Timer Display */}
                <div className="relative">
                    <div className="text-center py-8">
                        <div
                            className={`text-7xl md:text-8xl font-bold transition-colors ${isCompleted
                                    ? 'text-green-500'
                                    : timeLeft <= 10 && timeLeft > 0
                                        ? 'text-red-500 animate-pulse'
                                        : 'text-[#080357] dark:text-white'
                                }`}
                        >
                            {formatTime(timeLeft)}
                        </div>
                        {isCompleted && (
                            <div className="text-xl md:text-2xl font-semibold text-green-500 mt-4 animate-in fade-in">
                                🎉 Completado! Você é fera! 💪
                            </div>
                        )}
                        {!isCompleted && !isRunning && timeLeft > 0 && (
                            <div className="text-sm text-muted-foreground mt-2">
                                Pronto para começar?
                            </div>
                        )}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-[#FF9F1C] to-[#D6FFB7] transition-all duration-1000 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Controls */}
                <div className="flex gap-2">
                    {!isRunning ? (
                        <Button
                            onClick={handleStart}
                            className="flex-1 bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white text-lg py-6"
                            size="lg"
                        >
                            <Play className="h-5 w-5 mr-2" />
                            {timeLeft === 0 || isCompleted ? 'Reiniciar' : 'Iniciar'}
                        </Button>
                    ) : (
                        <Button
                            onClick={handlePause}
                            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-lg py-6"
                            size="lg"
                        >
                            <Pause className="h-5 w-5 mr-2" />
                            Pausar
                        </Button>
                    )}
                    <Button
                        onClick={handleReset}
                        variant="outline"
                        className="px-6 py-6"
                        size="lg"
                        disabled={timeLeft === duration && !isCompleted}
                    >
                        <RotateCcw className="h-5 w-5" />
                    </Button>
                </div>

                {/* Tips */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <p className="text-sm text-blue-600 dark:text-blue-400">
                        💡 <strong>Dica:</strong> Mantenha o corpo completamente reto, core contraído e glúteos ativos durante toda a prancha!
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
