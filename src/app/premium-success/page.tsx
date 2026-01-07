'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Zap, Dumbbell, MessageCircle, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PremiumSuccessPage() {
    useEffect(() => {
        // Trigger confetti celebration
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#080357] via-[#0a0560] to-[#080357] flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Success Icon */}
                <div className="mb-8 animate-in zoom-in duration-500">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 border-4 border-green-500 mb-6">
                        <CheckCircle2 className="h-12 w-12 text-green-500" />
                    </div>
                </div>

                {/* Main Message */}
                <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Parabéns! Você é Premium! 🎉
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-2">
                        Bem-vindo ao CaliForce Premium, monstro! 💪
                    </p>
                    <p className="text-lg text-white/80">
                        Tudo liberado: CalIA ilimitada, treinos sem limite, HIT avançados. Bora evoluir!
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <MessageCircle className="h-8 w-8 text-[#FF9F1C] mx-auto mb-3" />
                        <h3 className="text-white font-semibold mb-2">CalIA Ilimitada</h3>
                        <p className="text-white/70 text-sm">Converse sem limites com sua IA personal trainer</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <Zap className="h-8 w-8 text-[#FF9F1C] mx-auto mb-3" />
                        <h3 className="text-white font-semibold mb-2">Treinos HIT Avançados</h3>
                        <p className="text-white/70 text-sm">6 treinos premium de alta intensidade</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <Dumbbell className="h-8 w-8 text-[#FF9F1C] mx-auto mb-3" />
                        <h3 className="text-white font-semibold mb-2">Treinos Sem Limite</h3>
                        <p className="text-white/70 text-sm">Monte e salve quantos treinos quiser</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <Trophy className="h-8 w-8 text-[#FF9F1C] mx-auto mb-3" />
                        <h3 className="text-white font-semibold mb-2">Tudo Liberado</h3>
                        <p className="text-white/70 text-sm">Acesso completo a todos os recursos</p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
                    <Link href="/meus-treinos">
                        <Button size="lg" className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white px-8 py-6 text-lg">
                            <Dumbbell className="mr-2 h-5 w-5" />
                            Ir para Treinos
                        </Button>
                    </Link>
                    <Link href="/hit">
                        <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg">
                            <Zap className="mr-2 h-5 w-5" />
                            Treinos HIT
                        </Button>
                    </Link>
                </div>

                {/* Footer Message */}
                <div className="mt-12 animate-in fade-in duration-700 delay-800">
                    <p className="text-white/60 text-sm">
                        Bora dominar seu corpo e alcançar seus objetivos! 🚀
                    </p>
                </div>
            </div>
        </div>
    );
}
