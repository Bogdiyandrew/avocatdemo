import { Gavel, Users, Briefcase, Scale, FileText, ShieldAlert } from "lucide-react";

const services = [
    {
        title: "Drept Penal",
        description: "Asistență imediată în cazuri de reținere, arestare sau anchete penale. Strategii de apărare solide în fața autorităților.",
        icon: Gavel,
    },
    {
        title: "Dreptul Familiei",
        description: "Divorțuri, partaje, custodie și pensie alimentară. Abordare discretă și empatică pentru situații sensibile.",
        icon: Users,
    },
    {
        title: "Drept Comercial",
        description: "Consultanță pentru afaceri, redactare contracte, litigii comerciale și recuperări de creanțe pentru companii.",
        icon: Briefcase,
    },
    {
        title: "Litigii Civile",
        description: "Reprezentare în instanță pentru revendicări imobiliare, despăgubiri, succesiuni și dispute contractuale.",
        icon: Scale,
    },
    {
        title: "Drept Imobiliar",
        description: "Verificare acte proprietate (due diligence), asistență la vânzare-cumpărare și litigii funciare complexe.",
        icon: FileText,
    },
    {
        title: "Malpraxis & Daune",
        description: "Obținerea de despăgubiri corecte pentru victimele accidentelor rutiere, de muncă sau erorilor medicale.",
        icon: ShieldAlert,
    },
];

export function ServicesSection() {
    return (
        <section id="servicii" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">

                {/* Titlu Secțiune */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                        Arii de Practică
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
                        Soluții Juridice Complete
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Nu suntem doar avocați, suntem partenerii tăi strategici. Acoperim cele mai importante arii ale dreptului pentru a-ți proteja interesele.
                    </p>
                </div>

                {/* Grilă Servicii */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}