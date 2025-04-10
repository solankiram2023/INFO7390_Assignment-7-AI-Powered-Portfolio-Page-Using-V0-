import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
            © {new Date().getFullYear()} Ramy Solanki. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/solankiram2023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#3A5199] dark:text-gray-400 dark:hover:text-[#3A5199]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ramysolanki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#3A5199] dark:text-gray-400 dark:hover:text-[#3A5199]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
