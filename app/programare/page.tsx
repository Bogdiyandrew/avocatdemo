"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin, Video, CheckCircle2, ChevronRight, ChevronLeft,
    ShieldAlert, MessageCircle, Phone, Smartphone, ArrowRight
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
    {
        id: "flash",
        title: "Apel rapid",
        subtitle: "Strict telefonic • Fără acte",
        description: "Ai o întrebare simplă? Primești răspunsul pe loc.",
        price: 100,
        icon: Phone,
        color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
        border: "hover:border-emerald-500/50",
        popular: false
    },
    {
        id: "async",
        title: "Analiză WhatsApp",
        subtitle: "Fără întâlnire • Răspuns 24h",
        description: "Îmi trimiți poze cu actele și vocal. Revin cu soluția tot pe WhatsApp.",
        price: 150,
        icon: MessageCircle,
        color: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400",
        border: "hover:border-green-500/50",
        popular: true
    },
    {
        id: "focus",
        title: "Sesiune focus",
        subtitle: "Video Call • 1 Document",
        description: "Analizăm o citație sau un contract. Discuție concretă.",
        price: 250,
        icon: Video,
        color: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
        border: "hover:border-blue-500/50",
        popular: false
    },
    {
        id: "complex",
        title: "Dosar complex",
        subtitle: "La cabinet / Video • Complex",
        description: "Situații grave: penal, partaj, strategii de proces.",
        price: 450,
        icon: ShieldAlert,
        color: "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400",
        border: "hover:border-purple-500/50",
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
        title: "La cabinet",
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

    const selectedService = SERVICES.find(s => s.id === formData.service);

    useEffect(() => {
        if (formData.service === 'async' || formData.service === 'flash') {
            setFormData(prev => ({ ...prev, location: 'remote' }));
        }
    }, [formData.service]);

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
        <main className="min-h-screen bg-background text-foreground pt-32 pb-12 px-4 font-sans transition-colors duration-300">
            <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none 
                bg-blue-400/20 blur-[120px] dark:bg-blue-600/10 dark:blur-[100px]"
            />

            <div className="max-w-4xl mx-auto mb-10 text-center relative z-10">
                <Link href="/" className="group inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 dark:hover:text-white mb-6 transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ÎNAPOI LA SITE
                </Link>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-foreground"
                >
                    Programare <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">rapidǎ</span>
                </motion.h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-medium">
                    Consultanță juridică modernă. Fără birocrație inutilă.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`
                    max-w-4xl mx-auto rounded-3xl p-6 md:p-10 relative z-10 
                    transition-all duration-300
                    bg-white/80 border border-slate-200 shadow-2xl shadow-slate-200/50 backdrop-blur-xl
                    dark:bg-white/5 dark:border-white/10 dark:shadow-black/50
                `}
            >
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {SERVICES.map((srv) => (
                                    <button
                                        key={srv.id}
                                        onClick={() => handleServiceSelect(srv.id)}
                                        className={`group relative flex flex-col p-6 rounded-2xl text-left transition-all duration-300 hover:scale-[1.01]
                                            border border-slate-100 bg-white hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5
                                            dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:shadow-blue-500/10
                                            ${srv.border}
                                        `}
                                    >
                                        {srv.popular && (
                                            <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg shadow-blue-500/30">
                                                POPULAR
                                            </div>
                                        )}

                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${srv.color}`}>
                                            <srv.icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">{srv.title}</h3>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{srv.subtitle}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">{srv.description}</p>

                                        <div className="w-full flex items-center justify-between border-t border-slate-100 dark:border-white/10 pt-4 mt-auto">
                                            <span className="text-2xl font-bold text-slate-900 dark:text-white">{srv.price} <span className="text-sm text-slate-500 font-normal">RON</span></span>
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Unde ne vedem?</h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                {LOCATIONS.map((loc) => (
                                    <button
                                        key={loc.id}
                                        onClick={() => {
                                            setFormData({ ...formData, location: loc.id });
                                            handleNext();
                                        }}
                                        className="group relative flex flex-col items-center justify-center p-10 rounded-2xl border transition-all hover:scale-[1.02]
                                            bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl
                                            dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-blue-500/30
                                        "
                                    >
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm
                                            bg-white text-blue-600
                                            dark:bg-slate-800 dark:text-blue-400
                                        ">
                                            <loc.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-foreground">{loc.title}</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-[200px]">{loc.description}</p>
                                    </button>
                                ))}
                            </div>

                            <button onClick={handleBack} className="mx-auto mt-10 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-foreground transition-colors">
                                <ChevronLeft className="w-4 h-4" /> Înapoi la servicii
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-foreground">Alege un interval</h2>
                                <div className="text-xs font-bold px-3 py-1 rounded-full 
                                    bg-blue-100 text-blue-700 border-blue-200
                                    dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/20 border">
                                    Ora României
                                </div>
                            </div>

                            <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                                {getNextDays().map((date, idx) => {
                                    const isSelected = formData.date?.toDateString() === date.toDateString();
                                    return (
                                        <button key={idx} onClick={() => setFormData({ ...formData, date: date, time: "" })}
                                            className={`min-w-[80px] p-4 rounded-2xl border transition-all flex flex-col items-center justify-center gap-1
                                            ${isSelected
                                                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30"
                                                    : "bg-slate-50 border-slate-200 text-slate-500 hover:border-blue-400 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/30"
                                                }`}>
                                            <span className="text-xs font-bold uppercase opacity-80">{date.toLocaleDateString('ro-RO', { weekday: 'short' })}</span>
                                            <span className="text-2xl font-black">{date.getDate()}</span>
                                        </button>
                                    )
                                })}
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
                                {formData.date ? TIME_SLOTS.map((time) => (
                                    <button key={time} onClick={() => setFormData({ ...formData, time: time })}
                                        className={`py-3 rounded-xl text-sm font-bold border transition-all
                                        ${formData.time === time
                                                ? "bg-slate-900 text-white border-slate-900 scale-105 shadow-xl dark:bg-white dark:text-black dark:border-white"
                                                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-blue-400 dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
                                            }`}>
                                        {time}
                                    </button>
                                )) : (
                                    <div className="col-span-4 text-center text-slate-400 py-8 italic">Selectează o dată mai întâi</div>
                                )}
                            </div>

                            <div className="flex justify-between items-center border-t border-slate-200 dark:border-white/10 pt-6">
                                <button onClick={handleBack} className="text-sm font-bold text-slate-500 hover:text-foreground transition-colors">Înapoi</button>
                                <button disabled={!formData.date || !formData.time} onClick={() => handleNext()}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:grayscale flex items-center gap-2 shadow-lg shadow-blue-600/20">
                                    Continuă <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                            <div className="rounded-2xl p-6 mb-8 flex items-center justify-between
                                bg-slate-100 border border-slate-200
                                dark:bg-linear-to-r dark:from-slate-800 dark:to-slate-900 dark:border-white/10
                            ">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-white dark:bg-white/10 shadow-sm">
                                        {selectedService?.icon && <selectedService.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg text-foreground">{selectedService?.title}</div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">
                                            {selectedService?.id === 'async' ? 'Analiză Asincronă' : `${formData.date?.toLocaleDateString()} • ${formData.time}`}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-2xl font-black text-foreground">{selectedService?.price} <span className="text-sm font-medium text-slate-500">RON</span></div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Nume Complet</label>
                                        <input required
                                            className="w-full p-4 rounded-xl outline-none transition-colors
                                                bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white
                                                dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:bg-white/10 dark:placeholder:text-slate-600"
                                            placeholder="ex: Ion Popescu"
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase ml-1">Telefon</label>
                                        <input required
                                            className="w-full p-4 rounded-xl outline-none transition-colors
                                                bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white
                                                dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:bg-white/10 dark:placeholder:text-slate-600"
                                            placeholder="07xx..."
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Detalii</label>
                                    <textarea required
                                        className="w-full p-4 rounded-xl outline-none transition-colors min-h-[120px]
                                            bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white
                                            dark:bg-white/5 dark:border-white/10 dark:text-white dark:focus:bg-white/10 dark:placeholder:text-slate-600"
                                        placeholder={selectedService?.id === 'async' ? "Pe scurt, despre ce este vorba? (Vei primi nr. de WhatsApp după plată)" : "Descrie situația pe scurt..."}
                                        onChange={e => setFormData({ ...formData, details: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-slate-900/10 hover:scale-[1.01] transition-all mt-4 flex justify-center items-center gap-2
                                    dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-blue-600/20"
                                >
                                    {isSubmitting ? "Se procesează..." : `Plătește și Confirmă`}
                                </button>

                                <button type="button" onClick={handleBack} className="w-full text-center text-slate-400 hover:text-foreground text-xs font-bold uppercase tracking-widest mt-2">Modifică datele</button>
                            </form>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 
                                bg-green-100 text-green-600 border border-green-200
                                dark:bg-green-500/20 dark:text-green-500 dark:border-green-500/20 dark:shadow-lg dark:shadow-green-500/20
                            ">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h2 className="text-4xl font-black mb-4 text-foreground">Gata! Ești programat.</h2>
                            <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
                                {selectedService?.id === 'async'
                                    ? "Verifică emailul. Ai primit instrucțiunile pentru a trimite documentele pe WhatsApp."
                                    : "Rezervarea e confirmată. Detaliile au fost trimise pe email."}
                            </p>
                            <Link href="/" className="px-8 py-3 rounded-xl font-bold transition-colors
                                bg-slate-900 text-white hover:bg-slate-800
                                dark:bg-white dark:text-black dark:hover:bg-slate-200
                            ">
                                Înapoi la site
                            </Link>
                        </motion.div>
                    )}

                </AnimatePresence>
            </motion.div>
        </main>
    );
}