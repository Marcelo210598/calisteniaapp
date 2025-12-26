'use client';

import { useState, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const { data: session, update } = useSession();
    const [isLoading, setIsLoading] = useState(false);
    const [callbackUrl, setCallbackUrl] = useState('/');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Get callback URL from query params on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const url = params.get('callbackUrl') || '/';
            setCallbackUrl(url);
        }
    }, []);

    // If already logged in, redirect to callback URL
    useEffect(() => {
        if (session) {
            router.push(callbackUrl);
        }
    }, [session, callbackUrl, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await signIn('credentials', {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                toast.error(result.error);
                setIsLoading(false);
            } else if (result?.ok) {
                toast.success('Login realizado com sucesso!');

                // Force session update
                await update();

                // Small delay to ensure session is set
                setTimeout(() => {
                    router.push(callbackUrl);
                    router.refresh();
                }, 100);
            }
        } catch (error) {
            toast.error('Erro ao fazer login. Tente novamente.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#080357] via-[#080357]/90 to-[#FF9F1C]/20 p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold text-center">
                        Entrar no CaliForce
                    </CardTitle>
                    <CardDescription className="text-center">
                        Entre com seu e-mail e senha para continuar
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                E-mail
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                disabled={isLoading}
                                className="h-12 text-base"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Senha
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                                disabled={isLoading}
                                className="h-12 text-base"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            type="submit"
                            className="w-full h-12 text-base bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white font-semibold"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Entrando...
                                </>
                            ) : (
                                'Entrar'
                            )}
                        </Button>
                        <div className="text-center text-sm">
                            Não tem uma conta?{' '}
                            <Link href="/register" className="text-[#FF9F1C] hover:underline font-semibold">
                                Criar conta
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
