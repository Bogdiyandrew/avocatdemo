'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, MapPin, Award, Phone } from 'lucide-react'; // RE-IMPORTAT PHONE
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';

// --- Componenta pentru Numărătoare Animată ---
function CounterAnimation({ target, suffix = '' }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, isInView]);

    return (
        <div ref={ref} className="text-2xl font-bold text-white">
            {count}{suffix}
        </div>
    );
}

// --- Componenta Principală HeroSection ---
export function HeroSection() {
    const heroImages = [
        '/photos/hero1.jpeg',
        '/photos/hero2.jpeg',
        '/photos/hero3.jpeg'
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);

    // Parallax Effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Carousel Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    // --- Variante Animații Framer Motion ---
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
            className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950"
        >
            {/* 1. Background Images (Layer 0) */}
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

            {/* 2. Overlays (Layer 1) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-transparent z-10" />

            <div
                className="absolute inset-0 opacity-30 z-10 mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            {/* 3. Main Content (Layer 2) */}
            <motion.div
                style={{ opacity }}
                className="container px-4 md:px-6 mx-auto relative z-20"
            >
                <motion.div
                    className="max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        variants={badgeVariants}
                        className="inline-flex items-center gap-2 mb-6 text-amber-400 font-medium"
                    >
                        <motion.div
                            className="h-1 w-8 bg-amber-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        />
                        <span className="text-sm tracking-wider uppercase">Cabinet Autorizat București</span>
                    </motion.div>

                    {/* Headline */}
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
                            className="text-amber-400 mt-2 relative inline-block"
                        >
                            o apărare serioasă.
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-4 bg-white/20 -z-10 -rotate-1 blur-sm origin-left"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    delay: 1.5,
                                    duration: 0.8,
                                    ease: "circOut"
                                }}
                            />
                        </motion.span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed"
                    >
                        De 12 ani câștigăm procese în <strong className="text-white font-medium">București</strong>.
                        Litigii, contracte, penal — doar rezultate concrete.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-8 mb-10 text-slate-300"
                    >
                        <motion.div
                            className="flex items-start gap-3"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Award className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                            <div>
                                <CounterAnimation target={487} />
                                <div className="text-sm">cazuri câștigate</div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-start gap-3"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Clock className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                            <div>
                                <CounterAnimation target={24} suffix="h" />
                                <div className="text-sm">răspuns la urgențe</div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-start gap-3"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                            <div>
                                <CounterAnimation target={12} suffix=" ani" />
                                <div className="text-sm">în București</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* CTA Buttons - ACUM SUNT DOUĂ BUTOANE */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        {/* BUTON 1: TELEFON (Principal/Roșu) */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white text-base font-medium shadow-2xl shadow-red-900/50 border-0 group"
                            >
                                <Link href="tel:+40722123456">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Sună Acum: 0722 123 456
                                </Link>
                            </Button>
                        </motion.div>

                        {/* BUTON 2: PROGRAMARE (Secundar/Outline) */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md group"
                            >
                                <Link href="/programare">
                                    Programează consultație
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Trust signal */}
                    <motion.p
                        variants={itemVariants}
                        className="mt-8 text-sm text-slate-400"
                    >
                        Prima consultație <strong className="text-white">gratuită</strong> — analizăm cazul tău în detaliu.
                    </motion.p>
                </motion.div>
            </motion.div>

            {/* 4. Testimonial Card (Layer 3 - Floating) */}
            <motion.div
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="hidden lg:block absolute bottom-12 right-12 z-20"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
                    className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-lg border border-white/10 shadow-2xl max-w-[340px]"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                    key={star}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 1.2 + (star * 0.1),
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15
                                    }}
                                    className="text-amber-400 text-lg"
                                >
                                    ★
                                </motion.div>
                            ))}
                        </div>
                        <span className="text-xs text-emerald-400 ml-auto">Verificat Google</span>
                    </div>

                    <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                        "M-au scos dintr-un litigiu pe care îl tăram de 2 ani. Direct la subiect, fără perdea de timp. Recomand cu încredere."
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                        <motion.div
                            className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg"
                            whileHover={{ rotate: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            MC
                        </motion.div>
                        <div>
                            <p className="text-sm font-medium text-white">Mihai C.</p>
                            <p className="text-xs text-slate-400">Proprietar SRL • Sector 1</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}