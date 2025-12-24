import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { CalIAChat } from "@/components/CalIAChat";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "CaliForce - Treinamento de Calistenia | Transforme seu Corpo",
    template: "%s | CaliForce Calistenia"
  },
  description: "Descubra como transformar seu corpo usando apenas o peso dele. O CaliForce oferece treinos completos, tutoriais passo a passo e acompanhamento de progresso para calistenia.",
  keywords: ["calistenia", "treino em casa", "peso do corpo", "street workout", "exercícios calistenia", "como começar calistenia", "treino funcional"],
  authors: [{ name: "CaliForce Team" }],
  creator: "CaliForce",
  publisher: "CaliForce",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CaliForce",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "CaliForce - Treinamento de Calistenia",
    description: "Aplicativo completo de treinamento de calistenia. Aprenda exercícios, monte treinos e evolua.",
    url: 'https://califorce.vercel.app',
    siteName: 'CaliForce',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        'name': 'CaliForce',
        'url': 'https://califorce.vercel.app',
        'logo': 'https://califorce.vercel.app/icon.png',
        'description': 'Plataforma líder em treinamento de calistenia e exercícios com peso do corpo no Brasil.',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'BR'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'email': 'contato@califorce.app'
        }
      },
      {
        '@type': 'WebSite',
        'name': 'CaliForce',
        'url': 'https://califorce.vercel.app',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://califorce.vercel.app/exercicios?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <meta name="theme-color" content="#FF9F1C" />
        <link rel="apple-touch-icon" href="/fav.png" />
        <style dangerouslySetInnerHTML={{ __html: `html { scroll-behavior: smooth; }` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
          <PWAInstallPrompt />
          <CalIAChat />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
