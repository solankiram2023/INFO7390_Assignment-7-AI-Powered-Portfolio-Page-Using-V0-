import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Server, Cloud, Database, BarChart, Wrench } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ReactNode
  skills: string[]
}

const skillsData: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code className="h-5 w-5 text-[#3A5199]" />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Java",
      "Rust",
      "SQL",
      "Bash",
      "HTML5",
      "CSS3 (SASS)",
      "YAML",
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: <Server className="h-5 w-5 text-[#3A5199]" />,
    skills: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Django",
      "Spring Boot",
      "NumPy",
      "Pandas",
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Transformers",
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="h-5 w-5 text-[#3A5199]" />,
    skills: [
      "AWS (S3, RDS, EC2, Lambda, EKS)",
      "GCP (BigQuery, Cloud Functions)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "NGINX",
    ],
  },
  {
    name: "Data & Infrastructure",
    icon: <Database className="h-5 w-5 text-[#3A5199]" />,
    skills: [
      "Snowflake",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Apache Spark",
      "Apache Kafka",
      "Airflow",
      "Delta Lake",
      "ELK Stack",
      "Tableau",
      "Looker",
    ],
  },
  {
    name: "APIs & Tools",
    icon: <BarChart className="h-5 w-5 text-[#3A5199]" />,
    skills: [
      "RESTful APIs",
      "GraphQL",
      "gRPC",
      "OAuth 2.0",
      "JWT",
      "Postman",
      "Freemarker",
      "ServiceNow",
      "Swagger/OpenAPI",
      "Kafka",
      "Airflow",
      "dbt",
      "Supabase",
    ],
  },
  {
    name: "Testing & Monitoring",
    icon: <Wrench className="h-5 w-5 text-[#3A5199]" />,
    skills: ["PyTest", "JUnit", "Cypress", "Jest", "Selenium", "Prometheus", "Grafana", "Sentry"],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Technical <span className="text-[#3A5199]">Skills</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillsData.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
