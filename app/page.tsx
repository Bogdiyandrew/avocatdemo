import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Componenta Header */}
      <Header />

      <main className="flex-1">
        {/* Componenta Hero */}
        <HeroSection />
      </main>

      {/* Componenta Footer */}
      <Footer />

    </div>
  );
}