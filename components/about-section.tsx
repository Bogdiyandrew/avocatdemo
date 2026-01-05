"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Award, BookOpen, Scale, CheckCircle2, ShieldCheck, LucideIcon } from "lucide-react";

interface CounterProps {
    target: number;
    suffix?: string;
}

function CounterAnimation({ target, suffix = '' }: CounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 3,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, target, count]);

    return (
        <span ref={ref} className="flex">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
}

interface StatCardProps {
    icon: LucideIcon;
    target: number;
    suffix: string;
    label: string;
    colorClass: string;
    className?: string;
    delay: number;
}

function StatCard({ icon: Icon, target, suffix, label, colorClass, className = "", delay }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`
                p-6 rounded-2xl border border-white/10 
                bg-white/5 backdrop-blur-md
                flex flex-col items-center text-center 
                transition-colors duration-300
                hover:bg-white/10 hover:border-white/20
                shadow-lg hover:shadow-xl hover:shadow-black/20
                ${className}
            `}
        >
            <div className={`p-3 rounded-xl bg-slate-950/50 border border-white/5 mb-4 ${colorClass} shadow-inner`}>
                <Icon className="w-6 h-6" />
            </div>

            <div className="text-3xl md:text-4xl font-bold text-white mb-1 drop-shadow-sm">
                <CounterAnimation target={target} suffix={suffix} />
            </div>

            <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">
                {label}
            </div>
        </motion.div>
    );
}

export function AboutSection() {
    return (
        <section id="despre" className="relative py-32 bg-slate-950 overflow-hidden text-white">

            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -100, 50, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[100px] mix-blend-screen"
                />

                <motion.div
                    animate={{
                        x: [0, -50, 50, 0],
                        y: [0, 50, -50, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[100px] mix-blend-screen"
                />

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] bg-emerald-600/20 rounded-full blur-[100px] mix-blend-screen"
                />
            </div>

            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-md shadow-lg shadow-black/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                                Excelență juridică
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                            Când miza este mare, <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-500 to-amber-200 bg-size-[200%_auto] animate-[shimmer_4s_linear_infinite]">
                                ai nevoie de o apărare pe măsură.
                            </span>
                        </h2>

                        <p className="text-slate-300 text-lg leading-relaxed font-light">
                            Justiția nu e despre noroc, ci despre pregătire. Cu o experiență de peste
                            <strong className="text-white"> 15 ani în instanță</strong>, am învățat că fiecare detaliu contează.
                            Oferim acea combinație rară de cunoaștere a legii și tenacitate necesară pentru a proteja ceea ce contează pentru tine: libertatea, familia sau afacerea.
                        </p>

                        <ul className="space-y-4 pt-2">
                            {[
                                "Membri în Baroul București din 2008",
                                "Onorarii transparente, stabilite de la început",
                                "Disponibilitate imediată pentru urgențe"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <span className="text-slate-200">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-5 perspective-1000">
                        <StatCard
                            icon={Scale}
                            target={15}
                            suffix="+"
                            label="Ani de Experiență"
                            colorClass="text-blue-400"
                            delay={0}
                        />

                        <StatCard
                            icon={BookOpen}
                            target={500}
                            suffix="+"
                            label="Dosare Soluționate"
                            colorClass="text-emerald-400"
                            className="mt-12"
                            delay={0.1}
                        />

                        <StatCard
                            icon={Award}
                            target={98}
                            suffix="%"
                            label="Rată de Succes"
                            colorClass="text-amber-400"
                            delay={0.2}
                        />

                        <StatCard
                            icon={ShieldCheck}
                            target={24}
                            suffix="/7"
                            label="Suport Urgențe"
                            colorClass="text-purple-400"
                            className="mt-12"
                            delay={0.3}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}