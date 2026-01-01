import { NextResponse } from 'next/server';
import Stripe from 'stripe';



export async function POST(req: Request) {
    try {
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new Error('STRIPE_SECRET_KEY não definida nas variáveis de ambiente');
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
            typescript: true,
        });

        const body = await req.json();
        const { priceId, mode } = body; // mode should be 'subscription'

        console.log('=== STRIPE CHECKOUT DEBUG ===');
        console.log('Usando price_id:', priceId);
        console.log('Modo:', mode);
        console.log('Stripe Key prefix:', process.env.STRIPE_SECRET_KEY?.substring(0, 20) + '...');

        if (!priceId) {
            return NextResponse.json({ error: 'Price ID is required' }, { status: 400 });
        }

        // Use absolute URL for success/cancel
        const origin = req.headers.get('origin') || 'http://localhost:3000';

        console.log('Criando sessão do Stripe com price_id:', priceId);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: mode || 'subscription',
            success_url: `${origin}/premium-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/premium?canceled=true`,
        });

        console.log('Sessão criada com sucesso! Session ID:', session.id);
        console.log('Checkout URL:', session.url);

        return NextResponse.json({ sessionId: session.id, url: session.url });
    } catch (err: any) {
        console.error('Stripe Checkout Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
