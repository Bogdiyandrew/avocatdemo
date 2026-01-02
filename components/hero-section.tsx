import { ShieldCheck, Phone, CalendarDays, Scale } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">

            {/* Background subtil - Pattern de "ordine" */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    {/* Stânga: Mesajul Critic */}
                    <div className="space-y-8">

                        {/* Badges - Autoritate & Siguranță */}
                        <div className="flex flex-wrap gap-3">
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                Confidențialitate Garantată
                            </div>
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-400">
                                <Scale className="h-3.5 w-3.5" />
                                Expertiză Juridică
                            </div>
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white leading-tight">
                            Probleme Legale? <br />
                            <span className="text-blue-700 dark:text-blue-500">Rezolvăm Rapid.</span>
                        </h1>

                        <p className="max-w-[600px] text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
                            Nu lăsa incertitudinea să te coste. Oferim protecție juridică imediată și strategii clare pentru situații complexe.
                            <span className="font-semibold block mt-2 text-slate-900 dark:text-slate-100">
                                Sună acum pentru o evaluare preliminară.
                            </span>
                        </p>

                        {/* Butoane de Acțiune - Focus pe Conversie */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Butonul de URGENȚĂ - Iese în evidență */}
                            <Link
                                href="tel:+40700000000"
                                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 text-white px-8 text-base font-bold shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                            >
                                <Phone className="h-5 w-5 animate-pulse" />
                                Sună Acum - Urgențe
                            </Link>

                            {/* Butonul Secundar - Programare */}
                            <Link
                                href="#contact"
                                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 text-base font-semibold text-slate-900 dark:text-white shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300"
                            >
                                <CalendarDays className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                                Programează Consultanță
                            </Link>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            *Răspundem în maxim 15 minute la solicitările marcate ca urgență.
                        </p>
                    </div>

                    {/* Dreapta: Imaginea de Încredere (Abstractă sau Poză Avocat) */}
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                        {/* Element decorativ de fundal */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-700">
                            {/* Aici ar veni poza profesională a avocatului. Folosim un placeholder sugestiv. */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                                <Scale className="w-24 h-24 mb-4 opacity-20" />
                                <span className="text-sm font-medium uppercase tracking-widest opacity-40">Imagine Profesională Avocat</span>
                            </div>

                            {/* Card plutitor "Review" - Social Proof */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex text-yellow-500">
                                        {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                                    </div>
                                    <span className="text-xs font-semibold text-slate-900 dark:text-white">5.0/5.0</span>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-slate-300 italic">
                                    "M-au salvat dintr-o situație imposibilă. Profesionalism și rapiditate maximă."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}