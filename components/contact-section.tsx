"use client"

import { useState } from "react";
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle2, FormIcon } from "lucide-react";

export function ContactSection() {
    const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulare trimitere
        setFormStatus("success");
        setTimeout(() => setFormStatus("idle"), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Coloana Stânga: Info & Contact Direct */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
                                Hai să discutăm cazul tău
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Primul pas către rezolvarea problemei tale este o discuție deschisă. Răspundem cu promptitudine la orice solicitare.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Card Telefon */}
                            <a href="tel:0722xxxxxx" className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Sună-ne acum (Urgențe)</p>
                                    <span className="text-xl font-bold text-slate-900 dark:text-white">0722xxxxxx</span>
                                </div>
                            </a>

                            {/* Card Email */}
                            <a href="mailto:contact@avocatdemo.ro" className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Trimite un email</p>
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">contact@avocatdemo.ro</span>
                                </div>
                            </a>

                            {/* Card Adresă */}
                            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Sediu Central</p>
                                    <span className="text-lg font-bold text-slate-900 dark:text-white">Strada Justiției Nr. 1, București</span>
                                </div>
                            </div>
                        </div>

                        {/* Notă de confidențialitate */}
                        <div className="flex gap-3 items-start p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-800 dark:text-blue-300">
                                Toate discuțiile sunt supuse secretului profesional și sunt 100% confidențiale, indiferent dacă alegeți sau nu să ne angajați ulterior.
                            </p>
                        </div>
                    </div>

                    {/* Coloana Dreapta: Formularul */}
                    <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="nume" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Nume Complet</label>
                                    <input required id="nume" placeholder="Ion Popescu" className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="telefon" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Telefon</label>
                                    <input required id="telefon" type="tel" placeholder="07xx xxx xxx" className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="tip-problema" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Tipul de Problemă</label>
                                <div className="relative">
                                    {/* FIX AICI: am adaugat defaultValue="" și am scos selected de pe option */}
                                    <select
                                        id="tip-problema"
                                        defaultValue=""
                                        className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled>Alegeți domeniul...</option>
                                        <option value="penal">Drept Penal (Urgență)</option>
                                        <option value="familie">Divorț / Familie</option>
                                        <option value="comercial">Comercial / Firme</option>
                                        <option value="civil">Litigii Civile / Imobiliare</option>
                                        <option value="altul">Altă problemă</option>
                                    </select>

                                    {/* Săgeată custom pentru select */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mesaj" className="text-sm font-semibold text-slate-900 dark:text-slate-200">Detalii pe scurt</label>
                                <textarea required id="mesaj" placeholder="Descrieți situația în câteva cuvinte..." className="w-full min-h-[120px] p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none dark:text-white" />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                            >
                                {formStatus === "success" ? (
                                    <>
                                        <CheckCircle2 className="w-5 h-5" />
                                        Mesaj Trimis!
                                    </>
                                ) : (
                                    <>
                                        <FormIcon className="w-5 h-5" />
                                        Trimite
                                    </>
                                )}
                            </button>

                            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                                Prin trimiterea acestui formular sunteți de acord cu politica noastră de prelucrare a datelor (GDPR).
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}