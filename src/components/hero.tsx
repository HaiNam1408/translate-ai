'use client';

import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToTranslator = () => {
    const translatorElement = document.getElementById('translator');
    if (translatorElement) {
      translatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container flex flex-col items-center text-center py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
        AI-Powered Text Translation
      </h1>
      <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
        Translate text between 100+ languages with advanced AI technology.
        Fast, accurate, and easy to use.
      </p>
      <div className="mt-8">
        <Button size="lg" onClick={scrollToTranslator}>
          Start Translating
        </Button>
      </div>
      <div className="mt-12 relative w-full max-w-4xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-30"></div>
        <div className="relative bg-card rounded-lg shadow-lg p-4 md:p-8 border">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex-1 bg-muted rounded-md p-4 min-h-20">
              <p className="text-muted-foreground">Hello World! How are you today?</p>
            </div>
            <div className="flex-none text-center">
              <div className="h-8 w-8 rounded-full bg-blue-500 text-white mx-auto flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="flex-1 bg-muted rounded-md p-4 min-h-20">
              <p className="text-muted-foreground">¡Hola Mundo! ¿Cómo estás hoy?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
