"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Award,
    Scale,
    Users,
    History,
    CheckCircle2,
    ArrowRight,
    Linkedin,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM = [
    {
        name: "Av. Mihai Popescu",
        role: "Avocat Fondator",
        specialization: "Drept Penal & Comercial",
        image: "/team/partener1.jpeg",
        bio: "Mihai nu crede în jumătăți de măsură. După 20 de ani de barou, știe că diferența dintre un verdict favorabil și un eșec stă în detalii pe care alții le ignoră. Expert în dosare penale economice.",
        social: { linkedin: "#", email: "mihai@avocatdemo.ro" }
    },
    {
        name: "Av. Elena Ionescu",
        role: "Avocat Partener",
        specialization: "Drept Civil & Familie",
        image: "/team/partener2.jpeg",
        bio: "Când familia sau patrimoniul tău sunt în joc, Elena este avocatul care aduce calmul în furtună. Negociază dur, dar cu tact, obținând soluții echitabile în partaje și succesiuni complicate.",
        social: { linkedin: "#", email: "elena@avocatdemo.ro" }
    },
    {
        name: "Av. Andrei Radu",
        role: "Senior Associate",
        specialization: "Contencios Administrativ",
        image: "/team/asociat.jpeg",
        bio: "Andrei se luptă cu birocrația și câștigă. Specialist în anularea actelor administrative abuzive și litigii cu autoritățile statului. Dacă există o cale legală, el o găsește.",
        social: { linkedin: "#", email: "andrei@avocatdemo.ro" }
    },
    {
        name: "Av. Camelia Dumitrescu",
        role: "Associate",
        specialization: "Dreptul Muncii & GDPR",
        image: "/team/asociat2.jpeg",
        bio: "Camelia înțelege mediul de business modern. Oferă consultanță rapidă și pragmatică pentru companii, prevenind litigiile de muncă înainte să apară.",
        social: { linkedin: "#", email: "camelia@avocatdemo.ro" }
    }
];

const VALUES = [
    {
        title: "Onestitate brută",
        description: "Îți spunem șansele reale, nu ce vrei să auzi. Nu preluăm dosare pierdute din start doar pentru onorariu.",
        icon: Scale
    },
    {
        title: "Strategie, nu doar procedură",
        description: "Nu bifăm doar termene de judecată. Construim o strategie de apărare personalizată pentru fiecare speță.",
        icon: Award
    },
    {
        title: "Aliați, nu doar consultanți",
        description: "Suntem de partea ta până la capăt. Tratăm problema ta cu aceeași seriozitate cu care ne-am apăra pe noi înșine.",
        icon: Users
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 z-0">
                    <Image
                        src="/photos/about-story.jpeg"
                        alt="Background birou avocatura"
                        fill
                        className="object-cover opacity-50"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-900/80 to-slate-50 dark:to-slate-950" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                            Cine suntem
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Mai mult decât avocați.<br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">
                                Suntem partenerii tăi strategici.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
                            Într-un sistem juridic complicat, noi aducem claritate. O echipă unită de pragmatism și dorința de a obține rezultate concrete.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 group"
                    >
                        <Image
                            src="/photos/about.jpeg"
                            alt="Echipa discutand"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <div className="text-5xl font-bold mb-1 tracking-tighter">15+</div>
                            <div className="text-sm font-medium opacity-90 uppercase tracking-wide">Ani de experiență</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                                <History className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Cum am început</h2>
                        </div>

                        <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                            <p>
                                Am fondat AvocatDemo în 2008 dintr-o nevoie simplă: clienții căutau avocați care să vorbească pe limba lor, nu în termeni juridici greoi. Am pornit ca un cabinet mic, focusat pe rezultate, nu pe ore facturate inutil.
                            </p>
                            <p>
                                Astăzi, suntem o societate respectată pentru că am păstrat aceeași filozofie. Nu preluăm sute de dosare la grămadă. Alegem cazurile în care credem și le ducem până la capăt.
                            </p>
                        </div>

                        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                            {[
                                "Consultanță directă",
                                "Strategii personalizate",
                                "Suport pentru urgențe",
                                "Fără costuri ascunse"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Principiile noastre</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Avocatura nu este doar o meserie, este o responsabilitate. Iată valorile de la care nu ne abatem.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {VALUES.map((val, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-amber-50 dark:bg-amber-900/10 text-amber-600 dark:text-amber-500 rounded-2xl flex items-center justify-center mb-6">
                                    <val.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {val.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase mb-2 block">Oamenii din spate</span>
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                            Experții dedicați cazului tău
                        </h2>
                    </div>
                    <Link href="/contact">
                        <Button variant="ghost" className="gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                            Vrei să lucrăm împreună? <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-3/4 relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex gap-3 justify-center">
                                        <Link href={member.social.linkedin} className="p-2.5 bg-white/10 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-colors border border-white/10">
                                            <Linkedin className="w-5 h-5" />
                                        </Link>
                                        <Link href={`mailto:${member.social.email}`} className="p-2.5 bg-white/10 hover:bg-emerald-600 text-white rounded-full backdrop-blur-md transition-colors border border-white/10">
                                            <Mail className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wider mb-4">
                                    {member.role}
                                </p>
                                <div className="h-px w-12 bg-slate-200 dark:bg-slate-800 mb-4" />
                                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
                                    {member.specialization}
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-4 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
}