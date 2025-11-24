"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src="/1.jpg"
              alt="Nayely y Tadeo"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="font-sans text-xl font-semibold tracking-tight text-foreground">NUESTRA BODA</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Nuestra Historia
            </button>
            <button
              onClick={() => scrollToSection("evento")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              El Evento
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("regalos")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Regalos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 border-t border-border">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("historia")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Nuestra Historia
            </button>
            <button
              onClick={() => scrollToSection("evento")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              El Evento
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("regalos")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Regalos
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
