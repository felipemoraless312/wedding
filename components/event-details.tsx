import { MapPin, Clock, Music, Utensils, Flower, PartyPopper } from "lucide-react"
import { Card } from "@/components/ui/card"

export function EventDetails() {
  return (
    <section id="evento" className="relative py-20 md:py-32">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 6px)",
          opacity: 0.8,
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Detalles del Evento
            </h2>
            <div className="h-px w-24 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Todo lo que necesitas saber para disfrutar de nuestro día especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4 bg-card h-full text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-foreground">Recepción</h3>
                <p className="text-sm text-muted-foreground">Llegada de invitados a las 6:30 PM</p>
              </div>
            </Card>

            <Card className="p-4 bg-card h-full text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Flower className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-foreground">Inicio de protocolo</h3>
                <p className="text-sm text-muted-foreground">La ceremonia será puntual a las 7:00 PM</p>
              </div>
            </Card>

            <Card className="p-4 bg-card h-full text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <PartyPopper className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-foreground">Fiesta</h3>
                <p className="text-sm text-muted-foreground">Música y alegría</p>
              </div>
            </Card>

            <Card className="p-4 bg-card h-full text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-foreground">Ubicación</h3>
                <a 
                  href="https://maps.app.goo.gl/7kzzV3R33m5kdS7E7?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground font-semibold hover:text-primary transition-colors underline"
                >
                  Salón Aivory
                </a>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-accent/10 border-accent/20">
            <h3 className="text-xl font-sans font-semibold text-foreground mb-4 text-center">Código de Vestimenta</h3>
            <p className="text-center text-muted-foreground text-pretty">
              Formal / Etiqueta · Por favor no usar blanco ni verde
            </p>
          </Card>

          <Card className="p-6 bg-card border-accent/20 mt-4">
            <p className="text-center text-muted-foreground text-pretty text-sm">
              Amamos a las niñas y a los niños pero en esta ocasión, para que tu también puedas disfrutar déjalos en casa.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}