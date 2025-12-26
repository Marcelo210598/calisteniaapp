'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface DirectCheckoutButtonProps {
    priceId: string;
    label?: string;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
    className?: string;
}

export function DirectCheckoutButton({
    priceId,
    label = 'Ser Premium Agora',
    variant = 'default',
    size = 'default',
    className = ''
}: DirectCheckoutButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        try {
            setLoading(true);

            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId,
                    mode: 'subscription',
                }),
            });

            const data = await response.json();

            if (data.error) {
                toast.error('Erro ao iniciar checkout', {
                    description: data.error,
                });
                return;
            }

            if (data.url) {
                // Redirect to Stripe Checkout
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Checkout error:', error);
            toast.error('Erro ao processar pagamento', {
                description: 'Tente novamente em alguns instantes.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            onClick={handleCheckout}
            disabled={loading}
            variant={variant}
            size={size}
            className={className}
        >
            {loading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processando...
                </>
            ) : (
                <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {label}
                </>
            )}
        </Button>
    );
}
