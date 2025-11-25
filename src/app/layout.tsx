import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
  title: "CaliForce - Treinamento de Calistenia",
  description: "Aplicativo completo de treinamento de calistenia em português do Brasil. Transforme seu corpo com os melhores exercícios de peso corporal.",
  keywords: ["calistenia", "treinamento", "exercícios", "peso corporal", "brasil", "fitness"],
  authors: [{ name: "CaliForce" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CaliForce",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <link rel="icon" href="/fav.png" type="image/png" />
        <meta name="theme-color" content="#22c55e" />
        <link rel="apple-touch-icon" href="/fav.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
