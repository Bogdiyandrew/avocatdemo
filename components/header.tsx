import Link from "next/link";
import { Scale } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <header className="w-full max-w-5xl rounded-full border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg transition-all duration-300">
                <div className="flex h-14 items-center justify-between px-6">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1.5 rounded-full transition-transform group-hover:scale-110">
                            <Scale className="h-4 w-4" />
                        </div>
                        <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">AvocatDemo</span>
                    </Link>

                    {/* Meniu Desktop */}
                    <nav className="hidden md:flex gap-8 text-sm font-medium">
                        <Link href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Acasă</Link>
                        <Link href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Servicii</Link>
                        <Link href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Contact</Link>
                    </nav>

                    {/* Acțiuni Dreapta */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Link
                            href="#"
                            className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-medium text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                        >
                            Consultă Acum
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}