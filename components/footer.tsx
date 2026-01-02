import { Scale } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1 rounded-full">
                        <Scale className="h-4 w-4" />
                    </div>
                    <span className="text-base font-bold text-slate-900 dark:text-white">AvocatDemo</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-right">
                    © {new Date().getFullYear()} AvocatDemo. Toate drepturile rezervate.
                </p>
            </div>
        </footer>
    );
}