'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Dumbbell, Target, Menu, Home, Layers, Plus, Trophy, BookOpen, LogOut, User as UserIcon } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { isDark, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
    router.refresh();
  };

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
      <Link href="/treino-personalizado" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <Plus className="h-4 w-4 mr-2" />
          Montar Treino
        </Button>
      </Link>
      <Link href="/meus-treinos" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <BookOpen className="h-4 w-4 mr-2" />
          Meus Treinos
        </Button>
      </Link>
      <Link href="/desafios" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <Trophy className="h-4 w-4 mr-2" />
          Desafios
        </Button>
      </Link>
      <Link href="/progresso" onClick={() => mobile && setIsOpen(false)}>
        <Button variant="ghost" className={`text-[#080357] dark:text-white hover:text-[#FF9F1C] ${mobile ? 'w-full justify-start' : ''}`}>
          <Target className="h-4 w-4 mr-2" />
          Progresso
        </Button>
      </Link>
      {mobile && (
        <Link href="/premium" onClick={() => setIsOpen(false)}>
          <Button
            variant="outline"
            className="w-full justify-start border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/20"
          >
            <Trophy className="h-4 w-4 mr-2" />
            Premium
          </Button>
        </Link>
      )}
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
          <Link href="/premium">
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:text-yellow-400 dark:hover:bg-yellow-900/20"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Premium
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

          {/* User Menu - Desktop */}
          {status === 'loading' ? (
            <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <div className="h-10 w-10 rounded-full bg-[#FF9F1C] flex items-center justify-center text-white font-semibold">
                    {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{session.user?.name || 'Usuário'}</p>
                    <p className="text-xs text-muted-foreground">{session.user?.email}</p>
                    {session.user?.isPremium && (
                      <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full w-fit">Premium</span>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button className="bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white">
                Entrar
              </Button>
            </Link>
          )}
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
                {/* User Info - Mobile */}
                {session && (
                  <div className="pb-4 border-b">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-full bg-[#FF9F1C] flex items-center justify-center text-white font-semibold text-lg">
                        {session.user?.name?.[0]?.toUpperCase() || session.user?.email?.[0]?.toUpperCase() || 'U'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{session.user?.name || 'Usuário'}</p>
                        <p className="text-xs text-muted-foreground truncate">{session.user?.email}</p>
                      </div>
                    </div>
                    {session.user?.isPremium && (
                      <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded-full">Premium</span>
                    )}
                  </div>
                )}

                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-[#080357] dark:text-white hover:text-[#FF9F1C]">
                    <Home className="h-4 w-4 mr-2" />
                    Início
                  </Button>
                </Link>
                <NavItems mobile />

                {session ? (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsOpen(false);
                      handleSignOut();
                    }}
                    className="w-full justify-start text-destructive hover:text-destructive"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                ) : (
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-[#FF9F1C] hover:bg-[#FF9F1C]/90 text-white">
                      Entrar
                    </Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}