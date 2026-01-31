// app/[slug]/page.tsx
import { clients, defaultClient } from "@/lib/clients";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { notFound } from "next/navigation";

// Această funcție generează paginile statice la build (pentru viteză maximă)
export async function generateStaticParams() {
  return Object.keys(clients).map((slug) => ({
    slug: slug,
  }));
}

export default function ClientPage({ params }: { params: { slug: string } }) {
  // Căutăm clientul în baza de date
  const clientData = clients[params.slug];

  // Dacă ai scris un nume greșit (ex: /site.ro/nimeni), arătăm default sau 404
  if (!clientData) {
     // Poți folosi 'return notFound()' dacă vrei eroare 404
     // Sau fallback pe defaultClient ca să nu pierzi traficul:
     return (
        <main>
            <HeroSection data={defaultClient} />
            <ServicesSection />
            <AboutSection />
            <ContactSection /> 
            {/* ContactSection trebuie modificat și el să accepte data, altfel scoate-l sau lasă-l static */}
        </main>
     );
  }

  return (
    <main>
      <HeroSection data={clientData} />
      <ServicesSection />
      <AboutSection />
      {/* Dacă ai modificat și ContactSection să primească props: */}
      {/* <ContactSection data={clientData} /> */} 
      <ContactSection /> 
    </main>
  );
}