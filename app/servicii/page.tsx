"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Building2, Globe2, Gavel, Users, Scale, FileText,
    Briefcase, Zap, ShieldCheck, ArrowRight, Phone, CheckCircle2
} from "lucide-react";
import Link from "next/link";

const servicesData = [
    {
        id: "societati",
        title: "Societăți, asociații și fundații",
        icon: Building2,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        description: "De la înființarea până la lichidarea societății comerciale sau a ONG-ului, echipa noastră specializată îți este alături în toate etapele juridice.",
        content: (
            <div className="space-y-6 text-slate-600 dark:text-slate-300">
                <p>
                    Oferim asistență completă pentru SRL, SA, societăți în nume colectiv sau PFA-uri. Serviciile includ înființarea, schimbarea sediului, modificarea acționariatului, majorarea capitalului social sau schimbarea codurilor CAEN.
                </p>
                <div className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-500" />
                        Asociații și Fundații (OG nr. 26/2000)
                    </h4>
                    <p className="text-sm mb-4">
                        Redactăm statutul și actele necesare pentru dobândirea personalității juridice, inclusiv:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full" /> Redactare statut și act constitutiv</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full" /> Rezervare denumire la ministerul justiției</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full" /> Stabilire sediu și patrimoniu inițial</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full" /> Reprezentare la judecătorie</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "cetatenie",
        title: "Cetățenie și migrație",
        icon: Globe2,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        description: "Gestionăm procedurile complexe privind regimul străinilor în România, obținerea sau redobândirea cetățeniei.",
        features: [
            "Redobândirea cetățeniei române (dosare complete)",
            "Obținerea avizelor de muncă și a permiselor de ședere",
            "Asistență în proceduri de azil și migrație",
            "Vize de scurtă și lungă ședere"
        ]
    },
    {
        id: "litigii",
        title: "Litigii civile și comerciale",
        icon: Scale,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        description: "Te reprezentăm în instanță pentru recuperarea drepturilor tale, fie că vorbim de creanțe neîncasate sau dispute contractuale.",
        features: [
            "Recuperări de creanțe și executare silată",
            "Contestații la executare și clauze abuzive",
            "Proceduri de insolvență și faliment",
            "Litigii imobiliare și revendicări"
        ]
    },
    {
        id: "penal",
        title: "Drept penal",
        icon: Gavel,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        description: "Asistență imediată în fața organelor de urmărire penală. Abordăm fiecare caz cu discreție și o strategie defensivă solidă.",
        features: [
            "Infracțiuni economice (evaziune, spălare de bani)",
            "Asistență la audieri și reținere",
            "Contravenții și infracțiuni rutiere",
            "Reabilitare judecătorească"
        ]
    },
    {
        id: "familie",
        title: "Familie și muncă",
        icon: Users,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        description: "Soluționăm conflictele sensibile legate de viața de familie sau raporturile de muncă.",
        features: [
            "Divorț, Partaj și Autoritate părintească",
            "Proceduri de Adopție națională și internațională",
            "Concedieri abuzive și litigii de muncă",
            "Negocierea contractelor colective de muncă"
        ]
    },
    {
        id: "energie",
        title: "Energie regenerabilă & GDPR",
        icon: Zap,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        description: "Consultanță pentru domenii moderne și reglementări europene stricte.",
        features: [
            "Consultanță juridică proiecte fotovoltaice/eoliene",
            "Implementare și audit GDPR (Protecția Datelor)",
            "Proprietate intelectuală și mărci",
            "Avize și autorizații specifice"
        ]
    }
];

export default function ServicesPage() {
    const [activeSection, setActiveSection] = useState("societati");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const service of servicesData) {
                const element = document.getElementById(service.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(service.id);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: "smooth"
            });
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 bg-slate-900 overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest"
                    >
                        Expertiză Juridică Multidisciplinară
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Soluții clare pentru probleme <span className="text-amber-500">complexe</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Indiferent că ești o companie în expansiune sau o persoană fizică care își apără drepturile, acoperim spectrul complet de servicii juridice.
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-16 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* SIDEBAR NAVIGATION (Sticky) */}
                    <aside className="lg:col-span-3 lg:sticky lg:top-28 h-fit hidden lg:block">
                        <nav className="space-y-1">
                            {servicesData.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => scrollToSection(service.id)}
                                    className={`
                                        w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200
                                        flex items-center gap-3 group border border-transparent
                                        ${activeSection === service.id
                                            ? "bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-500 shadow-sm border-slate-200 dark:border-slate-800"
                                            : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white"
                                        }
                                    `}
                                >
                                    <service.icon className={`w-4 h-4 ${activeSection === service.id ? "text-amber-500" : "text-slate-400 group-hover:text-slate-600"}`} />
                                    <span>{service.title.split(' ')[0]}...</span> {/* Afișăm titlul scurt în meniu */}
                                </button>
                            ))}
                        </nav>

                        {/* Quick Contact Widget */}
                        <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-[40px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100"></div>
                            <h4 className="font-bold text-lg mb-2 relative z-10">Consultanță inițială</h4>
                            <p className="text-sm text-slate-400 mb-6 relative z-10">
                                Oferă-ne detalii despre problema ta și te ajutăm să alegi direcția corectă.
                            </p>
                            <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all hover:shadow-lg hover:shadow-amber-500/25 relative z-10">
                                <Phone className="w-4 h-4" />
                                Contactează-ne
                            </Link>
                        </div>
                    </aside>

                    {/* MAIN CONTENT AREA */}
                    <div className="lg:col-span-9 space-y-20">
                        {servicesData.map((service, index) => (
                            <section
                                key={service.id}
                                id={service.id}
                                className="scroll-mt-32"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white dark:bg-slate-950 rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm"
                                >
                                    {/* Service Header */}
                                    <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8 border-b border-slate-100 dark:border-slate-900 pb-8">
                                        <div className={`p-4 rounded-2xl ${service.bg} ${service.color} shrink-0 w-fit`}>
                                            <service.icon className="w-10 h-10" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                                {service.title}
                                            </h2>
                                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Custom Content or Features Grid */}
                                    {service.content ? (
                                        service.content
                                    ) : (
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {service.features?.map((feature, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                                                >
                                                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${service.color}`} />
                                                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Action Footer per card */}
                                    <div className="mt-8 pt-6 flex items-center justify-between">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors group"
                                        >
                                            Solicită ofertă pe acest domeniu
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </section>
                        ))}

                        {/* Final CTA Block similar to source site */}
                        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Nu ești sigur ce să alegi?
                            </h3>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Te vom ajuta să faci cea mai bună alegere, prin prezentarea avantajelor și dezvantajelor fiecărei categorii în parte.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors"
                            >
                                Discută cu un avocat
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}