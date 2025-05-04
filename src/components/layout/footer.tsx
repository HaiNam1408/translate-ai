'use client';

export function Footer() {
  return (
    <footer className="w-full py-6 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TranslateAI. All rights reserved.
        </div>
        <div className="text-sm text-muted-foreground">
          Powered by TranslateAI
        </div>
      </div>
    </footer>
  );
}
