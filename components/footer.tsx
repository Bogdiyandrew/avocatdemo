"use client";

import Link from "next/link";
import { Scale, Mail, Phone, MapPin, Facebook, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 border-t border-slate-800 pt-16 pb-8 overflow-hidden font-sans">
            <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-white text-slate-950 p-1.5 rounded-lg">
                                <Scale className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">AvocatDemo</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Oferim consultanță juridică strategică și reprezentare în instanță cu un singur scop: protejarea intereselor tale legitime.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={Facebook} />
                            <SocialLink href="#" icon={Linkedin} />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Navigație</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/">Acasă</FooterLink>
                            <FooterLink href="#despre">Despre noi</FooterLink>
                            <FooterLink href="#servicii">Arii de practică</FooterLink>
                            <FooterLink href="/blog">Blog juridic</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Expertiză</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/servicii#penal">Drept Penal</FooterLink>
                            <FooterLink href="/servicii#familie">Dreptul Familiei</FooterLink>
                            <FooterLink href="/servicii#comercial">Drept Comercial</FooterLink>
                            <FooterLink href="/servicii#imobiliare">Imobiliare</FooterLink>
                            <FooterLink href="/servicii#daune">Malpraxis & Daune</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <span>
                                    Strada Justiției Nr. 10,<br />
                                    Sector 1, București
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <a href="tel:+40700000000" className="hover:text-white transition-colors">
                                    +40 700 000 000
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                <a href="mailto:contact@avocatdemo.ro" className="hover:text-white transition-colors">
                                    contact@avocatdemo.ro
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <span className="block text-xs text-slate-500 mb-2">Program:</span>
                            <p className="text-slate-300 text-sm">Luni - Vineri: 09:00 - 18:00</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} AvocatDemo. Toate drepturile rezervate.</p>
                    <div className="flex gap-6">
                        <Link href="/termeni" className="hover:text-slate-300 transition-colors">
                            Termeni și Condiții
                        </Link>
                        <Link href="/confidentialitate" className="hover:text-slate-300 transition-colors">
                            Politica de Confidențialitate
                        </Link>
                        <Link href="/cookies" className="hover:text-slate-300 transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="group flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
            >
                <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                {children}
            </Link>
        </li>
    );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon className="w-4 h-4" />
        </a>
    );
}