import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar } from "lucide-react"

interface AwardItem {
  title: string
  organization: string
  date: string
  description?: string
}

const awardsData: AwardItem[] = [
  {
    title: "On The Fly Award",
    organization: "Quest Global (Exxon Mobil Assets)",
    date: "November 2020",
    description: "Recognition for exceptional performance and quick problem-solving abilities.",
  },
  {
    title: "On The Fly Award",
    organization: "Quest Global (Exxon Mobil Assets)",
    date: "September 2021",
    description: "Second recognition for continued excellence and agile response to project challenges.",
  },
  {
    title: "Popular Choice Award",
    organization: "Quest Global (Exxon Mobil Assets)",
    date: "March 2021",
    description: "Voted by peers for outstanding contributions to team projects and collaborative efforts.",
  },
]

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" id="awards">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Awards & <span className="text-[#3A5199]">Recognition</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awardsData.map((award, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#3A5199]" />
                    <h3 className="text-lg font-bold">{award.title}</h3>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>{award.date}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{award.organization}</p>

                {award.description && <p className="text-sm text-gray-700 dark:text-gray-300">{award.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
