// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { defaultClient } from "@/lib/clients"; // Importam default

export default function Home() {
  return (
    <>
      <HeroSection data={defaultClient} />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}