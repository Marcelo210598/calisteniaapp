'use client';

import { useState, useEffect, Suspense } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { usePremiumStore } from '@/store/usePremiumStore';
import { Check, Star, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import { useRouter, useSearchParams } from 'next/navigation';

// Initialize Stripe with the publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

function PremiumContent() {
    const { isPremium, upgrade } = usePremiumStore();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Check for success payment
        if (searchParams.get('success')) {
            upgrade('monthly'); // Defaulting to monthly for now or detecting from session if possible
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
            toast.success('Bem-vindo ao Premium! Tudo liberado! 🎉');
            router.replace('/premium');
        }

        if (searchParams.get('canceled')) {
            toast.error('Pagamento cancelado. Tente novamente quando quiser.');
            router.replace('/premium');
        }
    }, [searchParams, upgrade, router]);

    const handleCheckout = async (priceId: string, planType: 'monthly' | 'yearly') => {
        console.log('🎯 Frontend: Iniciando checkout com:', { priceId, planType });
        setLoading(true);
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId,
                }),
            });

            const session = await response.json();

            if (session.error) {
                throw new Error(session.error);
            }

            // Stripe Checkout moderna (2025): Redirecionamento via URL do servidor
            if (session.url) {
                window.location.href = session.url;
            } else {
                throw new Error('Não foi possível iniciar o checkout - URL não retornada');
            }
        } catch (error: any) {
            console.error('Checkout error:', error);
            toast.error('Erro ao iniciar pagamento: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (isPremium) {
        return (
            <div className="container max-w-4xl py-12 mx-auto text-center animate-in fade-in duration-500">
                <div className="mb-8 flex justify-center">
                    <div className="p-4 bg-yellow-500/20 rounded-full">
                        <Star className="w-16 h-16 text-yellow-500" fill="currentColor" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Você é Premium!
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                    Aproveite acesso ilimitado a todo o conteúdo do CaliForce.
                </p>
                <Button onClick={() => router.push('/')} size="lg" className="font-semibold">
                    Voltar para os Treinos
                </Button>
            </div>
        );
    }

    return (
        <div className="container py-12 mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Evolua com CaliForce Premium</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Desbloqueie todo o potencial do seu treino com recursos exclusivos e IA ilimitada.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
                {/* Monthly Plan */}
                <Card className="relative overflow-hidden border-2 border-border hover:border-[#FF9F1C]/50 transition-colors">
                    <CardHeader>
                        <CardTitle className="text-2xl">Mensal</CardTitle>
                        <CardDescription>Para iniciar sua jornada</CardDescription>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">R$ 12,90</span>
                            <span className="text-muted-foreground">/mês</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>CalIA ilimitada</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Todos os treinos desbloqueados</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Desafios Premium</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Sem anúncios</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                            onClick={() => handleCheckout('price_1SknbCCrB6LMIWTsB65nD5sx', 'monthly')}
                            disabled={loading}
                        >
                            Assinar Mensal
                        </Button>
                    </CardFooter>
                </Card>

                {/* Annual Plan */}
                <Card className="relative overflow-hidden border-2 border-[#FF9F1C] shadow-lg shadow-[#FF9F1C]/10">
                    <div className="absolute top-0 right-0 bg-[#FF9F1C] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        33% OFF
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl">Anual</CardTitle>
                        <CardDescription>Melhor custo-benefício</CardDescription>
                        <div className="mt-4">
                            <span className="text-4xl font-bold">R$ 103,20</span>
                            <span className="text-muted-foreground">/ano</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Todas as vantagens do Mensal</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Gráficos avançados de progresso</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Badge exclusivo PRO</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white"
                            onClick={() => handleCheckout('price_1SkniECrB6LMIWTsP2lII1TH', 'yearly')}
                            disabled={loading}
                        >
                            Assinar Anual
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold mb-6">Comparativo</h3>
                <div className="max-w-2xl mx-auto bg-card rounded-lg border p-6">
                    <div className="grid grid-cols-3 gap-4 border-b pb-4 mb-4 font-bold">
                        <div className="text-left">Recurso</div>
                        <div>Free</div>
                        <div className="text-yellow-500">Premium</div>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-left">Consultas CalIA</div>
                            <div className="text-muted-foreground">20 / dia</div>
                            <div className="text-green-500 font-bold">Ilimitado</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-left">Exercícios por Treino</div>
                            <div className="text-muted-foreground">Máx. 6</div>
                            <div className="text-green-500 font-bold">Ilimitado</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-left">Desafios Premium</div>
                            <div className="flex justify-center"><Lock className="w-4 h-4 text-muted-foreground" /></div>
                            <div className="text-green-500 font-bold"><Check className="w-5 h-5 inline" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PremiumPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
            <PremiumContent />
        </Suspense>
    );
}
