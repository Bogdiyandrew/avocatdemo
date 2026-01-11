"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Ghid complet: Cum să te pregătești pentru un partaj judiciar",
        excerpt: "Divorțul este o etapă dificilă, dar partajul bunurilor nu trebuie să fie o luptă continuă. Află care sunt pașii legali, ce acte sunt necesare și cum poți accelera procesul în instanță.",
        date: "15 Oct 2023",
        category: "Dreptul Familiei",
        author: "Av. Mihai Popescu",
        readTime: "6 min",
        image: "/services/2.jpeg",
        slug: "ghid-partaj-judiciar"
    },
    {
        id: 2,
        title: "Modificări fiscale 2024: Ce trebuie să știe antreprenorii",
        excerpt: "Noul an aduce schimbări majore pentru microîntreprinderi și PFA-uri. Analizăm impactul noilor plafoane fiscale și oferim soluții pentru optimizarea costurilor legale.",
        date: "02 Ian 2024",
        category: "Drept Comercial",
        author: "Av. Elena Ionescu",
        readTime: "8 min",
        image: "/photos/hero2.jpeg",
        slug: "modificari-fiscale-2024"
    },
    {
        id: 3,
        title: "Ce faci în cazul unui accident rutier cu vătămări?",
        excerpt: "Primii pași sunt critici pentru obținerea despăgubirilor corecte. Află cum să documentezi incidentul și de ce ai nevoie de un avocat specializat în daune.",
        date: "28 Feb 2024",
        category: "Daune & Asigurări",
        author: "Av. Andrei Radu",
        readTime: "5 min",
        image: "/services/6.jpeg",
        slug: "accident-rutier-vatamari"
    },
    {
        id: 4,
        title: "Executarea silită: Cum poți contesta o poprire abuzivă",
        excerpt: "Ai primit o somație de plată sau ai conturile blocate? Există termene stricte în care poți formula o contestație la executare. Iată ce prevede Codul de Procedură Civilă.",
        date: "10 Mar 2024",
        category: "Litigii Civile",
        author: "Av. Mihai Popescu",
        readTime: "7 min",
        image: "/services/4.jpeg",
        slug: "contestatie-executare-silita"
    },
    {
        id: 5,
        title: "Înființare ONG vs SRL: Ce formă juridică ți se potrivește?",
        excerpt: "Dorești să desfășori o activitate cu impact social? Comparăm avantajele și dezavantajele asociațiilor față de societățile comerciale din perspectivă legală și fiscală.",
        date: "22 Mar 2024",
        category: "Drept Societar",
        author: "Av. Elena Ionescu",
        readTime: "10 min",
        image: "/services/3.jpeg",
        slug: "ong-vs-srl"
    },
    {
        id: 6,
        title: "Drepturile angajatului în cazul concedierii colective",
        excerpt: "Restructurările de posturi trebuie să respecte o procedură riguroasă. Află ce salarii compensatorii ți se cuvin și cum poți ataca decizia în instanță.",
        date: "05 Apr 2024",
        category: "Dreptul Muncii",
        author: "Av. Andrei Radu",
        readTime: "4 min",
        image: "/services/1.jpeg",
        slug: "drepturi-angajat-concediere"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-24 pb-20">
            <section className="container mx-auto px-4 md:px-6 mb-16 text-center max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // NOTA: opacity-0 previne flash-ul initial
                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 opacity-0"
                >
                    Blog juridic şi <span className="text-blue-600 dark:text-blue-400">noutăți</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    // NOTA: opacity-0 previne flash-ul initial
                    className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed opacity-0"
                >
                    Analize legislative, studii de caz și sfaturi practice explicate pe înțelesul tuturor.
                    Rămâi informat pentru a-ți proteja mai bine drepturile.
                </motion.p>
            </section>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            // NOTA: opacity-0 previne flash-ul initial
                            className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 transition-all duration-300 opacity-0"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </div>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                                            {post.author}
                                        </span>
                                    </div>

                                    <Link href={`/blog/${post.slug}`}>
                                        <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-0 h-auto hover:no-underline font-semibold group/btn">
                                            Citește tot
                                            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}