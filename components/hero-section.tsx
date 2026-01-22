'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, Award, Phone, Video, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion, useScroll, useTransform, useInView, Variants, useMotionValue, animate } from 'framer-motion';

function CounterAnimation({ target, suffix = '' }: { target: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, { duration: 4, delay: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, target, count]);

    return (
        <div ref={ref} className="text-2xl font-bold text-white flex items-center">
            <motion.span>{rounded}</motion.span>{suffix}
        </div>
    );
}

function SocialCard({
    icon,
    title,
    href,
    colorClass,
    borderColorClass,
    delay
}: {
    icon: any, title: string, href: string, colorClass: string, borderColorClass: string, delay: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay, duration: 0.5 }}
        >
            <Link href={href} target="_blank" className="group block">
                <div className={`relative flex items-center gap-4 p-3 pr-6 rounded-2xl 
                    bg-white/90 dark:bg-slate-950/60 
                    border border-slate-200 dark:border-white/5 
                    hover:border-${borderColorClass}/50 
                    backdrop-blur-xl transition-all duration-500 w-full sm:w-fit 
                    hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden`}>

                    <div className={`absolute inset-0 bg-linear-to-r ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform duration-500">
                        <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${colorClass} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500`} />
                        <FontAwesomeIcon icon={icon} className="w-6 h-6 relative z-10 text-slate-700 dark:text-white drop-shadow-lg" />
                    </div>

                    <div className="relative z-10">
                        <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            {title}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-slate-500 dark:text-slate-200" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export function HeroSection() {
    const heroImages = [
        {
            desktop: '/photos/hero1.jpeg',
            mobile: '/photos/hero1mobile.jpeg'
        },
        {
            desktop: '/photos/hero2.jpeg',
            mobile: '/photos/hero2mobile.jpeg'
        },
        {
            desktop: '/photos/hero3.jpeg',
            mobile: '/photos/hero3mobile.jpeg'
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    
    // MODIFICARE: Am schimbat intervalul de la 0.5 la 0.8 pentru un fade out mai lent la scroll
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    useEffect(() => {
        // Am mărit intervalul la 6 secunde pentru a permite animației lente să respire
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
        }, 6000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    const titleVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
    };
    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    const badgeVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 transition-colors duration-500">
            <motion.div style={{ y }} className="absolute inset-0 w-full h-full scale-110 z-0">
                {heroImages.map((imgObj, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{
                            // MODIFICARE MAJORĂ: Control separat pentru opacity, scale și zIndex
                            opacity: index === currentImageIndex ? 1 : 0,
                            scale: index === currentImageIndex ? 1 : 1.1,
                            zIndex: index === currentImageIndex ? 10 : 0
                        }}
                        transition={{
                            // Opacitate lentă (2.5s) pentru crossfade
                            opacity: { duration: 2.5, ease: "easeInOut" },
                            // Scale foarte lent (7s) pentru efect cinematic
                            scale: { duration: 7, ease: "linear" }
                        }}
                        className="absolute inset-0"
                    >
                        <div className="block md:hidden h-full w-full relative">
                            <Image
                                src={imgObj.mobile}
                                alt={`Cabinet avocatură ${index + 1} mobile`}
                                fill
                                priority={index === 0}
                                className="object-cover object-center"
                                quality={85}
                                sizes="100vw"
                            />
                        </div>

                        <div className="hidden md:block h-full w-full relative">
                            <Image
                                src={imgObj.desktop}
                                alt={`Cabinet avocatură ${index + 1} desktop`}
                                fill
                                priority={index === 0}
                                className="object-cover"
                                quality={90}
                                sizes="100vw"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/80 to-slate-900/40 md:from-slate-950/95 md:via-slate-900/85 md:to-slate-900/50 z-10 transition-colors duration-500" />

            <div className="absolute inset-0 z-10 opacity-20 pointer-events-none text-white"
                style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            <motion.div
                style={{ opacity }}
                className="container px-4 md:px-6 mx-auto relative z-20 pt-28 md:pt-32 pb-20"
            >
                <motion.div className="max-w-4xl" variants={containerVariants} initial="hidden" animate="visible">

                    <motion.div variants={badgeVariants} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-lg">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-300">Cabinet Autorizat Piteşti</span>
                    </motion.div>

                    <motion.h1 variants={titleVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                        <div className="overflow-hidden">
                            <motion.span variants={wordVariants} className="inline-block mr-4">Drepturile</motion.span>
                            <motion.span variants={wordVariants} className="inline-block mr-4">tale</motion.span>
                            <motion.span variants={wordVariants} className="inline-block">merită</motion.span>
                        </div>
                        <motion.span variants={wordVariants} className="bg-clip-text text-transparent bg-linear-to-r from-amber-100 via-amber-400 to-amber-100 bg-size-[200%_auto] animate-[shimmer_4s_linear_infinite] mt-2 inline-block pb-2 drop-shadow-sm">
                            o apărare serioasă.
                        </motion.span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
                        De 12 ani câștigăm procese în <strong className="text-white font-semibold">Piteşti</strong>. Litigii, contracte, penal — rezultate concrete, fără compromisuri.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-8 mb-12">
                        <motion.div className="flex items-center gap-4 group">
                            <div className="p-3 rounded-xl bg-slate-800/50 border border-white/10 group-hover:border-amber-500/30 transition-colors">
                                <Award className="h-6 w-6 text-amber-400" />
                            </div>
                            <div>
                                <CounterAnimation target={487} />
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">cazuri câștigate</div>
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center gap-4 group">
                            <div className="p-3 rounded-xl bg-slate-800/50 border border-white/10 group-hover:border-amber-500/30 transition-colors">
                                <Clock className="h-6 w-6 text-amber-400" />
                            </div>
                            <div>
                                <CounterAnimation target={20} suffix="min." />
                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">răspuns rapid</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                                <Button asChild size="lg" className="w-full sm:w-auto h-16 px-10 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold shadow-[0_0_50px_-12px_rgba(220,38,38,0.6)] border-0 rounded-2xl">
                                    <Link href="tel:+40722xxxxxx">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Urgențe: 0722 xxx xxx
                                    </Link>
                                </Button>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-16 px-10 bg-white/10 hover:bg-white hover:text-slate-900 text-white border-white/20 backdrop-blur-md rounded-2xl transition-all font-medium">
                                    <Link href="/programare">
                                        Programează consultație
                                        <Video className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>

                        <div className="flex flex-col gap-3 mt-2 sm:mt-0 max-w-md">
                            <SocialCard
                                icon={faWhatsapp}
                                title="Discută pe WhatsApp"
                                href="https://wa.me/40722xxxxxx"
                                colorClass="from-emerald-400 to-emerald-600"
                                borderColorClass="emerald-500"
                                delay={1.2}
                            />

                            <SocialCard
                                icon={faLinkedin}
                                title="Urmărește-ne pe Linkedin"
                                href="https://www.linkedin.com/feed/"
                                colorClass="from-pink-500 to-rose-600"
                                borderColorClass="pink-500"
                                delay={1.3}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ opacity }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="hidden xl:block absolute bottom-24 right-16 z-20 perspective-1000"
            >
                <motion.div
                    whileHover={{ y: -10, rotateX: 5, rotateY: -5, transition: { duration: 0.4, type: "spring" } }}
                    className="bg-white/90 dark:bg-slate-950/80 backdrop-blur-2xl p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] max-w-[380px] transform-gpu"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-amber-500 dark:text-amber-400 text-base drop-shadow-md">★</span>
                            ))}
                        </div>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 ml-auto font-bold bg-emerald-100 dark:bg-emerald-950/50 px-2 py-1 rounded-md border border-emerald-500/20">Verificat Google</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-200 text-base mb-6 leading-relaxed italic font-light">
                        &quot;M-au scos dintr-un litigiu pe care îl tăram de 2 ani. Direct la subiect, fără perdea de timp. Recomand.&quot;
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                        <div className="h-10 w-10 rounded-full bg-linear-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-2 ring-white dark:ring-slate-900">MC</div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Mihai C.</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Proprietar SRL • Piteşti</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}