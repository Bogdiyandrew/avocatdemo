import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section"; // <--- Import Nou

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 transition-colors duration-300">

      <Header />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection /> {/* <--- Adăugat la final */}
      </main>

      <Footer />

    </div>
  );
}