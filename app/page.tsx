import { Scale } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-slate-900 dark:text-white" />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">AvocatDemo</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="#despre" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">Despre Noi</Link>
            <Link href="#servicii" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">Arii de Practică</Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#contact"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Consultă un Avocat
            </Link>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT (Doar Hero Section) --- */}
      <main className="flex-1">
        <HeroSection />
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 md:py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-slate-900 dark:text-white" />
            <span className="text-base font-semibold text-slate-900 dark:text-white">AvocatDemo</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
            © {new Date().getFullYear()} AvocatDemo. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}