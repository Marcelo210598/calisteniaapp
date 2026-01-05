'use client';

import { Header } from '@/components/Header';
import { ExerciseCard } from '@/components/ExerciseCard';
import { exercises } from '@/data/exercises';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Filter } from 'lucide-react';
import { useState } from 'react';

export default function ExercisesPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];
  const categories = ['all', 'Push', 'Pull', 'Legs', 'Core', 'Full Body'];

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Iniciante';
      case 'intermediate': return 'Intermediário';
      case 'advanced': return 'Avançado';
      default: return 'Todos';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'Push': return 'Empurrar';
      case 'Pull': return 'Puxar';
      case 'Legs': return 'Pernas';
      case 'Core': return 'Core';
      case 'Full Body': return 'Corpo Completo';
      default: return 'Todas';
    }
  };

  const filteredExercises = exercises
    .filter(exercise => {
      const difficultyMatch = selectedDifficulty === 'all' || exercise.difficulty === selectedDifficulty;
      const categoryMatch = selectedCategory === 'all' || exercise.category === selectedCategory;
      return difficultyMatch && categoryMatch;
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <Header />

      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Dumbbell className="h-8 w-8 text-[#FF9F1C] mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white">
              Exercícios de Calistenia
            </h1>
          </div>
          <p className="text-xl text-[#080357] dark:text-white max-w-3xl mx-auto">
            Domine os movimentos fundamentais e avançados da calistenia.
            Cada exercício vem com instruções detalhadas e dicas de execução.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-[#FF9F1C]" />
              <span className="font-semibold text-[#080357] dark:text-white">Filtrar por:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={selectedDifficulty === difficulty
                    ? 'bg-[#FF9F1C] hover:bg-[#FFC15E] text-white'
                    : 'border-[#080357] text-[#080357] hover:bg-[#080357] hover:text-white'
                  }
                >
                  {getDifficultyLabel(difficulty)}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category
                    ? 'bg-[#FF9F1C] hover:bg-[#FFC15E] text-white'
                    : 'border-[#080357] text-[#080357] hover:bg-[#080357] hover:text-white'
                  }
                >
                  {getCategoryLabel(category)}
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-[#F5FF90] text-[#080357]">
              {filteredExercises.length} exercício(s) encontrado(s)
            </Badge>
          </div>
        </div>
      </section>

      {/* Exercises Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {filteredExercises.length === 0 ? (
            <div className="text-center py-12">
              <Dumbbell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                Nenhum exercício encontrado
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tente ajustar os filtros para ver mais exercícios.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}