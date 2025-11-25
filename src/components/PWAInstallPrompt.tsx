'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download } from 'lucide-react';

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);

            // Show prompt after 10 seconds
            setTimeout(() => {
                setShowPrompt(true);
            }, 10000);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShowPrompt(false);
        }
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        // Don't show again for this session
        sessionStorage.setItem('pwa-prompt-dismissed', 'true');
    };

    // Don't show if already dismissed in this session
    useEffect(() => {
        if (sessionStorage.getItem('pwa-prompt-dismissed')) {
            setShowPrompt(false);
        }
    }, []);

    if (!showPrompt || !deferredPrompt) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-40 animate-in slide-in-from-bottom-5 duration-500">
            <div className="bg-white dark:bg-[#080357] rounded-xl shadow-2xl border-2 border-[#FF9F1C] p-4">
                <button
                    onClick={handleDismiss}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    aria-label="Fechar"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="flex items-start gap-3 mb-3">
                    <div className="h-12 w-12 rounded-lg bg-[#FF9F1C] flex items-center justify-center flex-shrink-0">
                        <Download className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-[#080357] dark:text-white text-lg">
                            Instalar CaliForce
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            Acesse rápido e treine offline! Adicione o app à sua tela inicial.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button
                        onClick={handleInstall}
                        className="flex-1 h-12 bg-[#FF9F1C] hover:bg-[#FFC15E] active:scale-95 text-white transition-all duration-150"
                    >
                        Instalar Agora
                    </Button>
                    <Button
                        onClick={handleDismiss}
                        variant="outline"
                        className="h-12 px-4 border-gray-300 dark:border-gray-600 active:scale-95 transition-all duration-150"
                    >
                        Agora Não
                    </Button>
                </div>
            </div>
        </div>
    );
}
