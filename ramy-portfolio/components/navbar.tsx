"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#3A5199]">Ramy Solanki</span>
        </Link>

        {/* Mobile menu button */}
        <button className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#experience" className="text-sm font-medium hover:text-[#3A5199] transition-colors">
            Experience
          </Link>
          <Link href="#education" className="text-sm font-medium hover:text-[#3A5199] transition-colors">
            Education
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-[#3A5199] transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-[#3A5199] transition-colors">
            Skills
          </Link>
          <Link href="#publications" className="text-sm font-medium hover:text-[#3A5199] transition-colors">
            Publications
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-[#3A5199] transition-colors">
            Contact
          </Link>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://raw.githubusercontent.com/solankiram2023/Ramy-CV/main/Ramy%20SolankiCV%20(3).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV <Download className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="flex flex-col p-4">
              <Link
                href="#experience"
                className="py-2 text-sm font-medium hover:text-[#3A5199] transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </Link>
              <Link
                href="#education"
                className="py-2 text-sm font-medium hover:text-[#3A5199] transition-colors"
                onClick={toggleMenu}
              >
                Education
              </Link>
              <Link
                href="#projects"
                className="py-2 text-sm font-medium hover:text-[#3A5199] transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="py-2 text-sm font-medium hover:text-[#3A5199] transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </Link>
              <Link
                href="#publications"
                className="py-2 text-sm font-medium hover:text-[#3A5199] transition-colors"
                onClick={toggleMenu}
              >
                Publications
              </Link>
              <Link
                href="#contact"
                className="py-2 text-sm font-medium hover:text-[#3A5199] transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button variant="outline" size="sm" className="mt-2" asChild>
                <a
                  href="https://raw.githubusercontent.com/solankiram2023/Ramy-CV/main/Ramy%20SolankiCV%20(3).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  Download CV <Download className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
