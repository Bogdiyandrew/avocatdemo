"use client";

import { motion, Variants } from "framer-motion";
import { Gavel, Users, Briefcase, Scale, FileText, ShieldAlert, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Drept penal",
        description: "Asistență imediată în cazuri de reținere sau anchete.",
        image: "/services/1.jpeg",
        icon: Gavel,
        gradient: "from-red-500 to-orange-600",
        iconColor: "text-red-500",
        className: "md:col-span-2 md:row-span-2",
        href: "/serviciilenoastre",
        tags: ["Apărare penală", "Asistență reținere", "Urgențe 24/7", "Strategie procesuală", "Reabilitare"]
    },
    {
        title: "Dreptul familiei",
        description: "Divorțuri și partaje gestionate cu empatie.",
        image: "/services/2.jpeg",
        icon: Users,
        gradient: "from-pink-500 to-rose-500",
        iconColor: "text-pink-500",
        className: "md:col-span-1 md:row-span-2",
        href: "/serviciilenoastre",
        tags: ["Divorț", "Custodie", "Partaj", "Pensie"]
    },
    {
        title: "Drept comercial",
        description: "Protejăm interesele companiei tale.",
        image: "/services/3.jpeg",
        icon: Briefcase,
        gradient: "from-blue-500 to-cyan-600",
        iconColor: "text-blue-500",
        className: "md:col-span-1 md:row-span-1",
        href: "/serviciilenoastre",
        tags: ["Contracte", "Litigii", "Înființări"]
    },
    {
        title: "Litigii civile",
        description: "Rezolvăm dispute contractuale și succesiuni.",
        image: "/services/4.jpeg",
        icon: Scale,
        gradient: "from-emerald-500 to-teal-600",
        iconColor: "text-emerald-500",
        className: "md:col-span-1 md:row-span-1",
        href: "/serviciilenoastre",
        tags: ["Proprietate", "Succesiuni", "Daune"]
    },
    {
        title: "Imobiliare",
        description: "Siguranță în tranzacții imobiliare.",
        image: "/services/5.jpeg",
        icon: FileText,
        gradient: "from-amber-500 to-yellow-600",
        iconColor: "text-amber-500",
        className: "md:col-span-2 md:row-span-1",
        href: "/serviciilenoastre",
        tags: ["Due Diligence", "Antecontracte", "Vânzări", "Litigii Funciare"]
    },
    {
        title: "Malpraxis & Daune",
        description: "Compensații corecte pentru victime.",
        image: "/services/6.jpeg",
        icon: ShieldAlert,
        gradient: "from-purple-500 to-violet-600",
        iconColor: "text-purple-500",
        className: "md:col-span-2 md:row-span-1",
        href: "/serviciilenoastre",
        tags: ["Accidente Auto", "Erori Medicale", "Accidente Muncă"]
    },
];

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
        }
    })
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
    return (
        <Link
            href={service.href}
            className={`block h-full ${service.className}`}
        >
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2, margin: "0px" }}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}

                className={`
                     group relative overflow-hidden rounded-3xl h-full cursor-pointer 
                    transition-shadow duration-300
                    border border-slate-200 dark:border-slate-800
                    hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50
                    will-change-transform
                `}
            >
                <div
                    className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
                    style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 z-0 bg-white/60 dark:bg-slate-950/85 transition-opacity group-hover:bg-white/50 dark:group-hover:bg-slate-950/80" />
                <div className={`absolute inset-0 z-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 mix-blend-overlay transition-opacity duration-500`} />

                <div className="relative h-full p-6 sm:p-8 flex flex-col z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`
                            p-3 rounded-2xl border shadow-sm transition-colors duration-300
                            bg-white/80 backdrop-blur-sm border-slate-100
                            dark:bg-slate-800/80 dark:border-slate-700
                        `}>
                            <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                        </div>

                        <div className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 drop-shadow-sm">
                            {service.title}
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed mb-6 drop-shadow-sm">
                            {service.description}
                        </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2">
                        {service.tags.map((tag, i) => (
                            <span
                                key={i}
                                className={`
                                    text-xs font-bold px-3 py-1.5 rounded-lg
                                    bg-white/70 dark:bg-slate-900/70 backdrop-blur-md
                                    text-slate-700 dark:text-slate-300
                                    border border-slate-200/50 dark:border-slate-700/50
                                    group-hover:border-${service.iconColor.split('-')[1]}-500/50
                                    transition-colors duration-300
                                `}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

export function ServicesSection() {
    return (
        <section id="serv" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[40px_40px] dark:opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider text-sm uppercase mb-2 block">Arii de practică</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Expertiză juridică
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(280px,auto)] gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}