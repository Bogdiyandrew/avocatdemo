"use client";

import Link from "next/link";
import { Scale } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 border-t border-slate-800 pt-20 pb-16 overflow-hidden font-sans text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Disclaimer Block */}
                <div className="max-w-xl mx-auto mb-12">
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                        Atenție
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Acesta este un proiect demonstrativ pentru a evidenția abilitățile de design și dezvoltare.
                        Nu reprezintă un <span className="text-slate-200 font-medium">cabinet real</span> și nu reflectă întregul potențial al serviciilor oferite de <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors border-b border-blue-400/30 hover:border-blue-400 pb-0.5">digitura.ro</a>.
                    </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-px bg-slate-800 mb-12" />

                {/* Brand Identity */}
                <Link href="/" className="flex items-center gap-3 mb-8 group">
                    <div className="bg-white text-slate-950 p-2.5 rounded-xl shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        <Scale className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold text-white tracking-tight">AvocatDemo</span>
                </Link>

                {/* Copyright & Credits */}
                <div className="space-y-3 text-xs text-slate-500">
                    <p>
                        © {currentYear} AvocatDemo. Toate drepturile rezervate.
                    </p>
                    <p className="font-medium">
                        Un demo creat cu mândrie de către <a href="https://digitura.ro" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">digitura.ro</a>
                    </p>
                </div>

            </div>
        </footer>
    );
}