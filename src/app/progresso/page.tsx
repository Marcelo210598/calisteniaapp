import { Header } from '@/components/Header';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Award, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-[#FF9F1C] mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white">
              Seu Progresso
            </h1>
          </div>
          <p className="text-xl text-[#080357] dark:text-white max-w-3xl mx-auto">
            Acompanhe sua evolução nos treinos de calistenia. Veja quantos exercícios você já completou 
            e mantenha-se motivado para alcançar seus objetivos!
          </p>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <ProgressDashboard />
        </div>
      </section>

      {/* Motivation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white mb-8">
            Mantenha-se Motivado!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-[#FF9F1C] mx-auto mb-2" />
                <CardTitle className="text-[#080357] dark:text-white">Consistência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  A chave do sucesso é a consistência. Treine regularmente e veja sua evolução ao longo do tempo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardHeader>
                <Award className="h-8 w-8 text-[#FF9F1C] mx-auto mb-2" />
                <CardTitle className="text-[#080357] dark:text-white">Celebre Pequenas Vitórias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Cada exercício completo é uma vitória. Celebre cada progresso, por menor que seja.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardHeader>
                <Calendar className="h-8 w-8 text-[#FF9F1C] mx-auto mb-2" />
                <CardTitle className="text-[#080357] dark:text-white">Faça do Seu Jeito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Treine no seu ritmo. O importante é manter-se ativo e progredir gradualmente.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Link href="/exercicios">
              <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FFC15E] text-white px-8 py-6 text-lg">
                Continuar Treinando
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}