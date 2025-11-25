import { Heart, Calendar, Syringe as Ring, Plane } from 'lucide-react'

export function Timeline() {
  const events = [
    {
      icon: Heart,
      date: '',
      title: 'Primer Encuentro',
      description: 'Nos conocimos en tercero de secundaria, cuando una carta con olor a café y aquellas palabras que aún recordamos "mi potranquita" marcó el inicio de todo.',
      image: '/8.jpeg'
    },
    {
      icon: Heart,
      date: '24 de noviembre de 2001',
      title: 'El Comienzo',
      description: 'Comenzamos un noviazgo que se volvió inseparable. Siempre encontrabamos la forma de vernos, aunque fuera solo por cinco minutos.',
      image: '/7.jpeg'
    },
    {
      icon: Heart,
      date: '',
      title: 'Un Sueño Cumplido',
      description: 'Con el paso de los años, y siendo aún jóvenes, la vida nos premio con nuestro primer hijo, Hamiel, una viva copia de su padre. Ocho años después, la familia se iluminó con la llegada de nuestra princesa Victoria. Juntos fuimos creciendo, aprendiendo y alimentando este amor que hoy nos sostiene más fuerte que nunca.',
      image: '/6.jpeg'
    },
    {
      icon: Heart,
      title: 'Nos Casamos',
      description: 'Han pasado 24 años desde aquel inicio "al revés", pero aquí estamos, frente a frente, con el corazón latiendo igual de fuerte que el primer día, convencidos de que el amor lo puede todo.',
      image: '/9.jpeg'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nuestra Historia
            </h2>
            <div className="h-px w-24 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hoy queremos que nos acompañen a celebrar este acto de amor que hemos construido paso a paso, día a día.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 -translate-x-1/2" />

            {/* Timeline events */}
            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.icon
                const isEven = index % 2 === 0
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-left pl-16 md:pl-0`}>
                      <div className={`mb-4 ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto'}`}>
                        <img
                          src={event.image}
                          alt={`${event.title} photo`}
                          className="w-full md:w-auto md:max-w-md rounded-lg mx-auto"
                        />
                      </div>
                      <div className={`inline-block ${isEven ? 'md:mr-0 md:ml-auto' : ''}`}>
                        <div className="text-sm font-semibold text-primary mb-2">
                          {event.date}
                        </div>
                        <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-pretty max-w-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute left-8 md:relative md:left-0 flex-shrink-0 w-16 h-16 rounded-full bg-background border-4 border-accent flex items-center justify-center z-10 -translate-x-1/2 md:translate-x-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}