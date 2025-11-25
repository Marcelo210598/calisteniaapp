'use client';

import { Button } from '@/components/ui/button';
import { useProgressStore } from '@/store/progressStore';
import { CheckCircle, Circle } from 'lucide-react';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface ProgressToggleProps {
  exerciseId: string;
  exerciseName: string;
}

export function ProgressToggle({ exerciseId, exerciseName }: ProgressToggleProps) {
  const { isExerciseCompleted, toggleExercise } = useProgressStore();
  const [isCompleted, setIsCompleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsCompleted(isExerciseCompleted(exerciseId));
  }, [exerciseId, isExerciseCompleted]);

  const handleToggle = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    toggleExercise(exerciseId);

    if (newState) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9F1C', '#D6FFB7', '#F5FF90']
      });
    }
  };

  if (!mounted) return null;

  return (
    <Button
      size="lg"
      onClick={handleToggle}
      className={`w-full md:w-auto text-lg px-8 py-6 transition-all duration-300 ${isCompleted
          ? 'bg-[#D6FFB7] text-[#080357] hover:bg-[#bdfca0]'
          : 'bg-[#080357] text-white hover:bg-[#0a046e]'
        }`}
    >
      {isCompleted ? (
        <>
          <CheckCircle className="mr-2 h-6 w-6" />
          Concluído
        </>
      ) : (
        <>
          <Circle className="mr-2 h-6 w-6" />
          Marcar como Concluído
        </>
      )}
    </Button>
  );
}