"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/2.jpg"
          alt="Wedding"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-16 left-0 right-0 z-10 flex justify-center px-4">
        <Button
          className={`bg-transparent hover:bg-white/10 text-white font-serif font-light tracking-[0.3em] uppercase px-8 py-3 text-xs shadow-none transition-all duration-700 border border-white/40 hover:border-white/80 rounded-none backdrop-blur-sm ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ 
            transition: "opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s",
            letterSpacing: "0.3em"
          }}
          asChild
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSS1WyOVBcF4BoyM2M8Ac5ZuNNexdfQ2GjPWVUAVFiAPKXiA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar Asistencia
          </a>
        </Button>
      </div>
    </section>
  )
}