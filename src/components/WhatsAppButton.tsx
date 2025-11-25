'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/" // Add actual number if provided, otherwise placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50"
            aria-label="Contato via WhatsApp"
        >
            <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] active:scale-95 text-white shadow-xl transition-all duration-150 hover:scale-105"
            >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
            </Button>
        </a>
    );
}
