'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { BookOpen, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function HistorySheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    className="h-12 sm:h-14 md:h-16 min-h-12 max-h-16 bg-[#FF9F1C] hover:bg-[#FFC15E] active:scale-95 text-white px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg rounded-full shadow-[0_0_20px_rgba(255,159,28,0.5)] hover:scale-105 transition-all duration-150"
                >
                    <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                    <span className="hidden sm:inline">A Verdadeira História da Calistenia (500 a.C. até hoje)</span>
                    <span className="sm:hidden">História da Calistenia</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="w-full sm:max-w-2xl bg-white dark:bg-[#080357] overflow-y-auto"
            >
                <SheetHeader className="mb-6">
                    <SheetTitle className="text-3xl md:text-4xl font-bold text-[#080357] dark:text-white text-center">
                        A Verdadeira História da Calistenia
                    </SheetTitle>
                    <p className="text-xl text-gray-600 dark:text-[#F5FF90] text-center mt-2">
                        De espartanos a Hannibal For King — e agora o Brasil dominando
                    </p>
                </SheetHeader>

                <ScrollArea className="h-[calc(100vh-180px)] pr-4">
                    <div className="space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                        <p className="font-semibold text-xl text-[#080357] dark:text-[#F5FF90]">
                            A calistenia não é moda. É o treino mais antigo e eficiente que a humanidade já criou.
                        </p>

                        <p>
                            Tudo começou há mais de 2.500 anos na Grécia Antiga.
                        </p>

                        <p>
                            Os espartanos — os guerreiros mais temidos do mundo — treinavam só com o peso do corpo: flexões, barras, pranchas, saltos e corridas. Para eles, força e beleza andavam juntas — por isso inventaram o nome "calistenia" (do grego <em>kallos</em> = beleza + <em>sthenos</em> = força).
                        </p>

                        <p>
                            No século XIX, Friedrich Ludwig Jahn (o "Pai da Ginástica") criou a barra fixa e as paralelas em 1811 para fortalecer o povo alemão contra Napoleão.
                        </p>

                        <p>
                            Nos anos 1930–1950, nos parquinhos de Nova York (Harlem e Brooklyn), jovens negros e latinos criaram o Street Workout — o estilo de rua que conhecemos hoje.
                        </p>

                        <p>
                            Em 2008, Hannibal For King viralizou no YouTube com muscle-up, human flag e 360° na barra. Ele é o "Rei da Calistenia".
                        </p>

                        <p>
                            A partir de 2011 surgiram Bar Brothers, BarStarzz e a primeira Copa do Mundo em 2014. Hoje são mais de 520 milhões de vídeos com #calisthenics.
                        </p>

                        <p className="font-semibold text-xl text-[#080357] dark:text-[#F5FF90]">
                            2025 — chegou a hora do Brasil dominar.
                        </p>

                        <p>
                            Com o CaliForce você tem o mesmo método que transformou espartanos em lendas e jovens de rua em atletas virais.
                        </p>

                        <p>
                            Treine como os antigos. Domine seu corpo como os reis das ruas.
                        </p>

                        <p>
                            Seja parte da revolução brasileira da calistenia.
                        </p>

                        <p className="font-bold text-2xl text-[#FF9F1C] mt-8">
                            CaliForce — Força bonita desde 500 a.C. até hoje.
                        </p>

                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-[#080357] dark:text-white mb-4">
                                Fontes oficiais
                            </h3>
                            <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                                <li>• História Grega: Platão e Heródoto</li>
                                <li>• Friedrich Jahn: "Deutsche Turnkunst" (1811)</li>
                                <li>• Street Workout: WSWCF e documentário "The King of the Bars"</li>
                                <li>• Boom do YouTube: Hannibal For King (2008)</li>
                                <li>• Dados 2025: TikTok/Instagram e Google Trends</li>
                            </ul>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}
