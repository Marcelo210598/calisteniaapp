'use client';

import { useProgressStore } from '@/store/progressStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Trophy, Target, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';
import { exercises } from '@/data/exercises';
import Link from 'next/link';

export function ProgressDashboard() {
  const { completedExercises, completedWorkouts, getCompletedCount } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const totalExercises = exercises.length;
  const completedCount = getCompletedCount();
  const completionPercentage = Math.round((completedCount / totalExercises) * 100);
  const workoutsCompleted = completedWorkouts.length;

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[#D6FFB7] to-[#F5FF90] border-none shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-[#080357] flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Exercícios Concluídos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-[#080357]">{completedCount}</div>
            <p className="text-sm text-[#080357]/70">de {totalExercises} exercícios</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#FFC15E] to-[#FF9F1C] border-none shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Flame className="h-5 w-5" />
              Treinos Completos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">{workoutsCompleted}</div>
            <p className="text-sm text-white/80">treinos finalizados</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-[#080357] to-[#1e293b] border-none shadow-xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="h-5 w-5" />
              Progresso Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">{completionPercentage}%</div>
            <p className="text-sm text-white/80">da jornada completa</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      <Card className="border-none shadow-xl">
        <CardHeader>
          <CardTitle className="text-[#080357] dark:text-white">Seu Progresso Geral</CardTitle>
          <CardDescription>Continue assim! Cada exercício te aproxima do seu objetivo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={completionPercentage} className="h-4" indicatorClassName="bg-gradient-to-r from-[#D6FFB7] via-[#F5FF90] to-[#FF9F1C]" />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {completedCount} de {totalExercises} exercícios completados
          </p>
        </CardContent>
      </Card>

      {/* Recent Completed Exercises */}
      {completedExercises.length > 0 && (
        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-[#080357] dark:text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#22c55e]" />
              Exercícios Concluídos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {completedExercises.slice(0, 6).map((exerciseId) => {
                const exercise = exercises.find(ex => ex.id === exerciseId);
                if (!exercise) return null;

                return (
                  <Link key={exerciseId} href={`/exercicios/${exercise.slug}`}>
                    <div className="p-4 rounded-lg bg-[#D6FFB7]/20 dark:bg-[#D6FFB7]/10 border border-[#D6FFB7] hover:bg-[#D6FFB7]/30 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#22c55e] mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-[#080357] dark:text-white">{exercise.name}</p>
                          <Badge className="mt-1 bg-[#22c55e] text-white">Concluído</Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Motivational CTA */}
      {completionPercentage < 100 && (
        <Card className="bg-gradient-to-r from-[#FF9F1C] to-[#FFC15E] border-none shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Continue sua jornada!</h3>
              <p className="mb-4 opacity-90">
                Você está a {totalExercises - completedCount} exercícios de completar toda a biblioteca.
              </p>
              <Link href="/exercicios">
                <Button size="lg" className="bg-white text-[#FF9F1C] hover:bg-gray-100">
                  Explorar Exercícios
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}