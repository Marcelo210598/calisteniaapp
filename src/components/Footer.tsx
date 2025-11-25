import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#080357] border-t border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                        <img src="/fav.png" alt="CaliForce Logo" className="h-8 w-8" />
                        <span className="font-bold text-xl text-[#080357] dark:text-white">CaliForce</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                        A revolução da calistenia brasileira. Transforme seu corpo com o peso do próprio corpo.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <div className="flex space-x-6 mb-4">
                        <a href="#" className="text-gray-500 hover:text-[#FF9F1C] transition-colors">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-[#FF9F1C] transition-colors">
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        {/* TikTok icon is not in standard Lucide set, using Twitter as placeholder or custom SVG if needed. 
                For now, sticking to available icons or generic social. */}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; 2025 CaliForce. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
