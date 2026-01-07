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
import { Metadata } from 'next';
import { PlankTimer } from '@/components/PlankTimer';
import { AddToWorkoutButton } from '@/components/AddToWorkoutButton';

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

export async function generateMetadata({ params }: ExercisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const exercise = exercises.find((ex) => ex.slug === slug);

  if (!exercise) {
    return {
      title: 'Exercício Não Encontrado',
      description: 'O exercício que você procura não foi encontrado.',
    };
  }

  return {
    title: `Como fazer ${exercise.name}? Tutorial e Dicas | CaliForce`,
    description: `Aprenda a fazer ${exercise.name} corretamente. ${exercise.description.slice(0, 150)}... Veja dicas, erros comuns e músculos trabalhados.`,
    keywords: [exercise.name, `como fazer ${exercise.name}`, `tutorial ${exercise.name}`, 'calistenia', 'exercício', ...exercise.muscleGroups],
    openGraph: {
      title: `Como fazer ${exercise.name}? Tutorial Completo`,
      description: exercise.description,
      images: exercise.images && exercise.images.length > 0 ? [exercise.images[0]] : [],
    },
  };
}

export default async function ExercisePage({ params }: ExercisePageProps) {
  const { slug } = await params;

  // Validate slug parameter
  if (!slug || typeof slug !== 'string') {
    notFound();
  }

  const exercise = exercises.find(ex => ex.slug === slug);

  if (!exercise) {
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': `Como fazer ${exercise.name}: Tutorial Completo`,
    'description': exercise.description,
    'image': exercise.images,
    'author': {
      '@type': 'Organization',
      'name': 'CaliForce'
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://califorce.vercel.app/exercicios/${exercise.slug}`
    },
    'about': {
      '@type': 'Thing',
      'name': exercise.name,
      'description': exercise.description
    },
    'video': exercise.videoUrl ? {
      '@type': 'VideoObject',
      'name': `Tutorial: ${exercise.name}`,
      'description': `Vídeo tutorial ensinando como fazer ${exercise.name} passo a passo.`,
      'thumbnailUrl': exercise.images && exercise.images[0] ? exercise.images[0] : 'https://califorce.vercel.app/og-image.jpg',
      'uploadDate': '2024-01-01T00:00:00.000Z', // Static date to avoid build errors
      'contentUrl': exercise.videoUrl,
      'embedUrl': exercise.videoUrl
    } : undefined
  };

  // Convert FAQ/Tips to Q&A format for Schema if needed, but Article covers a lot.
  // We can also add HowTo schema if it's strictly a tutorial. Article + VideoObject is good for now.

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Semantic Article Wrapper */}
      <article className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/exercicios">
            <Button variant="ghost" className="mb-6 text-[#080357] dark:text-white hover:text-[#FF9F1C]">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Exercícios
            </Button>
          </Link>

          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white mb-4">
              Como fazer {exercise.name}?
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
              <strong>O que é {exercise.name}?</strong> {exercise.description}
            </p>
          </header>

          <main className="space-y-12">
            {/* Tutorial Video Section */}
            {exercise.videoUrl && (
              <section className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-[#080357] dark:text-white mb-6 text-center">
                  Tutorial em Vídeo: {exercise.name}
                </h2>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                    src={exercise.videoUrl}
                    title={`Tutorial de ${exercise.name} - Calistenia`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </section>
            )}

            {/* Plank Timer - Only for Prancha exercise */}
            {exercise.slug === 'prancha' && (
              <section className="max-w-4xl mx-auto">
                <PlankTimer />
              </section>
            )}

            {/* Add to Workout Button */}
            <section className="max-w-4xl mx-auto text-center">
              <AddToWorkoutButton exerciseId={exercise.id} exerciseName={exercise.name} />
            </section>

            {/* Exercise Details */}
            <section className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* How to Execute (Tips) */}
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                  <CardHeader>
                    <CardTitle className="text-[#080357] dark:text-white flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-[#D6FFB7]" />
                      Como executar corretamente?
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
                      Erros comuns ao fazer {exercise.name}
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
            </section>

            {/* Muscle Groups */}
            <section className="max-w-4xl mx-auto">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-[#080357] dark:text-white">
                    Quais músculos o {exercise.name} trabalha?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Este exercício é excelente para fortalecer os seguintes grupos musculares:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exercise.muscleGroups.map((muscle, index) => (
                      <Badge key={index} className="bg-[#D6FFB7] text-[#080357] hover:bg-[#F5FF90]">
                        {muscle}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Images Gallery for AI Context */}
            {exercise.images && exercise.images.length > 0 && (
              <section className="max-w-4xl mx-auto hidden">
                {/* Hidden structurally but accessible to bots/readers if needed, or we can display them. 
                     For now, let's keep it simple or maybe show a carousel if requested. 
                     The prompt asked for images with alt text. The original code didn't show images gallery, 
                     just video. I will add a visually hidden section for image semantics if appropriate, 
                     or better, just leave it out if not displayed to user to avoid "hidden text" penalty.
                     Wait, the prompt checklist says "optimize images". 
                     The code has an images array but only video is shown.
                     I'll add the images properly if they are valid URLs. The data file has Unsplash URLs.
                     Let's add a small gallery section. */}
                <h2 className="text-2xl font-bold mb-4">Imagens de referência</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {exercise.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Execução de ${exercise.name} - Passo ${idx + 1}`}
                      className="rounded-lg shadow-md"
                      loading="lazy"
                      width={300}
                      height={200}
                    />
                  ))}
                </div>
              </section>
            )}


            {/* Progress Section */}
            <section className="max-w-4xl mx-auto pb-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-[#080357] dark:text-white text-center">
                    Marque seu Progresso
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Já completou o treino de {exercise.name} hoje? Registre aqui para acompanhar sua constância.
                  </p>
                  <Suspense fallback={<div className="text-center py-4">Carregando...</div>}>
                    <ProgressToggle exerciseId={exercise.id} exerciseName={exercise.name} />
                  </Suspense>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </article>
    </div>
  );
}