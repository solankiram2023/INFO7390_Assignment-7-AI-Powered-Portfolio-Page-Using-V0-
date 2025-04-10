import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24" id="contact">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Get In <span className="text-[#3A5199]">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3A5199]/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-[#3A5199]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:solanki.ram@northeastern.edu"
                      className="text-lg hover:text-[#3A5199] transition-colors"
                    >
                      solanki.ram@northeastern.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#3A5199]/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-[#3A5199]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+12679871084" className="text-lg hover:text-[#3A5199] transition-colors">
                      +1 (267) 987-1084
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-[#3A5199]/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#3A5199]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-lg">Boston, Massachusetts</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Connect with me on social media</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://github.com/solankiram2023"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href="https://www.linkedin.com/in/ramysolanki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
