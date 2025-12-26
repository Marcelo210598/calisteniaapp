import { Header } from '@/components/Header';
import { ExerciseCard } from '@/components/ExerciseCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { exercises } from '@/data/exercises';
import { Dumbbell, Target, Zap, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ProgressCounter } from '@/components/ProgressCounter';
import { HistorySheet } from '@/components/HistorySheet';

export default function HomePage() {
  const featuredExercises = exercises.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Epic Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/calistenia.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed' // Parallax effect
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-10 bg-black/65" />


          {/* Hero Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-in fade-in zoom-in duration-1000">
            <div className="mb-6">
              <HistorySheet />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              CALIFORCE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Domine seu corpo. Treine em qualquer lugar. <br className="hidden md:block" />
              A plataforma definitiva de calistenia brasileira.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/exercicios" prefetch={true}>
                <Button className="h-14 md:h-16 min-h-12 max-h-16 bg-[#FF9F1C] hover:bg-[#FFC15E] active:scale-95 text-white px-8 md:px-10 text-base md:text-lg rounded-full shadow-[0_0_20px_rgba(255,159,28,0.5)] hover:scale-105 transition-all duration-150">
                  <Dumbbell className="mr-3 h-6 w-6" />
                  COMEÇAR AGORA
                </Button>
              </Link>
              <Link href="/ciclos">
                <Button variant="outline" className="h-14 md:h-16 min-h-12 max-h-16 border-2 border-white text-white hover:bg-white hover:text-[#080357] active:scale-95 px-8 md:px-10 text-base md:text-lg rounded-full bg-transparent backdrop-blur-sm transition-all duration-150">
                  Ver Ciclos
                </Button>
              </Link>
            </div>

            {/* Progress Counter Component */}
            <div className="mt-12">
              <ProgressCounter />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#080357]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-50 dark:bg-[#1e293b] border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-[#D6FFB7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8 text-[#080357]" />
                  </div>
                  <CardTitle className="text-2xl text-[#080357] dark:text-white">Foco em Resultados</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Ciclos de treino progressivos desenhados por especialistas para levar você do zero ao muscle-up.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-[#1e293b] border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-[#F5FF90] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8 text-[#080357]" />
                  </div>
                  <CardTitle className="text-2xl text-[#080357] dark:text-white">100% Peso Corporal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Sem academia, sem taxas. Apenas você e a gravidade. Treine em casa, no parque ou na praia.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 dark:bg-[#1e293b] border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-[#FFC15E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-[#080357]" />
                  </div>
                  <CardTitle className="text-2xl text-[#080357] dark:text-white">Comunidade BR</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Conteúdo 100% em português, feito para a realidade brasileira. Junte-se ao movimento.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* HIT Training Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#080357] to-[#0a0560] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/background-hero.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#FF9F1C]/20 text-[#FF9F1C] px-4 py-2 rounded-full mb-4">
                <Zap className="h-5 w-5" />
                <span className="font-semibold">NOVIDADE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Treinos HIT
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Queime gordura e ganhe força em 15-35 minutos com nossos treinos de alta intensidade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Free HIT Preview */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-500 text-white">GRÁTIS</Badge>
                    <Zap className="h-6 w-6 text-[#FF9F1C]" />
                  </div>
                  <CardTitle className="text-xl text-white">HIT Iniciante</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Treino completo de 20 minutos para queimar gordura e fortalecer o corpo todo
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
                    <span>⏱️ 20 min</span>
                    <span>🔥 5 exercícios</span>
                  </div>
                  <Link href="/hit">
                    <Button className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white">
                      Começar Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium HIT Preview 1 */}
              <Card className="bg-white/10 backdrop-blur-sm border-yellow-500/50 hover:bg-white/15 transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">PREMIUM</Badge>
                    <Zap className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-white">HIT Beast Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    O treino mais brutal! Muscle-ups, pistol squats e muito mais
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
                    <span>⏱️ 30 min</span>
                    <span>🔥 5 exercícios</span>
                  </div>
                  <Link href="/hit">
                    <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500/20">
                      Ver Premium
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Premium HIT Preview 2 */}
              <Card className="bg-white/10 backdrop-blur-sm border-yellow-500/50 hover:bg-white/15 transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">PREMIUM</Badge>
                    <Zap className="h-6 w-6 text-yellow-400" />
                  </div>
                  <CardTitle className="text-xl text-white">HIT Front Lever Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Desenvolva força isométrica extrema para o front lever
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
                    <span>⏱️ 22 min</span>
                    <span>🔥 5 exercícios</span>
                  </div>
                  <Link href="/hit">
                    <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500/20">
                      Ver Premium
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link href="/hit">
                <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white px-8">
                  Ver Todos os Treinos HIT
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Exercises Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0f172a]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white mb-4">
                  Exercícios em Destaque
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                  Domine os fundamentos e avance para movimentos de elite.
                </p>
              </div>
              <Link href="/exercicios" className="hidden md:block">
                <Button variant="ghost" className="text-[#FF9F1C] hover:text-[#FFC15E] hover:bg-transparent text-lg group">
                  Ver todos <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </div>

            <div className="text-center md:hidden">
              <Link href="/exercicios">
                <Button size="lg" className="w-full bg-[#FF9F1C] hover:bg-[#FFC15E] text-white">
                  Ver Todos os Exercícios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section for AI SEO */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#080357]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#080357] dark:text-white mb-12 text-center">
              Perguntas Frequentes sobre Calistenia
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "O que é Calistenia?",
                  a: "Calistenia é um método de treinamento físico que usa apenas o peso do corpo para desenvolver força, resistência, mobilidade e flexibilidade. Exercícios como flexões, barras e agachamentos são a base."
                },
                {
                  q: "Preciso de equipamentos para treinar?",
                  a: "Não! A beleza da calistenia é que você pode treinar em qualquer lugar. Uma barra de porta ou parque é útil, mas existem centenas de exercícios que exigem zero equipamento."
                },
                {
                  q: "Calistenia gera hipertrofia (ganho de massa muscular)?",
                  a: "Sim. O princípio da sobrecarga progressiva se aplica perfeitamente. Alterando alavancas e complexidade dos movimentos, você estimula o crescimento muscular tão bem quanto na musculação."
                },
                {
                  q: "Sou iniciante, por onde começo?",
                  a: "Comece com os fundamentos: flexões, remadas invertidas, agachamentos e pranchas. O app CaliForce possui ciclos específicos para iniciantes começarem do zero."
                },
                {
                  q: "Quanto tempo demora para ver resultados?",
                  a: "Com consistência (3-4x por semana), você sentirá aumento de força em 2-4 semanas e mudanças visuais notáveis em 8-12 semanas. A chave é a constância."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="bg-gray-50 dark:bg-[#1e293b] border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#080357] dark:text-white">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080357] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/calistenia.png')] bg-cover bg-center mix-blend-overlay" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Pronto para evoluir?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Não espere pela "segunda-feira". Seu corpo é sua única casa, construa-o com força e disciplina.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/ciclos">
                <Button size="lg" className="bg-[#D6FFB7] hover:bg-[#F5FF90] text-[#080357] px-12 py-8 text-xl rounded-full font-bold shadow-lg hover:shadow-[#D6FFB7]/50 transition-all">
                  Começar Jornada
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é Calistenia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Calistenia é um método de treinamento físico que usa apenas o peso do corpo para desenvolver força, resistência, mobilidade e flexibilidade. Exercícios como flexões, barras e agachamentos são a base."
                }
              },
              {
                "@type": "Question",
                "name": "Preciso de equipamentos para treinar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não! A beleza da calistenia é que você pode treinar em qualquer lugar. Uma barra de porta ou parque é útil, mas existem centenas de exercícios que exigem zero equipamento."
                }
              },
              {
                "@type": "Question",
                "name": "Calistenia gera hipertrofia (ganho de massa muscular)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. O princípio da sobrecarga progressiva se aplica perfeitamente. Alterando alavancas e complexidade dos movimentos, você estimula o crescimento muscular tão bem quanto na musculação."
                }
              },
              {
                "@type": "Question",
                "name": "Sou iniciante, por onde começo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Comece com os fundamentos: flexões, remadas invertidas, agachamentos e pranchas. O app CaliForce possui ciclos específicos para iniciantes começarem do zero."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo demora para ver resultados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Com consistência (3-4x por semana), você sentirá aumento de força em 2-4 semanas e mudanças visuais notáveis em 8-12 semanas. A chave é a constância."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
