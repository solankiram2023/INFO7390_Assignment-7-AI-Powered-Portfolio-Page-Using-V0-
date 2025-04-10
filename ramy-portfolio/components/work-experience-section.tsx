import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Briefcase, Calendar, Award } from "lucide-react"

interface WorkExperience {
  company: string
  role: string
  location: string
  duration: string
  responsibilities: string[]
  awards?: string[]
}

const workExperienceData: WorkExperience[] = [
  {
    company: "Quest Global (Exxon Mobil Assets)",
    role: "Data Engineer",
    location: "Bangalore, India",
    duration: "Jan 2019 – Jan 2023",
    responsibilities: [
      "Designed and maintained scalable ETL/ELT data pipelines using Python, Airflow, and Docker, orchestrating batch and real-time data ingestion across AWS and GCP into data lakes and data warehouses like Snowflake and BigQuery.",
      "Performed data modeling, data cleaning, and exploratory data analysis (EDA) to support unsupervised machine learning workflows (e.g., K-Means, KNN) for customer segmentation and predictive analytics, following Agile/Scrum methodologies.",
      "Delivered automated, scalable insights using Advanced Excel, Power BI, Tableau, and Spotfire, building interactive dashboards and reports on top of optimized data models for data-driven decision making.",
    ],
    awards: ["On The Fly Award (Nov 2020, Sept 2021)", "Popular Choice Award (Mar 2021)"],
  },
  {
    company: "Toshiba Mitsubishi-Electric Industrial Systems Corporation",
    role: "Software Engineer",
    location: "Hyderabad, India",
    duration: "July 2018 – Oct 2018",
    responsibilities: [
      "Spearheaded the development of RESTful APIs and enhanced Microsoft Dynamics CRM, boosting data processing speed by 25% and increasing customer engagement by 15%, leading to measurable improvements in operational efficiency.",
      "Engineered full-stack modules using JavaScript, React, AngularJS, and TypeScript, and implemented backend systems with Java Spring Boot, MongoDB, Kafka, and Elasticsearch, reducing page load time by 30%.",
      "Automated build and deployment pipelines using GitHub Actions, and orchestrated containerized microservices with Kubernetes, enabling 40% faster release cycles within an Agile/Scrum development environment.",
    ],
  },
]

export default function WorkExperienceSection() {
  return (
    <section className="py-16 md:py-24" id="experience">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Work <span className="text-[#3A5199]">Experience</span>
        </h2>
        <div className="space-y-8">
          {workExperienceData.map((experience, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-[#3A5199]">
              <CardHeader className="bg-gray-100 dark:bg-gray-800 pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-[#3A5199]" />
                    <h3 className="text-xl font-bold">{experience.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-lg font-medium">{experience.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{experience.location}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 list-disc pl-5">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                      {responsibility}
                    </li>
                  ))}
                </ul>

                {experience.awards && experience.awards.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4 text-[#3A5199]" />
                      <h4 className="text-md font-semibold">Awards:</h4>
                    </div>
                    <ul className="list-disc pl-5">
                      {experience.awards.map((award, idx) => (
                        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
