import { Header } from '@/components/Header';
import { cycles } from '@/data/cycles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Target, Calendar, Clock, Dumbbell, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CyclePageProps {
  params: {
    id: string;
  };
}

// Generate static params for all cycles
export async function generateStaticParams() {
  return cycles.map((cycle) => ({
    id: cycle.id,
  }));
}

export default async function CycleDetailPage({ params }: CyclePageProps) {
  const { id } = await params;
  const cycle = cycles.find(c => c.id === id);
  
  if (!cycle) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <Header />
      
      {/* Page Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/ciclos">
            <Button variant="ghost" className="mb-6 text-[#080357] dark:text-white hover:text-[#FF9F1C]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Ciclos
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white mb-4">
              {cycle.name}
            </h1>
            <p className="text-xl text-[#080357] dark:text-white max-w-3xl mx-auto">
              {cycle.description}
            </p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Badge className="bg-[#FF9F1C] text-white">
                <Calendar className="h-4 w-4 mr-1" />
                {cycle.duration}
              </Badge>
              <Badge variant="outline" className="text-[#080357] dark:text-white border-[#FF9F1C]">
                <Target className="h-4 w-4 mr-1" />
                {cycle.weeks.length} semanas
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Week Details */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#080357] dark:text-white mb-8 text-center">
            Detalhes do Ciclo
          </h2>
          
          <div className="space-y-6">
            {cycle.weeks.map((week) => (
              <Card key={week.weekNumber} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#080357] dark:text-white">
                    Semana {week.weekNumber}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {week.workouts.length} treinos semanais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {week.workouts.map((workout, workoutIndex) => (
                      <AccordionItem key={workoutIndex} value={`workout-${workoutIndex}`}>
                        <AccordionTrigger className="text-[#080357] dark:text-white">
                          <div className="flex items-center space-x-3">
                            <Dumbbell className="h-5 w-5 text-[#FF9F1C]" />
                            <span>{workout.day}</span>
                            <Badge variant="secondary" className="bg-[#F5FF90] text-[#080357]">
                              {workout.exercises.length} exercícios
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pl-8">
                            {workout.exercises.map((exercise, exerciseIndex) => (
                              <Card key={exerciseIndex} className="bg-gray-50 dark:bg-gray-700 border-0">
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-[#080357] dark:text-white">
                                      {exercise.name}
                                    </h4>
                                    <Badge className="bg-[#FF9F1C] text-white">
                                      <Clock className="h-3 w-3 mr-1" />
                                      {exercise.rest}
                                    </Badge>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <span className="text-gray-600 dark:text-gray-300">Séries:</span>
                                      <span className="font-semibold text-[#080357] dark:text-white ml-2">{exercise.sets}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-600 dark:text-gray-300">Reps:</span>
                                      <span className="font-semibold text-[#080357] dark:text-white ml-2">{exercise.reps}</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/exercicios">
              <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FFC15E] text-white">
                Ver Todos os Exercícios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}