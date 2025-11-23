'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';

interface ProgressToggleProps {
  exerciseId: string;
  exerciseName: string;
}

export function ProgressToggle({ exerciseId, exerciseName }: ProgressToggleProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { addProgress, removeProgress, getProgressByExercise } = useProgressStore();
  
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const progress = getProgressByExercise(exerciseId);
    const todayProgress = progress.find(p => p.date === today);
    setIsCompleted(!!todayProgress);
  }, [exerciseId, getProgressByExercise]);

  const toggleProgress = () => {
    if (isCompleted) {
      removeProgress(exerciseId, today);
      setIsCompleted(false);
    } else {
      addProgress(exerciseId, `Treino ${exerciseName} concluído!`);
      setIsCompleted(true);
    }
  };

  return (
    <Button
      onClick={toggleProgress}
      variant={isCompleted ? "default" : "outline"}
      className={`flex items-center space-x-2 ${
        isCompleted 
          ? 'bg-[#D6FFB7] hover:bg-[#F5FF90] text-[#080357]' 
          : 'border-[#FF9F1C] text-[#FF9F1C] hover:bg-[#FF9F1C] hover:text-white'
      }`}
    >
      {isCompleted ? (
        <CheckCircle className="h-4 w-4" />
      ) : (
        <Circle className="h-4 w-4" />
      )}
      <span>{isCompleted ? 'Concluído Hoje' : 'Marcar Concluído'}</span>
    </Button>
  );
}