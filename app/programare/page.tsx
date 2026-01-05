"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin, Video, CheckCircle2, ChevronRight, ChevronLeft,
    ShieldAlert, MessageCircle, Phone, Smartphone, ArrowRight
} from "lucide-react";
import Link from "next/link";

// --- CONFIGURARE SERVICII ---
const SERVICES = [
    {
        id: "flash",
        title: "Flash Call",
        subtitle: "Strict telefonic • Fără acte",
        description: "Ai o întrebare simplă? Primești răspunsul pe loc.",
        price: 100,
        icon: Phone,
        color: "from-emerald-400/20 to-emerald-600/20 text-emerald-400",
        border: "group-hover:border-emerald-500/50",
        popular: false
    },
    {
        id: "async",
        title: "Analiză WhatsApp",
        subtitle: "Fără întâlnire • Răspuns 24h",
        description: "Îmi trimiți poze cu actele și vocal. Revin cu soluția tot pe WhatsApp.",
        price: 150,
        icon: MessageCircle,
        color: "from-green-400/20 to-green-600/20 text-green-400",
        border: "group-hover:border-green-500/50",
        popular: true
    },
    {
        id: "focus",
        title: "Sesiune Focus",
        subtitle: "Video Call • 1 Document",
        description: "Analizăm o citație sau un contract. Discuție concretă.",
        price: 250,
        icon: Video,
        color: "from-blue-400/20 to-blue-600/20 text-blue-400",
        border: "group-hover:border-blue-500/50",
        popular: false
    },
    {
        id: "complex",
        title: "Deep Dive / Dosar",
        subtitle: "La Cabinet / Video • Complex",
        description: "Situații grave: penal, partaj, strategii de proces.",
        price: 450,
        icon: ShieldAlert,
        color: "from-purple-400/20 to-purple-600/20 text-purple-400",
        border: "group-hover:border-purple-500/50",
        popular: false
    }
];

const LOCATIONS = [
    {
        id: "remote",
        title: "Digital / Telefon",
        description: "Eficiență maximă. Oriunde ai fi.",
        icon: Smartphone,
        depositRule: "full"
    },
    {
        id: "office",
        title: "La Cabinet",
        description: "Str. Justiției 1, București.",
        icon: MapPin,
        depositRule: "deposit",
        depositAmount: 100
    }
];

const TIME_SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

const getNextDays = () => {
    const days = [];
    const today = new Date();
    let count = 0;
    while (days.length < 5) {
        const date = new Date(today);
        date.setDate(today.getDate() + count);
        if (date.getDay() !== 0 && date.getDay() !== 6) days.push(date);
        count++;
    }
    return days;
};

export default function ProgramarePage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: "",
        location: "",
        date: null as Date | null,
        time: "",
        name: "",
        phone: "",
        email: "",
        details: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Helpers
    const selectedService = SERVICES.find(s => s.id === formData.service);

    // Auto-select location
    useEffect(() => {
        if (formData.service === 'async' || formData.service === 'flash') {
            setFormData(prev => ({ ...prev, location: 'remote' }));
        }
    }, [formData.service]);

    // History API
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            setStep(event.state?.step || 1);
        };
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const handleNext = (overrideStep?: number) => {
        const nextStep = overrideStep || step + 1;
        setStep(nextStep);
        window.history.pushState({ step: nextStep }, "", `?step=${nextStep}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => window.history.back();

    const handleServiceSelect = (serviceId: string) => {
        setFormData({ ...formData, service: serviceId });
        if (serviceId === 'async') {
            const targetStep = 4;
            setStep(targetStep);
            window.history.pushState({ step: targetStep }, "", `?step=${targetStep}`);
        } else {
            handleNext();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStep(5);
        window.history.pushState({ step: 5 }, "", `?step=5`);
        setIsSubmitting(false);
    };

    return (
        // Padding mare sus (pt-32) pentru a evita header-ul
        <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-12 px-4 font-sans selection:bg-blue-500/30">

            {/* BACKGROUND GLOW EFFECTS */}
            <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            {/* HEADER TEXT */}
            <div className="max-w-4xl mx-auto mb-10 text-center relative z-10">
                <Link href="/" className="group inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white mb-6 transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ÎNAPOI LA SITE
                </Link>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black mb-3 tracking-tight"
                >
                    Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Fast-Track</span>
                </motion.h1>
                <p className="text-slate-400 text-sm md:text-base font-medium">
                    Consultanță juridică modernă. Fără birocrație inutilă.
                </p>
            </div>

            {/* MAIN CARD CONTAINER */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 relative z-10 shadow-2xl shadow-black/50"
            >
                <AnimatePresence mode="wait">

                    {/* --- PASUL 1: SERVICII --- */}
                    {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {SERVICES.map((srv) => (
                                    <button
                                        key={srv.id}
                                        onClick={() => handleServiceSelect(srv.id)}
                                        className={`group relative flex flex-col p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 text-left hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/10 ${srv.border}`}
                                    >
                                        {srv.popular && (
                                            <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg shadow-blue-500/40">
                                                POPULAR
                                            </div>
                                        )}

                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${srv.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                            <srv.icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-1">{srv.title}</h3>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{srv.subtitle}</p>
                                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{srv.description}</p>

                                        <div className="w-full flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                                            <span className="text-2xl font-bold">{srv.price} <span className="text-sm text-slate-500 font-normal">RON</span></span>
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* --- PASUL 2: LOCAȚIE (GRID ACUM!) --- */}
                    {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h2 className="text-2xl font-bold mb-8 text-center">Unde ne vedem?</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {LOCATIONS.map((loc) => (
                                    <button
                                        key={loc.id}
                                        onClick={() => {
                                            setFormData({ ...formData, location: loc.id });
                                            handleNext();
                                        }}
                                        className="group relative flex flex-col items-center justify-center p-10 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-[1.02] hover:border-blue-500/30"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                                            <loc.icon className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{loc.title}</h3>
                                        <p className="text-sm text-slate-400 text-center max-w-[200px]">{loc.description}</p>
                                    </button>
                                ))}
                            </div>

                            <button onClick={handleBack} className="mx-auto mt-10 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors">
                                <ChevronLeft className="w-4 h-4" /> Înapoi la servicii
                            </button>
                        </motion.div>
                    )}

                    {/* --- PASUL 3: DATA --- */}
                    {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold">Alege un interval</h2>
                                <div className="text-xs font-bold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                                    Ora României
                                </div>
                            </div>

                            {/* Zile */}
                            <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                                {getNextDays().map((date, idx) => {
                                    const isSelected = formData.date?.toDateString() === date.toDateString();
                                    return (
                                        <button key={idx} onClick={() => setFormData({ ...formData, date: date, time: "" })}
                                            className={`min-w-[80px] p-4 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1
                                            ${isSelected
                                                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/40"
                                                    : "bg-white/5 border-white/10 hover:border-white/30 text-slate-300"
                                                }`}>
                                            <span className="text-xs font-bold uppercase opacity-60">{date.toLocaleDateString('ro-RO', { weekday: 'short' })}</span>
                                            <span className="text-2xl font-black">{date.getDate()}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Ore */}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
                                {formData.date ? TIME_SLOTS.map((time) => (
                                    <button key={time} onClick={() => setFormData({ ...formData, time: time })}
                                        className={`py-3 rounded-xl text-sm font-bold border transition-all
                                        ${formData.time === time
                                                ? "bg-white text-black border-white scale-105 shadow-xl"
                                                : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/30"
                                            }`}>
                                        {time}
                                    </button>
                                )) : (
                                    <div className="col-span-4 text-center text-slate-500 py-8 italic">Selectează o dată mai întâi</div>
                                )}
                            </div>

                            <div className="flex justify-between items-center border-t border-white/10 pt-6">
                                <button onClick={handleBack} className="text-sm font-bold text-slate-500 hover:text-white transition-colors">Înapoi</button>
                                <button disabled={!formData.date || !formData.time} onClick={() => handleNext()}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:grayscale flex items-center gap-2 shadow-lg shadow-blue-600/20">
                                    Continuă <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* --- PASUL 4: FORMULAR FINAL --- */}
                    {step === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 mb-8 border border-white/10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/10 rounded-xl">
                                        {selectedService?.icon && <selectedService.icon className="w-6 h-6 text-blue-400" />}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{selectedService?.title}</div>
                                        <div className="text-sm text-slate-400">
                                            {selectedService?.id === 'async' ? 'Analiză Asincronă' : `${formData.date?.toLocaleDateString()} • ${formData.time}`}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-2xl font-black">{selectedService?.price} <span className="text-sm font-medium text-slate-500">RON</span></div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nume Complet</label>
                                        <input required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-colors text-white placeholder:text-slate-600" placeholder="ex: Ion Popescu" onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Telefon</label>
                                        <input required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-colors text-white placeholder:text-slate-600" placeholder="07xx..." onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Detalii</label>
                                    <textarea required className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:bg-white/10 outline-none transition-colors text-white placeholder:text-slate-600 min-h-[120px]"
                                        placeholder={selectedService?.id === 'async' ? "Pe scurt, despre ce este vorba? (Vei primi nr. de WhatsApp după plată)" : "Descrie situația pe scurt..."}
                                        onChange={e => setFormData({ ...formData, details: e.target.value })} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:scale-[1.01] transition-all mt-4 flex justify-center items-center gap-2"
                                >
                                    {isSubmitting ? "Se procesează..." : `Plătește și Confirmă`}
                                </button>

                                <button type="button" onClick={handleBack} className="w-full text-center text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest mt-2">Modifică datele</button>
                            </form>
                        </motion.div>
                    )}

                    {/* --- PASUL 5: SUCCESS --- */}
                    {step === 5 && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                            <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20 border border-green-500/20">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h2 className="text-4xl font-black mb-4">Gata! Ești programat.</h2>
                            <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
                                {selectedService?.id === 'async'
                                    ? "Verifică emailul. Ai primit instrucțiunile pentru a trimite documentele pe WhatsApp."
                                    : "Rezervarea e confirmată. Detaliile au fost trimise pe email."}
                            </p>
                            <Link href="/" className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                                Înapoi la site
                            </Link>
                        </motion.div>
                    )}

                </AnimatePresence>
            </motion.div>
        </main>
    );
}