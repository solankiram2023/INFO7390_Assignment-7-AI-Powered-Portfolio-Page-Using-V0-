import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

export default function CVSection() {
  return (
    <section className="py-16 md:py-24" id="cv">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          My <span className="text-[#3A5199]">CV</span>
        </h2>

        <Card className="overflow-hidden">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="mb-6 w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">RAMY SOLANKI</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Boston, MA | solanki.ram@northeastern.edu | +1 (267) 987-1084
                </p>
              </div>

              <p className="mb-6 text-sm">
                Innovative and detail-oriented Software Engineer with 4+ years of experience architecting scalable
                backend systems, data pipelines, and cloud-native solutions using Python, Java, and SQL. Adept in
                leveraging AWS, Docker, Apache Airflow, and machine learning frameworks like TensorFlow and scikit-learn
                to deliver high-impact, AI-driven applications and real-time analytics.
              </p>

              <div className="text-center text-gray-500 italic">
                <p>Preview of CV - Download for full details</p>
              </div>
            </div>

            <Button className="bg-[#3A5199] hover:bg-[#3A5199]/90" size="lg">
              <a
                href="https://raw.githubusercontent.com/solankiram2023/Ramy-CV/main/Ramy%20SolankiCV%20(3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download Full CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
