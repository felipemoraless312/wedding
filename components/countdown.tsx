"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

export function Countdown() {
  const weddingDate = new Date("2025-12-12T18:30:00").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [weddingDate])

  return (
    <section className="relative py-12 md:py-22 text-white min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh]">
      {/* Background photo for countdown */}
      <div className="absolute inset-0 z-0">
        <img
          src="/3.png"
          alt="Countdown background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Countdown en la parte superior derecha */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
        <div className="text-right mb-3">
          <h2 className="font-sans text-sm md:text-base font-semibold text-white">
            Cuenta Regresiva
          </h2>
        </div>
        
        <div className="flex gap-2 md:gap-3">
          <Card className="p-2 md:p-3 text-center bg-white/10 backdrop-blur-sm border-white/20 min-w-[50px] md:min-w-[60px]">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-sans font-bold text-white tabular-nums">
                {timeLeft.days}
              </span>
              <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wide mt-1">Días</div>
            </div>
          </Card>

          <Card className="p-2 md:p-3 text-center bg-white/10 backdrop-blur-sm border-white/20 min-w-[50px] md:min-w-[60px]">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-sans font-bold text-white tabular-nums">
                {timeLeft.hours}
              </span>
              <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wide mt-1">Hrs</div>
            </div>
          </Card>

          <Card className="p-2 md:p-3 text-center bg-white/10 backdrop-blur-sm border-white/20 min-w-[50px] md:min-w-[60px]">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-sans font-bold text-white tabular-nums">
                {timeLeft.minutes}
              </span>
              <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wide mt-1">Min</div>
            </div>
          </Card>

          <Card className="p-2 md:p-3 text-center bg-white/10 backdrop-blur-sm border-white/20 min-w-[50px] md:min-w-[60px]">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-sans font-bold text-white tabular-nums">
                {timeLeft.seconds}
              </span>
              <div className="text-[10px] md:text-xs text-white/90 uppercase tracking-wide mt-1">Seg</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}