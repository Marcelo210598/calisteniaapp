'use client';

import { Header } from '@/components/Header';
import { exercises } from '@/data/exercises';
import { Button } from '@/components/ui/button';
import { Download, Image as ImageIcon } from 'lucide-react';

export default function DownloadImagesPage() {
  const handleDownload = async (imagePath: string, fileName: string) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Erro ao baixar imagem:', error);
      alert('Erro ao baixar imagem. Tente novamente.');
    }
  };

  const getExerciseImages = (exerciseSlug: string, exerciseName: string) => {
    const exerciseNameLower = exerciseName.toLowerCase();
    const images = [];
    
    for (let i = 1; i <= 5; i++) {
      let imagePath;
      let fileName;
      
      // Mapeamento de exercícios para seus padrões de arquivo
      if (exerciseNameLower.includes('burpees')) {
        imagePath = i === 1 ? `/exercicios/burpees/burpees.png` : `/exercicios/burpees/burpees%20${i}.png`;
        fileName = i === 1 ? 'burpees.png' : `burpees-${i}.png`;
      } else if (exerciseNameLower.includes('flexão') || exerciseNameLower.includes('flexoes')) {
        imagePath = i === 1 ? `/exercicios/flexoes-de-braco/flexoes.jpg` : `/exercicios/flexoes-de-braco/flexoes%20${i}.jpg`;
        fileName = i === 1 ? 'flexoes.jpg' : `flexoes-${i}.jpg`;
      } else if (exerciseNameLower.includes('barra fixa')) {
        imagePath = i === 1 ? `/exercicios/barra-fixa/barra-fixa.jpg` : `/exercicios/barra-fixa/barra-fixa%20${i}.jpg`;
        fileName = i === 1 ? 'barra-fixa.jpg' : `barra-fixa-${i}.jpg`;
      } else if (exerciseNameLower.includes('agachamento')) {
        imagePath = i === 1 ? `/exercicios/agachamento-livre/agachamento-livre.jpg` : `/exercicios/agachamento-livre/agachamento-livre%20${i}.jpg`;
        fileName = i === 1 ? 'agachamento-livre.jpg' : `agachamento-livre-${i}.jpg`;
      } else if (exerciseNameLower.includes('pistol')) {
        if (i === 5) {
          imagePath = '/exercicios/pistol-squat/pistol-squat.avif';
          fileName = 'pistol-squat-5.avif';
        } else {
          imagePath = i === 1 ? '/exercicios/pistol-squat/pistol-squat.jpg' : `/exercicios/pistol-squat/pistol-squat%20${i}.jpg`;
          fileName = i === 1 ? 'pistol-squat.jpg' : `pistol-squat-${i}.jpg`;
        }
      } else if (exerciseNameLower.includes('paralelas')) {
        imagePath = i === 1 ? '/exercicios/paralelas-dips/paralelas-dips.jpg' : `/exercicios/paralelas-dips/paralelas-dips%20${i}.jpg`;
        fileName = i === 1 ? 'paralelas-dips.jpg' : `paralelas-dips-${i}.jpg`;
      } else if (exerciseNameLower.includes('muscle-up')) {
        if (i === 1) {
          imagePath = '/exercicios/muscle-up/muscle-up.jpeg';
          fileName = 'muscle-up-1.jpeg';
        } else if (i === 3 || i === 4) {
          imagePath = `/exercicios/muscle-up/muscle-up%20${i}.jpeg`;
          fileName = `muscle-up-${i}.jpeg`;
        } else {
          imagePath = `/exercicios/muscle-up/muscle-up%20${i}.jpg`;
          fileName = `muscle-up-${i}.jpg`;
        }
      } else if (exerciseNameLower.includes('l-sit')) {
        imagePath = `/exercicios/l-sit/i-sit%20${i}.png`;
        fileName = `l-sit-${i}.png`;
      } else if (exerciseNameLower.includes('handstand')) {
        imagePath = i === 1 ? '/exercicios/handstand-push-up/handstand-push-up.png' : `/exercicios/handstand-push-up/handstand-push-up%20${i}.png`;
        fileName = i === 1 ? 'handstand-push-up.png' : `handstand-push-up-${i}.png`;
      } else if (exerciseNameLower.includes('prancha')) {
        imagePath = i === 1 ? '/exercicios/prancha/prancha.jpg' : `/exercicios/prancha/prancha%20${i}.jpg`;
        fileName = i === 1 ? 'prancha.jpg' : `prancha-${i}.jpg`;
      } else {
        imagePath = `/exercicios/${exerciseSlug}/${i}.jpg`;
        fileName = `${exerciseSlug}-${i}.jpg`;
      }
      
      images.push({ path: imagePath, fileName, step: i });
    }
    
    return images;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D6FFB7] via-[#F5FF90] to-[#FFC15E] dark:from-[#080357] dark:via-[#1e293b] dark:to-[#334155]">
      <Header />
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#080357] dark:text-white mb-4">
            Download de Imagens
          </h1>
          <p className="text-lg text-[#080357] dark:text-white max-w-3xl mx-auto">
            Baixe todas as imagens dos exercícios para uso offline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => {
            const images = getExerciseImages(exercise.slug, exercise.name);
            
            return (
              <div key={exercise.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <ImageIcon className="h-6 w-6 text-[#FF9F1C] mr-2" />
                  <h3 className="text-xl font-bold text-[#080357] dark:text-white">
                    {exercise.name}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {images.map((image) => (
                    <div key={image.step} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 mr-3">
                          Passo {image.step}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {image.fileName}
                        </span>
                      </div>
                      <Button
                        onClick={() => handleDownload(image.path, image.fileName)}
                        size="sm"
                        className="bg-[#FF9F1C] hover:bg-[#080357] text-white"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <Button
                    onClick={() => {
                      images.forEach((image) => {
                        setTimeout(() => handleDownload(image.path, image.fileName), image.step * 500);
                      });
                    }}
                    className="w-full bg-[#080357] hover:bg-[#FF9F1C] text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar Todos ({images.length})
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            onClick={() => {
              exercises.forEach((exercise, index) => {
                const images = getExerciseImages(exercise.slug, exercise.name);
                images.forEach((image) => {
                  setTimeout(() => handleDownload(image.path, image.fileName), (index * 5 + image.step) * 1000);
                });
              });
            }}
            className="bg-gradient-to-r from-[#FF9F1C] to-[#FFC15E] hover:from-[#080357] hover:to-[#FF9F1C] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Download className="h-6 w-6 mr-3 inline" />
            Baixar Todas as Imagens (50 imagens)
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Total: {exercises.length} exercícios × 5 imagens cada = {exercises.length * 5} imagens
          </p>
        </div>
      </div>
    </div>
  );
}