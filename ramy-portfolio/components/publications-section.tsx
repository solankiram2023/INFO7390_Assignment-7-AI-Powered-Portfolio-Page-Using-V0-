import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FileText, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Publication {
  title: string
  journal: string
  date: string
  description?: string
  link?: string
  downloadLink?: string
}

const publicationsData: Publication[] = [
  {
    title: "Predictive Modeling for Environmental Telemetry Data and Damage Prediction",
    journal: "International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)",
    date: "November 2022",
    description:
      "Research paper focusing on predictive modeling techniques for environmental data analysis and damage prediction systems.",
    link: "https://github.com/solankiram2023/Predictive-Modeling-for-Environmental-Telemetry-Data-and-Damage-Prediction",
    downloadLink:
      "https://raw.githubusercontent.com/solankiram2023/Predictive-Modeling-for-Environmental-Telemetry-Data-and-Damage-Prediction/main/1714079718373.pdf",
  },
]

export default function PublicationsSection() {
  return (
    <section className="py-16 md:py-24" id="publications">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Research <span className="text-[#3A5199]">Publications</span>
        </h2>

        <div className="space-y-6">
          {publicationsData.map((publication, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-100 dark:bg-gray-800 pb-4">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-[#3A5199] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{publication.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Published in {publication.journal}, {publication.date}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                {publication.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{publication.description}</p>
                )}

                <div className="flex flex-wrap gap-3">
                  {publication.link && (
                    <Button variant="outline" className="text-[#3A5199] border-[#3A5199]" size="sm" asChild>
                      <a href={publication.link} target="_blank" rel="noopener noreferrer">
                        View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}

                  {publication.downloadLink && (
                    <Button className="bg-[#3A5199] hover:bg-[#3A5199]/90" size="sm" asChild>
                      <a href={publication.downloadLink} target="_blank" rel="noopener noreferrer">
                        Download Paper <Download className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
