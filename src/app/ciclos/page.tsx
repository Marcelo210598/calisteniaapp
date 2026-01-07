'use client';

import { Header } from '@/components/Header';
import { cycles } from '@/data/cycles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Calendar, Clock, CheckCircle, Circle, Dumbbell } from 'lucide-react';
import { useProgressStore } from '@/store/progressStore';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function CyclesPage() {
  const { isWorkoutCompleted, toggleWorkout } = useProgressStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleWorkout = (workoutId: string) => {
    const isCompleted = isWorkoutCompleted(workoutId);
    toggleWorkout(workoutId);

    if (!isCompleted) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF9F1C', '#D6FFB7', '#F5FF90']
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <Header />

      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-10 w-10 text-[#FF9F1C] mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-[#080357] dark:text-white">
              Ciclos de Treino
            </h1>
          </div>
          <p className="text-xl text-[#080357] dark:text-white max-w-3xl mx-auto">
            Escolha seu nível e siga o plano. A consistência é a chave para o sucesso.
          </p>
        </div>
      </section>

      {/* Cycles Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue={cycles[0].id} className="w-full">
            {/* Mobile: Vertical stack, Desktop: 4 columns grid */}
            <TabsList className="w-full h-auto mb-8 bg-white/50 dark:bg-black/20 p-2 rounded-xl flex flex-col sm:flex-row sm:flex-wrap md:grid md:grid-cols-4 gap-2">
              {cycles.map((cycle) => (
                <TabsTrigger
                  key={cycle.id}
                  value={cycle.id}
                  className="w-full sm:flex-1 md:w-auto text-sm md:text-base py-3 px-4 data-[state=active]:bg-[#FF9F1C] data-[state=active]:text-white rounded-lg transition-all"
                >
                  {cycle.name.replace('CaliForce ', '')}
                </TabsTrigger>
              ))}
            </TabsList>

            {cycles.map((cycle) => (
              <TabsContent key={cycle.id} value={cycle.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Card className="border-none shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <CardTitle className="text-3xl text-[#080357] dark:text-white mb-2">
                          {cycle.name}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                          {cycle.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-[#FF9F1C] text-white text-lg px-4 py-1">
                        {cycle.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {cycle.weeks.map((week) => (
                        <AccordionItem key={week.weekNumber} value={`week-${week.weekNumber}`} className="border rounded-xl px-4 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                          <AccordionTrigger className="hover:no-underline py-4">
                            <div className="flex items-center gap-4">
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D6FFB7] text-[#080357] font-bold">
                                {week.weekNumber}
                              </span>
                              <span className="text-xl font-semibold text-[#080357] dark:text-white">
                                Semana {week.weekNumber}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4 pb-6">
                            <div className="grid gap-6">
                              {week.workouts.map((workout, index) => {
                                const workoutId = `${cycle.id}-w${week.weekNumber}-d${index}`;
                                const isCompleted = isWorkoutCompleted(workoutId);

                                return (
                                  <div key={index} className={`p-6 rounded-xl border transition-all ${isCompleted
                                    ? 'bg-[#D6FFB7]/20 border-[#D6FFB7] dark:bg-[#D6FFB7]/10'
                                    : 'bg-gray-50 dark:bg-gray-800 border-gray-100 dark:border-gray-700'
                                    }`}>
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                                      <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-[#FF9F1C]" />
                                        <h4 className="text-lg font-bold text-[#080357] dark:text-white">
                                          {workout.day}
                                        </h4>
                                      </div>
                                      <Button
                                        variant={isCompleted ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => handleToggleWorkout(workoutId)}
                                        className={isCompleted
                                          ? "bg-[#22c55e] hover:bg-[#16a34a] text-white"
                                          : "border-[#FF9F1C] text-[#FF9F1C] hover:bg-[#FF9F1C] hover:text-white"
                                        }
                                      >
                                        {isCompleted ? (
                                          <>
                                            <CheckCircle className="mr-2 h-4 w-4" />
                                            Concluído
                                          </>
                                        ) : (
                                          <>
                                            <Circle className="mr-2 h-4 w-4" />
                                            Marcar como Feito
                                          </>
                                        )}
                                      </Button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                      {workout.exercises.map((ex, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm">
                                          <Dumbbell className="h-5 w-5 text-[#FF9F1C] mt-1 shrink-0" />
                                          <div>
                                            <p className="font-semibold text-[#080357] dark:text-white">
                                              {ex.name}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                              {ex.sets} séries x {ex.reps}
                                            </p>
                                            <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                                              Descanso: {ex.rest}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}