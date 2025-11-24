import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="h-8 w-8 text-accent" fill="currentColor" />
          </div>
          <p className="text-sm text-muted-foreground">Nayeli & Tadeo · 12 de Diciembre, 2025</p>
          <p className="text-xs text-muted-foreground">
            Con amor y emoción, esperamos celebrar este día especial contigo
          </p>
        </div>
      </div>
    </footer>
  )
}
