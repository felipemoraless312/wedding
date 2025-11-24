import { Gift, ExternalLink, Heart, Banknote, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GiftRegistry() {
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
             Si deseas tener un detállele con nosotros, puedes hacerlo desde nuestra mesa de regalos, por medio de certificados ya que gracias a Dios , 
             con todos estos años juntos contamos con nuestras cosas del hogar. Tu presencia es nuestro mayor regalo. Si deseas tener un detalle con nosotros, hemos preparado nuestra
              mesa de regalos para facilitar tu elección y ayudarnos a comenzar esta nueva etapa juntos.
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

          <Card className="p-6 md:p-8 bg-accent/10 border-accent/20">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <div className="flex-shrink-0">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-sans font-semibold text-foreground mb-3">Nuestro Mayor Deseo</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Lo más importante para nosotros es poder compartir este día tan especial con las personas que amamos.
                  Tu compañía y buenos deseos son el regalo más valioso que podemos recibir. Si en tu corazón deseas
                  hacernos un obsequio, cualquier detalle será recibido con infinito amor y agradecimiento.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}