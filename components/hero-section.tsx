import { Scale } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-slate-900 dark:text-white">
                        Apărăm Drepturile Tale cu <span className="text-blue-700 dark:text-blue-500">Integritate</span>.
                    </h1>
                    <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl">
                        Soluții juridice strategice pentru probleme complexe. Suntem aici să te ghidăm prin labirintul legal cu transparență și dedicare.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 dark:bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-slate-700 dark:hover:bg-blue-700"
                        >
                            Programează o Consultanță
                        </Link>
                        <Link
                            href="#servicii"
                            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:text-slate-200"
                        >
                            Vezi Serviciile
                        </Link>
                    </div>
                </div>

                {/* Imagine Hero (Placeholder) */}
                <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white/20">
                        <Scale className="w-32 h-32" />
                    </div>
                </div>
            </div>
        </section>
    );
}