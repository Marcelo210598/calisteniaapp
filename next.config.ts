import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {},
  cacheComponents: true, // Melhora navegação client-side (substitui ppr)
  // Desabilitar cache agressivo para evitar conflitos
  generateBuildId: async () => {
    return new Date().getTime().toString(); // Build ID único a cada reinício
  },
  // Configurações de compressão e cache
  compress: false, // Desabilitar compressão que pode causar conflitos
  poweredByHeader: false, // Remover header desnecessário
  // Configuração de headers para evitar cache problemático
  async headers() {
    return [
      {
        source: '/exercicios/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
        ],
      },
      {
        source: '/_next/data/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  experimental: {
    // Desabilitar prefetching para evitar ERR_ABORTED
    clientRouterFilter: false,
    // Desabilitar cache de módulos
    serverComponentsHmrCache: false,
    // Desabilitar otimizações de bundle que podem causar abort
    optimizePackageImports: [],
  },
  // Mover serverComponentsExternalPackages para o nível raiz
  serverExternalPackages: [],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "califorce.app",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
    // Configuração para imagens locais
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Desabilita PWA em dev para evitar conflitos de navegação
})(nextConfig);