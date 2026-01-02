import { Award, BookOpen, Scale, CheckCircle } from "lucide-react";

export function AboutSection() {
    return (
        // Folosim bg-slate-900 forțat pentru impact vizual puternic (stil "Premium")
        <section id="despre" className="py-24 bg-slate-900 text-white overflow-hidden relative">

            {/* Element decorativ de fundal */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Partea stângă: Textul de vânzare */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-wider">
                            <Award className="w-4 h-4" />
                            Experiență și Devotament
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                            Nu suntem doar avocați. <br />
                            <span className="text-blue-400">Suntem scutul tău legal.</span>
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            În cei peste 15 ani de activitate, am învățat că legea nu este doar despre paragrafe, ci despre viețile oamenilor.
                            Fie că este vorba despre libertatea ta, familia ta sau afacerea ta, abordăm fiecare dosar cu o strategie meticuloasă și o combativitate calculată.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Membri în Baroul București din 2008",
                                "Abordare transparentă a onorariilor (Fără costuri ascunse)",
                                "Disponibilitate extinsă pentru urgențe penale"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Partea dreaptă: Statistici (Grid) */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                            <Scale className="w-8 h-8 text-blue-400 mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">15+</div>
                            <div className="text-sm text-slate-400">Ani de Experiență</div>
                        </div>
                        <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors mt-8">
                            <BookOpen className="w-8 h-8 text-emerald-400 mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">500+</div>
                            <div className="text-sm text-slate-400">Dosare Soluționate</div>
                        </div>
                        <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors">
                            <Award className="w-8 h-8 text-amber-400 mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">98%</div>
                            <div className="text-sm text-slate-400">Rată de Succes</div>
                        </div>
                        <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition-colors mt-8">
                            <CheckCircle className="w-8 h-8 text-purple-400 mb-3" />
                            <div className="text-3xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-slate-400">Suport Urgențe</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}