"use client"

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Scale, Menu, X, ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950" />
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50 transition-colors cursor-pointer z-50"
            aria-label="Schimbă tema"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </motion.button>
    );
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const { scrollY } = useScroll();
    const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);
    const headerY = useTransform(scrollY, [0, 100], [0, -8]);

    const handleHomeClick = (e: React.MouseEvent) => {
        if (window.location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname);
            }
        }
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            if (window.scrollY < 50) {
                if (window.location.hash) {
                    history.replaceState(null, '', window.location.pathname);
                }
                setActiveSection("");
            }

            const sections = ['serv', 'despre', 'contact'];
            let current = '';

            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = id;
                    }
                }
            }
            if (window.scrollY >= 50) {
                setActiveSection(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const menuItems = [
        { name: "Acasă", href: "/", id: "" },
        { name: "Despre noi", href: "/desprenoi", id: "desprenoi" },
        { name: "Servicii", href: "/servicii", id: "servicii" },
        { name: "Blog juridic", href: "/blog", id: "blog" },
        { name: "Programare", href: "/programare", id: "programare" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-slate-900/20 dark:bg-slate-950/40 backdrop-blur-sm cursor-pointer md:hidden"
                    />
                )}
            </AnimatePresence>

            <motion.div
                style={{ y: headerY }}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
            >
                <motion.header
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    style={{ scale: headerScale }}
                    className={`w-full max-w-5xl pointer-events-auto rounded-3xl border transition-all duration-500 ${isScrolled || isMenuOpen
                        ? "border-slate-300/80 dark:border-slate-700/80 bg-white/95 dark:bg-slate-950/95 shadow-xl backdrop-blur-md"
                        : "border-slate-200/60 dark:border-slate-800/60 bg-white/60 dark:bg-slate-900/60 shadow-lg backdrop-blur-sm"
                        }`}
                >
                    <div className="flex h-14 items-center justify-between px-6">
                        {/* Logo */}
                        <motion.div variants={itemVariants}>
                            <Link
                                href="/"
                                className="flex items-center gap-2 group relative z-50"
                                onClick={handleHomeClick}
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="bg-linear-to-br from-slate-800 to-slate-950 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 p-1.5 rounded-full shadow-md"
                                >
                                    <Scale className="h-4 w-4" />
                                </motion.div>
                                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                                    AvocatDemo
                                </span>
                            </Link>
                        </motion.div>

                        <motion.nav
                            variants={itemVariants}
                            className="hidden md:flex items-center gap-1"
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {menuItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => setHoveredId(item.id)}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={item.id === "" ? handleHomeClick : undefined}
                                            className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                                                ? "text-slate-900 dark:text-white"
                                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>

                                        {hoveredId === item.id && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                }}
                                            />
                                        )}

                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-active-dot"
                                                className="absolute -bottom-1 left-0 right-0 flex justify-center"
                                            >
                                                <div className="h-1 w-1 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                            </motion.div>
                                        )}
                                    </div>
                                );
                            })}
                        </motion.nav>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3"
                        >
                            <ThemeToggle />

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden sm:block"
                            >
                                <Link
                                    href="#contact"
                                    className={`inline-flex h-9 items-center justify-center rounded-full px-5 text-sm font-medium text-white shadow-lg transition-all ${activeSection === 'contact'
                                        ? "bg-blue-600 ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-slate-900 shadow-blue-500/25"
                                        : "bg-linear-to-r from-slate-900 to-slate-700 dark:from-blue-600 dark:to-blue-700 hover:from-slate-800 hover:to-slate-600 dark:hover:from-blue-700 dark:hover:to-blue-800"
                                        }`}
                                >
                                    <span>Contact</span>
                                    <ChevronRight className="ml-1 h-3 w-3" />
                                </Link>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={{
                                    closed: { opacity: 0, height: 0 },
                                    open: { opacity: 1, height: "auto" },
                                }}
                                className="md:hidden overflow-hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-b-3xl"
                            >
                                <div className="px-6 py-4 space-y-2">
                                    {menuItems.map((item) => (
                                        <motion.div
                                            key={item.name}
                                            variants={{
                                                closed: { opacity: 0, x: -20 },
                                                open: { opacity: 1, x: 0 },
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={item.id === "" ? handleHomeClick : () => setIsMenuOpen(false)}
                                                className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${activeSection === item.id
                                                    ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white translate-x-2"
                                                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:translate-x-1"
                                                    }`}
                                            >
                                                {item.name}
                                                {activeSection === item.id && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        variants={{
                                            closed: { opacity: 0, x: -20 },
                                            open: { opacity: 1, x: 0 },
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href="#contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-center w-full mt-4 h-12 rounded-xl bg-linear-to-r from-slate-900 to-slate-700 dark:from-blue-600 dark:to-blue-700 text-white font-medium shadow-lg"
                                        >
                                            Consultă Acum
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.header>
            </motion.div>
        </>
    );
}