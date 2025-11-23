declare module 'next-pwa' {
  import { NextConfig } from 'next';
  
  interface PWAConfig {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean | 'development' | 'production';
    scope?: string;
    sw?: string;
    swSrc?: string;
    publicExcludes?: string[];
    buildExcludes?: string[];
    runtimeCaching?: Array<{
      urlPattern: RegExp;
      handler: string;
      options?: Record<string, any>;
    }>;
  }
  
  function withPWA(config?: PWAConfig): (config: NextConfig) => NextConfig;
  export = withPWA;
}