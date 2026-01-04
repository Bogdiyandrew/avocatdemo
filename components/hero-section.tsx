'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Award, Phone, CheckCircle2, Video } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, Variants, useMotionValue, animate } from 'framer-motion';

// --- AICI ESTE MODIFICAREA PRINCIPALĂ ---
function CounterAnimation({ target, suffix = '' }: { target: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Folosim MotionValue pentru performanță maximă (nu randează componenta la fiecare număr)
    const count = useMotionValue(0);
    // Rotunjim valoarea ca să nu afișeze zecimale
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 4,      // Durata animației (4 secunde = slow/lent)
                delay: 2,         // Așteaptă 2 secunde înainte să înceapă
                ease: "easeOut",  // Încetinește frumos spre final (smooth)
            });

            return controls.stop;
        }
    }, [isInView, target, count]);

    return (
        <div ref={ref} className="text-2xl font-bold text-white flex items-center">
            <motion.span>{rounded}</motion.span>
            {suffix}
        </div>
    );
}
// ----------------------------------------

export function HeroSection() {
    const heroImages = [
        '/photos/hero1.jpeg',
        '/photos/hero2.jpeg',
        '/photos/hero3.jpeg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const badgeVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.3 }
        }
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
        >
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full scale-110 z-0"
            >
                {heroImages.map((src, index) => (
                    <motion.div
                        key={src}
                        initial={{ scale: 1.1 }}
                        animate={{
                            scale: index === currentImageIndex ? 1 : 1.1,
                            opacity: index === currentImageIndex ? 1 : 0
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={src}
                            alt={`Cabinet avocatură ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            quality={90}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40 z-10" />

            <div
                className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_100%)] pointer-events-none" />

            <motion.div
                style={{ opacity }}
                className="container px-4 md:px-6 mx-auto relative z-20 mt-16 sm:mt-0"
            >
                <motion.div
                    className="max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={badgeVariants}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">Cabinet Autorizat București</span>
                    </motion.div>

                    <motion.h1
                        variants={titleVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
                    >
                        <div className="overflow-hidden">
                            <motion.span variants={wordVariants} className="inline-block mr-4">
                                Drepturile
                            </motion.span>
                            <motion.span variants={wordVariants} className="inline-block mr-4">
                                tale
                            </motion.span>
                            <motion.span variants={wordVariants} className="inline-block">
                                merită
                            </motion.span>
                        </div>

                        <motion.span
                            variants={wordVariants}
                            className="bg-clip-text text-transparent bg-linear-to-r from-amber-200 via-amber-500 to-amber-200 bg-size-[200%_auto] animate-[shimmer_4s_linear_infinite] mt-2 inline-block pb-2"
                        >
                            o apărare serioasă.
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed"
                    >
                        De 12 ani câștigăm procese în <strong className="text-white font-medium">București</strong>.
                        Litigii, contracte, penal — doar rezultate concrete.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-8 mb-10 text-slate-300"
                    >
                        <motion.div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                <Award className="h-5 w-5 text-amber-400" />
                            </div>
                            <div>
                                {/* Aici se va folosi noua animație cu delay */}
                                <CounterAnimation target={487} />
                                <div className="text-xs uppercase tracking-wide text-slate-400">cazuri câștigate</div>
                            </div>
                        </motion.div>

                        <motion.div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                <Clock className="h-5 w-5 text-amber-400" />
                            </div>
                            <div>
                                <CounterAnimation target={2} suffix="h" />
                                <div className="text-xs uppercase tracking-wide text-slate-400">răspuns programǎri</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-6">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white text-base font-medium shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] border-0 rounded-xl"
                                >
                                    <Link href="tel:+40722xxxxxx">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Urgențe: 0722 xxx xxx
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="h-14 px-8 bg-white/5 hover:bg-white text-white border-white/20 backdrop-blur-md rounded-xl"
                                >
                                    <Link href="/programare">
                                        Programează consultație
                                        <Video className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-md w-fit border border-emerald-500/20">
                            <CheckCircle2 className="h-3 w-3" />
                            Avocat de serviciu disponibil acum
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ opacity }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="hidden lg:block absolute bottom-24 right-12 z-20 perspective-1000"
            >
                <motion.div
                    whileHover={{
                        y: -10,
                        rotateX: 5,
                        rotateY: -5,
                        transition: { duration: 0.4, type: "spring" }
                    }}
                    className="bg-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[340px] transform-gpu"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-amber-400 text-sm">★</span>
                            ))}
                        </div>
                        <span className="text-xs text-emerald-400 ml-auto font-medium">Verificat Google</span>
                    </div>

                    <p className="text-slate-200 text-sm mb-4 leading-relaxed italic">
                        &quot;M-au scos dintr-un litigiu pe care îl tăram de 2 ani. Direct la subiect, fără perdea de timp. Recomand.&quot;
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                        <div className="h-9 w-9 rounded-full bg-linear-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                            MC
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Mihai C.</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Proprietar SRL • Sector 1</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}