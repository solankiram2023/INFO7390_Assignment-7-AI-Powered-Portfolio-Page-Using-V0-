import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#3A5199]/10 to-transparent py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex flex-col items-start gap-4 md:max-w-[60%]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-[#3A5199]">Ramy Solanki</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
              Software Engineer with 4+ years of experience in scalable backend systems, data pipelines, and AI-driven
              applications
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button className="bg-[#3A5199] hover:bg-[#3A5199]/90" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://raw.githubusercontent.com/solankiram2023/Ramy-CV/main/Ramy%20SolankiCV%20(3).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#3A5199] shadow-lg flex-shrink-0">
            <Image src="/images/ramy-profile.jpeg" alt="Ramy Solanki" fill className="object-cover" priority />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
