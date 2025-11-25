"use client"

import { Gift, ExternalLink, Heart, Banknote, CreditCard, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function GiftRegistry() {
  const carouselRef = useRef(null)

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="regalos" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 md:h-10 md:w-10 text-accent" />
            </div>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Mesa de Regalos
            </h2>
            <div className="h-px w-20 md:w-24 bg-accent mx-auto mb-6" />
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-4">
              Tu presencia es nuestro mayor regalo.
              Si deseas brindarnos un detalle, ponemos a tu disposición nuestra mesa de regalos mediante certificados. 
              Gracias a Dios, después de tantos años juntos, contamos ya con lo necesario para nuestro hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-12">
            {/* Liverpool Card */}
            <Card className="p-6 md:p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col gap-4 md:gap-6 h-full">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mx-auto">
                  <Gift className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">Liverpool</h3>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <span className="text-xs md:text-sm font-medium text-muted-foreground">Número de evento:</span>
                      <span className="text-base md:text-lg font-semibold text-primary font-mono">51868194</span>
                    </div>
                  </div>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors mt-2"
                  asChild
                >
                  <a
                    href="https://www.liverpool.com.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Ir a Liverpool</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Monetary Gift Card */}
            <Card className="p-6 md:p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col gap-4 md:gap-6 h-full">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mx-auto">
                  <Banknote className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">Regalo Monetario</h3>
                  <div className="space-y-3 pt-2">
                    <div className="bg-muted/50 rounded-lg p-3 md:p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs md:text-sm font-medium text-muted-foreground">Transferencia bancaria</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">BBVA Bancomer</p>
                        <p className="text-sm md:text-base font-semibold text-foreground font-mono">2607128681</p>
                      </div>
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      O en efectivo el día del evento
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Photo Carousel Section */}
          <div className="mb-10 md:mb-12">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              Gracias por acompañarnos
            </h2>
            <Card className="p-4 md:p-6 bg-card overflow-hidden">
              <style>{`
                .photo-carousel::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="relative group">
                {/* Botón Izquierdo */}
                <button
                  onClick={() => scroll('left')}
                  className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-6 w-6 text-foreground" />
                </button>

                {/* Botón Derecho */}
                <button
                  onClick={() => scroll('right')}
                  className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-6 w-6 text-foreground" />
                </button>

                <div ref={carouselRef} className="photo-carousel flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
                  {/* Fotos Verticales n1-n4 */}
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={`n${i}`}
                      className="flex-shrink-0 snap-center w-[70vw] md:w-[280px] aspect-[3/4] bg-muted rounded-lg overflow-hidden shadow-md"
                    >
                      <img 
                        src={`/n${i}.jpeg`}
                        alt={`Momento especial ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  {/* Foto Panorámica p1 */}
                  <div
                    key="p1"
                    className="flex-shrink-0 snap-center w-[85vw] md:w-[400px] aspect-[16/9] bg-muted rounded-lg overflow-hidden shadow-md"
                  >
                    <img 
                      src="/p1.jpeg"
                      alt="Vista panorámica 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Foto Panorámica p3 */}
                  <div
                    key="p3"
                    className="flex-shrink-0 snap-center w-[85vw] md:w-[400px] aspect-[16/9] bg-muted rounded-lg overflow-hidden shadow-md"
                  >
                    <img 
                      src="/p3.jpeg"
                      alt="Vista panorámica 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <span>Desliza para ver más</span>
                    <span>→</span>
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Foto Familiar p2 - Sección completa */}
            <Card className="p-6 md:p-8 bg-card overflow-hidden mb-10 md:mb-12">
              <div className="text-center mb-4">
                <h3 className="font-sans text-2xl md:text-3xl font-bold text-foreground mb-2">
                  La Familia Santoyo Castellanos
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Unidos por el amor, bendecidos por siempre
                </p>
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
                <img 
                  src="/p2.jpeg"
                  alt="La Familia Santoyo Castellanos"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Botones de acción */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors py-6"
                  asChild
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeSS1WyOVBcF4BoyM2M8Ac5ZuNNexdfQ2GjPWVUAVFiAPKXiA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Confirmar Asistencia</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium transition-colors py-6"
                  asChild
                >
                  <a
                    href="https://drive.google.com/drive/folders/170FrSQwqm5_6DWSWK3fxF7Y7g7J0uWpl?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Gift className="h-5 w-5" />
                    <span>Compartir Fotos</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 hidden">
            {/* Confirmar Asistencia */}
            <Card className="p-6 md:p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col gap-4 md:gap-6 h-full">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mx-auto">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">Confirmar Asistencia</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Por favor confírmanos tu asistencia para poder preparar todo con anticipación
                  </p>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors mt-2"
                  asChild
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeSS1WyOVBcF4BoyM2M8Ac5ZuNNexdfQ2GjPWVUAVFiAPKXiA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Confirmar</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Compartir Fotos */}
            <Card className="p-6 md:p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col gap-4 md:gap-6 h-full">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mx-auto">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">Compartir Fotos</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Si quieres compartirnos fotos del evento adjúntalas al siguiente drive
                  </p>
                </div>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors mt-2"
                  asChild
                >
                  <a
                    href="https://drive.google.com/drive/folders/170FrSQwqm5_6DWSWK3fxF7Y7g7J0uWpl?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <span>Subir Fotos</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}