import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { ServicesSection } from "@/components/services-section"
import { TechStack } from "@/components/tech-stack"
import { AboutSection } from "@/components/about-section"
import { LanguagesSection } from "@/components/languages-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"

export default function Home() {
  return (
    <main className="relative min-h-screen gradient-bg">
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <ProjectsGrid />
      <ServicesSection />
      <TechStack />
      <AboutSection />
      <LanguagesSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
