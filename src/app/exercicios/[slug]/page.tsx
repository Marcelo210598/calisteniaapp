import { ExerciseImage } from '@/components/ExerciseImage';
import { Header } from '@/components/Header';
import { ProgressToggle } from '@/components/ProgressToggle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { exercises } from '@/data/exercises';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface ExercisePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all exercises
export async function generateStaticParams() {
  return exercises.map((exercise) => ({
    slug: exercise.slug,
  }));
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  try {
    const { slug } = await params;

    // Validate slug parameter
    if (!slug || typeof slug !== 'string') {
      console.warn('Invalid slug parameter:', slug);
      notFound();
    }

    const exercise = exercises.find(ex => ex.slug === slug);

    if (!exercise) {
      console.warn('Exercise not found for slug:', slug);
      notFound();
    }

    const getDifficultyLabel = (difficulty: string) => {
      switch (difficulty) {
        case 'beginner': return 'Iniciante';
        case 'intermediate': return 'Intermediário';
        case 'advanced': return 'Avançado';
        default: return difficulty;
      }
    };

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

    return (
      <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
        <Header />

        {/* Page Header */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/exercicios">
              <Button variant="ghost" className="mb-6 text-[#080357] dark:text-white hover:text-[#FF9F1C]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos Exercícios
              </Button>
            </Link>

            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white mb-4">
                {exercise.name}
              </h1>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <Badge className={getDifficultyColor(exercise.difficulty)}>
                  {getDifficultyLabel(exercise.difficulty)}
                </Badge>
                <Badge variant="outline" className="text-[#080357] dark:text-white border-[#FF9F1C]">
                  {exercise.category}
                </Badge>
              </div>
              <p className="text-lg text-[#080357] dark:text-white max-w-3xl mx-auto">
                {exercise.description}
              </p>
            </div>
          </div>
        </section>

        {/* Exercise Images Gallery */}
        <section className="mt-12 p-4">
          <h2 className="text-3xl font-bold text-[#080357] mb-8 text-center">Passo a Passo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5].map((num) => (
              <ExerciseImage
                key={num}
                step={num}
                src={`/exercicios/${slug}/${num}.jpg`}
                alt={`Passo ${num} do ${exercise?.name}`}
                className="w-full h-auto object-cover transition-transform group-hover:scale-110 duration-500"
              />
            ))}
          </div>
        </section>

        {/* Exercise Details */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tips */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-[#080357] dark:text-white flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#D6FFB7]" />
                    Dicas de Execução
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exercise.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#FF9F1C] mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Common Mistakes */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-[#080357] dark:text-white flex items-center">
                    <XCircle className="h-5 w-5 mr-2 text-[#FFC15E]" />
                    Erros Comuns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exercise.commonMistakes.map((mistake, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Muscle Groups */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-[#080357] dark:text-white">
                  Músculos Trabalhados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {exercise.muscleGroups.map((muscle, index) => (
                    <Badge key={index} className="bg-[#D6FFB7] text-[#080357] hover:bg-[#F5FF90]">
                      {muscle}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Progress Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
              <CardHeader>
                <CardTitle className="text-[#080357] dark:text-white">
                  Marque seu Progresso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Complete este exercício hoje e acompanhe sua evolução!
                </p>
                <Suspense fallback={<div className="text-center py-4">Carregando...</div>}>
                  <ProgressToggle exerciseId={exercise.id} exerciseName={exercise.name} />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error loading exercise page:', error);
    notFound();
  }
}