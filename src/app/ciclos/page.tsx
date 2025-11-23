import { Header } from '@/components/Header';
import { cycles } from '@/data/cycles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Target, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CyclesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-[#FF9F1C] mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white">
              Ciclos de Treino
            </h1>
          </div>
          <p className="text-xl text-[#080357] dark:text-white max-w-3xl mx-auto">
            Planos de treino estruturados de 4 semanas para levar você do iniciante ao avançado. 
            Cada ciclo é cuidadosamente planejado para maximizar seus resultados.
          </p>
        </div>
      </section>

      {/* Cycles Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {cycles.map((cycle) => (
              <Card key={cycle.id} className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-[#FF9F1C]">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-[#FF9F1C] text-white">
                      {cycle.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-[#080357] dark:text-white">
                    {cycle.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {cycle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span>{cycle.weeks.length} semanas de treino</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span>3 treinos por semana</span>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="overview">
                        <AccordionTrigger className="text-[#080357] dark:text-white">
                          Ver Resumo do Ciclo
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            {cycle.weeks.slice(0, 2).map((week) => (
                              <div key={week.weekNumber} className="border-l-4 border-[#FF9F1C] pl-4">
                                <h4 className="font-semibold text-[#080357] dark:text-white">
                                  Semana {week.weekNumber}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                  {week.workouts.length} treinos focados em desenvolvimento progressivo
                                </p>
                              </div>
                            ))}
                            {cycle.weeks.length > 2 && (
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                ... e mais {cycle.weeks.length - 2} semanas de progressão
                              </p>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    
                    <Link href={`/ciclos/${cycle.id}`} className="block">
                      <Button className="w-full bg-[#FF9F1C] hover:bg-[#FFC15E] text-white">
                        Ver Detalhes do Ciclo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-[#080357] dark:text-white mb-8">
            Escolha seu ciclo e comece sua transformação hoje mesmo. 
            Cada jornada começa com um único passo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/exercicios">
              <Button size="lg" variant="outline" className="border-[#080357] text-[#080357] hover:bg-[#080357] hover:text-white px-8 py-6 text-lg">
                Explorar Exercícios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}