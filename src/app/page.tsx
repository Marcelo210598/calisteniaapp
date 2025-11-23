import { Header } from '@/components/Header';
import { ExerciseCard } from '@/components/ExerciseCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { exercises } from '@/data/exercises';
import { Dumbbell, Target, Zap, Users } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredExercises = exercises.slice(0, 6);

  return (
    <div className="min-h-screen relative">
      {/* Background SVG */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/background-hero.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay escuro para melhor legibilidade */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      
      <div className="relative z-20">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                CaliForce
              </h1>
              <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
                Transforme seu corpo com o poder da calistenia. Treinos completos e progressivos.
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Target className="h-8 w-8 text-[#22c55e] mx-auto mb-2" />
                <CardTitle className="text-[#1a1a1a] dark:text-white">Foco em Resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  Ciclos de treino progressivos que levam você do iniciante ao avançado com segurança.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Zap className="h-8 w-8 text-[#eab308] mx-auto mb-2" />
                <CardTitle className="text-[#1a1a1a] dark:text-white">100% Peso Corporal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  Treinos em qualquer lugar, sem equipamentos. Use o peso do seu corpo para construir força real.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <Users className="h-8 w-8 text-[#f97316] mx-auto mb-2" />
                <CardTitle className="text-[#1a1a1a] dark:text-white">Comunidade BR</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  Conteúdo feito por brasileiros, para brasileiros. Todos os exercícios em português.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/exercicios">
              <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FFC15E] text-white px-8 py-6 text-lg">
                <Dumbbell className="mr-2 h-5 w-5" />
                Ver Exercícios
              </Button>
            </Link>
            <Link href="/ciclos">
              <Button size="lg" variant="outline" className="border-[#080357] text-[#080357] hover:bg-[#080357] hover:text-white px-8 py-6 text-lg">
                Explorar Ciclos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Exercises Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-4">
              Exercícios em Destaque
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Conheça os principais exercícios de calistenia que vão transformar seu corpo e elevar sua força.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/exercicios">
              <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FFC15E] text-white">
                Ver Todos os Exercícios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-6">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-[#080357] dark:text-white mb-8">
            Junte-se a milhares de brasileiros que estão transformando seus corpos com calistenia. 
            Comece hoje mesmo e sinta a diferença em poucas semanas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ciclos">
              <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FFC15E] text-white px-8 py-6 text-lg">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
