'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Trash2, Target } from 'lucide-react';
import { exercises } from '@/data/exercises';
import { useProgressStore } from '@/store/progressStore';

export function ProgressDashboard() {
  const { progress, clearAllProgress } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const today = new Date().toISOString().split('T')[0];
  const todayProgress = progress.filter(p => p.date === today);
  const totalProgress = progress.length;
  const uniqueDates = [...new Set(progress.map(p => p.date))].length;

  const getProgressByDate = () => {
    const grouped = progress.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    }, {} as Record<string, typeof progress>);

    return Object.entries(grouped)
      .sort(([a], [b]) => b.localeCompare(a))
      .slice(0, 7);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-[#080357] dark:text-white flex items-center">
              <Target className="h-5 w-5 mr-2 text-[#FF9F1C]" />
              Total de Exercícios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#080357] dark:text-white">
              {totalProgress}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              exercícios completados
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-[#080357] dark:text-white flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-[#FF9F1C]" />
              Dias de Treino
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#080357] dark:text-white">
              {uniqueDates}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              dias diferentes treinados
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-[#080357] dark:text-white flex items-center">
              <Target className="h-5 w-5 mr-2 text-[#FF9F1C]" />
              Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#080357] dark:text-white">
              {todayProgress.length}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              exercícios completados hoje
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Progress */}
      {progress.length > 0 && (
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-[#080357] dark:text-white">
              Progresso Recentemente
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllProgress}
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Limpar Tudo
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {getProgressByDate().map(([date, dayProgress]) => (
                <div key={date} className="border-l-4 border-[#FF9F1C] pl-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-[#080357] dark:text-white">
                      {new Date(date).toLocaleDateString('pt-BR', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </h4>
                    <Badge className="bg-[#D6FFB7] text-[#080357]">
                      {dayProgress.length} exercícios
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dayProgress.map((item, index) => {
                      const exercise = exercises.find(ex => ex.id === item.exerciseId);
                      return (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {exercise ? exercise.name : item.exerciseId}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {progress.length === 0 && (
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
          <CardContent className="text-center py-12">
            <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Nenhum progresso registrado ainda
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Comece treinando e marque seus exercícios como concluídos!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}