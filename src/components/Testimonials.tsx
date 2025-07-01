'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Organizador de torneos',
      image: '/testimonials/user1.png',
      text: 'Gracias a Sportiva he podido organizar torneos locales de fútbol sin el caos que solía tener con los grupos de WhatsApp. La app ha transformado nuestra comunidad deportiva.'
    },
    {
      name: 'María Fernández',
      role: 'Tenista amateur',
      image: '/testimonials/user2.png',
      text: 'Encontrar rivales de mi nivel solía ser un desafío. Con Sportiva, en minutos puedo organizar un partido con alguien nuevo y registrar mi progreso partido a partido.'
    },
    {
      name: 'Alejandro Torres',
      role: 'Líder de club deportivo',
      image: '/testimonials/user3.png',
      text: 'Nuestra comunidad deportiva ha crecido un 40% desde que empezamos a usar Sportiva. La facilidad para organizar partidos y seguir el progreso ha hecho la diferencia.'
    }
  ]

  return (
    <section id="testimonials" className="section bg-dark">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros <span className="text-blue-electric glow">usuarios</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Deportistas de todos los niveles están transformando su experiencia con Sportiva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="card p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px rgba(26, 192, 255, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-blue-electric" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-8 flex-grow">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-electric/30 flex-shrink-0 mr-4">
                  {/* We'll use a placeholder for the image since we don't have actual images */}
                  <div className="w-full h-full bg-blue-electric/50 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
