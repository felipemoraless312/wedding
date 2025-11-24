import { Heart, Camera, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
            </div>
            <p className="text-sm text-muted-foreground">Nayely & Tadeo · 12 de Diciembre, 2025</p>
            <p className="text-xs text-muted-foreground">
              Con amor y emoción, esperamos celebrar este día especial contigo
            </p>
            
            {/* Credits Section */}
            <div className="pt-6 border-t border-border/50 space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Code className="h-4 w-4" />
                <span>Diseñado por:</span>
                <span className="text-primary font-medium">Ing. Felipe Morales</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Camera className="h-4 w-4" />
                <span>Fotografía:</span>
                <a 
                  href="https://www.instagram.com/ramiromontesdeoca_fotografia?igsh=cnhwM2VodDBoenVu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  @ramiromontesdeoca_fotografia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}