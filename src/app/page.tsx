import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero';
import { Translator } from '@/components/translator';
import { Features } from '@/components/features';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="translator" className="container py-12">
          <Translator />
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
