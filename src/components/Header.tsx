'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Dumbbell, Target } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';

export function Header() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Dumbbell className="h-6 w-6 text-[#FF9F1C]" />
          <span className="text-xl font-bold text-[#080357] dark:text-white">CaliForce</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link href="/exercicios">
            <Button variant="ghost" className="text-[#080357] dark:text-white hover:text-[#FF9F1C]">
              Exercícios
            </Button>
          </Link>
          <Link href="/ciclos">
            <Button variant="ghost" className="text-[#080357] dark:text-white hover:text-[#FF9F1C]">
              Ciclos
            </Button>
          </Link>
          <Link href="/progresso">
            <Button variant="ghost" className="text-[#080357] dark:text-white hover:text-[#FF9F1C]">
              <Target className="h-4 w-4 mr-1" />
              Progresso
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-[#080357] dark:text-white hover:text-[#FF9F1C]"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}