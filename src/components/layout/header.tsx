'use client';

import { Button } from '@/components/ui/button';
import { MdTranslate } from 'react-icons/md';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and site name */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <MdTranslate className="h-8 w-8 text-blue-500" />
            <span className="font-bold text-xl">TranslateAI</span>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="https://github.com/your-username/translate-app" target="_blank">
              GitHub
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://makersuite.google.com/app/apikey" target="_blank">
              Get API Key
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

