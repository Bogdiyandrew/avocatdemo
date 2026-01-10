"use client";

import { useRef, useEffect, useState } from "react";
// 1. IMPORTĂM Variants AICI
import { motion, useInView, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import { Award, BookOpen, Scale, CheckCircle2, ShieldCheck, LucideIcon } from "lucide-react";

interface CounterProps {
    target: number;
    suffix?: string;
}

function CounterAnimation({ target, suffix = '' }: CounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 2.5,
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
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`
                p-6 rounded-2xl border border-white/10 
                bg-slate-900/80 md:bg-white/5 
                backdrop-blur-none md:backdrop-blur-md 
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
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    // 2. TIPIZĂM EXPLICIT CA : Variants
    const blobVariants: Variants = {
        animate1: {
            x: [0, 100, -100, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear"
            }
        },
        animate2: {
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 1.1, 0.9, 1],
            transition: {
                duration: 15,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "linear",
                delay: 2
            }
        },
        animate3: {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            transition: {
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="despre" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden text-white">

            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transform-gpu">
                <motion.div
                    variants={blobVariants}
                    animate="animate1"
                    className="absolute -top-[20%] -right-[10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
                />

                <motion.div
                    variants={blobVariants}
                    animate="animate2"
                    className="absolute top-[20%] -left-[10%] w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-purple-600/20 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
                />

                <motion.div
                    variants={blobVariants}
                    animate="animate3"
                    className="absolute -bottom-[20%] left-[20%] w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-emerald-600/15 rounded-full blur-[60px] md:blur-[100px] will-change-transform"
                />
            </div>

            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-lg shadow-black/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                                Excelență juridică
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            Când miza este mare, <br />
                            <span className="text-amber-400 md:text-transparent md:bg-clip-text md:bg-linear-to-r md:from-amber-200 md:via-amber-500 md:to-amber-200 md:bg-size-[200%_auto] md:animate-[shimmer_4s_linear_infinite]">
                                ai nevoie de o apărare pe măsură.
                            </span>
                        </h2>

                        <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                            Justiția nu e despre noroc, ci despre pregătire. Cu o experiență de peste
                            <strong className="text-white"> 15 ani în instanță</strong>, am învățat că fiecare detaliu contează.
                            Oferim acea combinație rară de cunoaștere a legii și tenacitate necesară pentru a proteja ceea ce contează pentru tine.
                        </p>

                        <ul className="space-y-3 pt-2">
                            {[
                                "Membri în Baroul București din 2008",
                                "Onorarii transparente, stabilite de la început",
                                "Disponibilitate imediată pentru urgențe"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + (index * 0.1), duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <span className="text-slate-200 text-sm md:text-base">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 md:gap-5">
                        <StatCard
                            icon={Scale}
                            target={13}
                            suffix="+"
                            label="Ani Experiență"
                            colorClass="text-blue-400"
                            delay={0}
                        />

                        <StatCard
                            icon={BookOpen}
                            target={497}
                            suffix="+"
                            label="Dosare"
                            colorClass="text-emerald-400"
                            className="mt-8 md:mt-12"
                            delay={0.1}
                        />

                        <StatCard
                            icon={Award}
                            target={96.5}
                            suffix="%"
                            label="Succes"
                            colorClass="text-amber-400"
                            delay={0.2}
                        />

                        <StatCard
                            icon={ShieldCheck}
                            target={24}
                            suffix="/7"
                            label="Suport"
                            colorClass="text-purple-400"
                            className="mt-8 md:mt-12"
                            delay={0.3}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}