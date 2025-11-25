'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Dumbbell, Target, Menu, Home, Layers } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const { isDark, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = ({ mobile = false }) => (
    <>
      <Link href="/exercicios" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <Dumbbell className="h-4 w-4 mr-2" />
          Exercícios
        </Button>
      </Link>
      <Link href="/ciclos" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <Layers className="h-4 w-4 mr-2" />
          Ciclos
        </Button>
      </Link>
      <Link href="/progresso" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <Target className="h-4 w-4 mr-2" />
          Progresso
        </Button>
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 z-50">
          <img src="/fav.png" alt="CaliForce Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-[#080357] dark:text-white">CaliForce</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavItems />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-[#080357] dark:text-white hover:text-[#FF9F1C]"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-[#080357] dark:text-white hover:text-[#FF9F1C]"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#080357] dark:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-white dark:bg-slate-900">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-[#080357] dark:text-white hover:text-[#FF9F1C]">
                    <Home className="h-4 w-4 mr-2" />
                    Início
                  </Button>
                </Link>
                <NavItems mobile />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}