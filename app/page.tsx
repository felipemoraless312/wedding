import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Countdown } from "@/components/countdown"
import { EventDetails } from "@/components/event-details"
import { Timeline } from "@/components/timeline"
import { GiftRegistry } from "@/components/gift-registry"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Countdown />
      <EventDetails />
      <Timeline />
      <GiftRegistry />
      <Footer />
    </main>
  )
}
