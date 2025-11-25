'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/" // Add actual number if provided, otherwise placeholder
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none"
        >
            <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-all hover:scale-110"
            >
                <MessageCircle className="h-8 w-8" />
                <span className="sr-only">WhatsApp</span>
            </Button>
        </a>
    );
}
