import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

interface EducationItem {
  school: string
  degree: string
  field: string
  duration: string
  location: string
  activities?: string
  capstone?: string
  specialization?: string
  courses: string[]
  skills?: string[]
}

const educationData: EducationItem[] = [
  {
    school: "Northeastern University",
    degree: "Master of Science",
    field: "Information Systems",
    duration: "Sep 2023 - May 2025",
    location: "Boston, Massachusetts",
    activities: "APMC Northstar Workshop; Protathon 5.0 Hackathon Participant",
    capstone:
      'Wrote "Chapter 31: Time Series Analysis & Forecasting" for Professor Nicholas Brown\'s textbook "I2SL Statistical Learning"',
    courses: [
      "Generative Artificial Intelligence",
      "Big Data Systems & Intelligence Analytics",
      "Advanced Data Science & Architecture",
      "Program Structures & Algorithms",
      "Data Science Engineering Methods",
      "Data Management & Database Design",
      "Web Design & User Experience",
      "Application Engineering Development",
    ],
    skills: ["Core Java", "Microsoft SQL Server"],
  },
  {
    school: "Manipal Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Electronics & Instrumentation",
    duration: "2014 - 2018",
    location: "Manipal, India",
    activities: "Lions Club",
    specialization: "Minor Specialization: Applied Electronics",
    courses: [
      "Machine Learning",
      "Programming in C#",
      "Object Oriented Programming using C",
      "Computer Networks & Protocol",
      "Operating Systems",
      "Digital Image Processing",
    ],
    skills: ["Python", "C#"],
  },
]

export default function EducationSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" id="education">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          My <span className="text-[#3A5199]">Education</span>
        </h2>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-[#3A5199]">
              <CardHeader className="bg-gray-100 dark:bg-gray-800 pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-[#3A5199]" />
                    <h3 className="text-xl font-bold">{item.school}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{item.duration}</span>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-lg font-medium">
                    {item.degree} in {item.field}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                  {item.activities && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">Activities: {item.activities}</p>
                  )}
                  {item.specialization && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">Specialization: {item.specialization}</p>
                  )}
                  {item.capstone && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">Capstone: {item.capstone}</p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                {item.activities && (
                  <div className="mb-3">
                    <h4 className="text-md font-semibold mb-1">Activities:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.activities}</p>
                  </div>
                )}

                {item.capstone && (
                  <div className="mb-3">
                    <h4 className="text-md font-semibold mb-1">Capstone Project:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.capstone}</p>
                  </div>
                )}

                {item.specialization && (
                  <div className="mb-3">
                    <h4 className="text-md font-semibold mb-1">Specialization:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.specialization}</p>
                  </div>
                )}

                <div className="mb-3">
                  <h4 className="text-md font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {item.skills && item.skills.length > 0 && (
                  <div>
                    <h4 className="text-md font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#3A5199] text-[#3A5199]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
