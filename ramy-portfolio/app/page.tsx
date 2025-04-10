import HeroSection from "@/components/hero-section"
import EducationSection from "@/components/education-section"
import WorkExperienceSection from "@/components/work-experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import PublicationsSection from "@/components/publications-section"
import AwardsSection from "@/components/awards-section"
import CVSection from "@/components/cv-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CVSection />
      <WorkExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <PublicationsSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
