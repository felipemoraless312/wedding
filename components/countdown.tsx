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
    <section className="relative py-12 md:py-20 text-white min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-between">
      {/* Background photo for countdown */}
      <div className="absolute inset-0 z-0">
        <img
          src="/3.png"
          alt="Countdown background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="font-sans text-1xl md:text-2xl font-bold mb-1 text-balance text-white">
              Cuenta Regresiva
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pb-8 md:pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-6 px-2 md:px-0">
            <Card className="p-3 md:p-6 text-center bg-transparent border-0 min-w-[110px] md:min-w-0 snap-start">
              <div className="flex flex-col h-full justify-end items-center pb-2">
                <span className="text-[clamp(1.5rem,5vw,2.5rem)] md:text-[clamp(2.5rem,6vw,4rem)] lg:text-[clamp(3rem,5vw,5rem)] font-sans font-bold inline-block text-white px-3 py-1 rounded tabular-nums">
                  {timeLeft.days}
                </span>
                <div className="text-xs md:text-sm text-white uppercase tracking-wide mt-2">Días</div>
              </div>
            </Card>

            <Card className="p-3 md:p-6 text-center bg-transparent border-0 min-w-[110px] md:min-w-0 snap-start">
              <div className="flex flex-col h-full justify-end items-center pb-2">
                <span className="text-[clamp(1.5rem,5vw,2.5rem)] md:text-[clamp(2.5rem,6vw,4rem)] lg:text-[clamp(3rem,5vw,5rem)] font-sans font-bold inline-block text-white px-3 py-1 rounded tabular-nums">
                  {timeLeft.hours}
                </span>
                <div className="text-xs md:text-sm text-white uppercase tracking-wide mt-2">Horas</div>
              </div>
            </Card>

            <Card className="p-3 md:p-6 text-center bg-transparent border-0 min-w-[110px] md:min-w-0 snap-start">
              <div className="flex flex-col h-full justify-end items-center pb-2">
                <span className="text-[clamp(1.5rem,5vw,2.5rem)] md:text-[clamp(2.5rem,6vw,4rem)] lg:text-[clamp(3rem,5vw,5rem)] font-sans font-bold inline-block text-white px-3 py-1 rounded tabular-nums">
                  {timeLeft.minutes}
                </span>
                <div className="text-xs md:text-sm text-white uppercase tracking-wide mt-2">Minutos</div>
              </div>
            </Card>

            <Card className="p-3 md:p-6 text-center bg-transparent border-0 min-w-[110px] md:min-w-0 snap-start">
              <div className="flex flex-col h-full justify-end items-center pb-2">
                <span className="text-[clamp(1.5rem,5vw,2.5rem)] md:text-[clamp(2.5rem,6vw,4rem)] lg:text-[clamp(3rem,5vw,5rem)] font-sans font-bold inline-block text-white px-3 py-1 rounded tabular-nums">
                  {timeLeft.seconds}
                </span>
                <div className="text-xs md:text-sm text-white uppercase tracking-wide mt-2">Segundos</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}