"use client"

import { useEffect, useRef, useState } from "react"

export function Gallery() {
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = imageRefs.current.map((img, index) => {
      if (!img) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => [...prev, index])
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(img)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const images = [
    {
      src: "/romantic-couple-portrait-outdoor-natural-light.jpg",
      alt: "Foto 1",
    },
    {
      src: "/couple-laughing-together-happy-moment.jpg",
      alt: "Foto 2",
    },
    {
      src: "/couple-holding-hands-sunset-silhouette.jpg",
      alt: "Foto 3",
    },
    {
      src: "/couple-dancing-romantic-embrace.jpg",
      alt: "Foto 4",
    },
    {
      src: "/couple-walking-beach-together.jpg",
      alt: "Foto 5",
    },
    {
      src: "/couple-portrait-elegant-formal-attire.jpg",
      alt: "Foto 6",
    },
  ]

  return (
    <section id="galeria" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nuestros Momentos
            </h2>
            <div className="h-px w-24 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                ref={(el) => {
                  imageRefs.current[index] = el
                }}
                className={`relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer transition-all duration-700 ${
                  visibleImages.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
