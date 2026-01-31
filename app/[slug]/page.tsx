import { clients, defaultClient } from "@/lib/clients";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";


// Generăm paginile statice pentru viteză
export async function generateStaticParams() {
  return Object.keys(clients).map((slug) => ({
    slug: slug,
  }));
}

// DEFINIM TIPUL PENTRU PROPS (Next.js 15+ cere Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ClientPage({ params }: Props) {
  // 1. AȘTEPTĂM PARAMETRII (Fix-ul critic)
  const { slug } = await params;

  // 2. Căutăm clientul. Dacă nu există, folosim default.
  const clientData = clients[slug] || defaultClient;

  return (
    <main>
      <HeroSection data={clientData} />
      <ServicesSection />
      <AboutSection />
      {/* Contact Section primește date statice momentan, dar e ok */}
        <ContactSection data={clientData} />        </main>
  );
}