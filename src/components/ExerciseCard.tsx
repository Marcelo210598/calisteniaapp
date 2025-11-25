'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Exercise } from '@/types';
import Link from 'next/link';

interface ExerciseCardProps {
  exercise: Exercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-[#D6FFB7] text-[#080357]';
      case 'intermediate':
        return 'bg-[#F5FF90] text-[#080357]';
      case 'advanced':
        return 'bg-[#FFC15E] text-[#080357]';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Iniciante';
      case 'intermediate':
        return 'Intermediário';
      case 'advanced':
        return 'Avançado';
      default:
        return difficulty;
    }
  };

  return (
    <Card className="h-full hover:shadow-lg active:scale-98 transition-all duration-200 border-2 border-transparent hover:border-[#FF9F1C]">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getDifficultyColor(exercise.difficulty)}>
            {getDifficultyLabel(exercise.difficulty)}
          </Badge>
          <Badge variant="outline" className="text-[#080357] dark:text-white border-[#FF9F1C]">
            {exercise.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-[#080357] dark:text-white">{exercise.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
          {exercise.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="font-semibold text-[#080357] dark:text-white mb-2">Músculos Trabalhados:</h4>
          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-[#F5FF90] text-[#080357]">
                {muscle}
              </Badge>
            ))}
          </div>
        </div>
        <Link href={`/exercicios/${exercise.slug}`} prefetch={true}>
          <Button className="w-full h-12 md:h-14 min-h-12 max-h-14 bg-[#FF9F1C] hover:bg-[#FFC15E] active:scale-95 text-white transition-all duration-150">
            Ver Detalhes
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}