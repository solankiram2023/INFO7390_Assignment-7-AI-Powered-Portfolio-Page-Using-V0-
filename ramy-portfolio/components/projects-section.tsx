import ProjectCard from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "OpenAI Model Evaluation Tool with PDF Extraction",
    description:
      "A comprehensive tool for evaluating OpenAI models with integrated PDF extraction capabilities, enabling efficient analysis of document-based data.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["OpenAI", "PDF Processing", "Model Evaluation", "Python"],
    link: "https://github.com/solankiram2023/OpenAI-Model-Evaluation-Tool-with-PDF-Extraction",
  },
  {
    id: 2,
    title: "Multi-Modal RAG Application",
    description:
      "A Retrieval-Augmented Generation (RAG) application that processes multiple types of data inputs including text, images, and structured data to generate comprehensive responses.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["RAG", "Multi-Modal", "AI", "LLM"],
    link: "https://github.com/solankiram2023/Multi-Modal-RAG-Application",
  },
  {
    id: 3,
    title: "Agent-Based Research Tool",
    description:
      "An automated research assistant that analyzes documents and retrieves knowledge using agent-based architecture, streamlining the research process.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Agent-Based AI", "Document Analysis", "Knowledge Retrieval", "Research"],
    link: "https://github.com/solankiram2023/Agent-Based-Research-Tool-Automating-Document-Analysis-and-Knowledge-Retrieval",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-24" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          My <span className="text-[#3A5199]">Projects</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
