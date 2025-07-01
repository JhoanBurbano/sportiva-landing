'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  
  const steps = [
    {
      number: '01',
      title: 'Crea tu perfil deportivo',
      description: 'Regístrate, selecciona tus deportes favoritos y configura tu nivel de habilidad y disponibilidad.',
      icon: '/icons/profile.svg',
    },
    {
      number: '02',
      title: 'Explora partidos cercanos',
      description: 'Encuentra juegos disponibles en tu zona, filtra por fecha, ubicación o nivel de habilidad.',
      icon: '/icons/search.svg',
    },
    {
      number: '03',
      title: 'Únete o crea partidos',
      description: 'Regístrate en partidos existentes o crea el tuyo propio y compártelo con la comunidad.',
      icon: '/icons/join.svg',
    },
    {
      number: '04',
      title: 'Juega y registra resultados',
      description: 'Disfruta del partido y luego registra los resultados, estadísticas y momentos destacados.',
      icon: '/icons/stats.svg',
    }
  ]
  
  return (
    <section id="how-it-works" className="section bg-dark py-24" ref={containerRef}>
      <motion.div 
        className="container"
        style={{ opacity, scale }}
      >
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Cómo <span className="text-green-lime glow-green">funciona</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Una experiencia fluida y sin complicaciones para que puedas 
            enfocarte en lo que realmente importa: disfrutar del deporte.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative h-[600px] flex items-center justify-center">
              <div className="relative w-[280px] h-[560px]">
                <div className="absolute inset-0 bg-gradient-to-r from-green-lime/20 to-blue-electric/20 rounded-[40px] blur-lg transform rotate-3"></div>
                <div className="relative h-full w-full overflow-hidden rounded-[36px] border-4 border-dark-alt shadow-2xl">
                  <Image 
                    src="/app-flow.png" 
                    alt="Sportiva App Flow" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-electric/20 flex items-center justify-center text-blue-electric font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
