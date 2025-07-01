'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Solution() {
  return (
    <section id="solution" className="section bg-dark">
      <div className="container">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-green-lime glow-green">Sportiva:</span> La solución deportiva inteligente
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300">
            Una app diseñada específicamente para conectar deportistas, facilitar la organización 
            de partidos y construir una comunidad activa alrededor del deporte amateur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[500px] h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-electric/20 to-green-lime/20 rounded-xl blur-xl"></div>
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <div className="h-full w-full bg-dark-alt flex items-center justify-center p-4">
                  <Image 
                    src="/app-screens.png" 
                    alt="Sportiva App Screens" 
                    width={400}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <ul className="space-y-8">
              <motion.li 
                className="flex gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-electric/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-electric" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Encuentra partidos instantáneamente</h3>
                  <p className="text-gray-400">Accede a una red de jugadores y canchas disponibles en tu área. Organiza o únete a partidos con solo unos toques.</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-electric/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-electric" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Construye tu comunidad deportiva</h3>
                  <p className="text-gray-400">Crea equipos, sigue a otros jugadores y desarrolla tu red de contactos deportivos para nunca quedarte sin rivales.</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-electric/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-electric" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Registra tu progreso</h3>
                  <p className="text-gray-400">Mantén un historial completo de tus partidos, estadísticas personales y evolución como deportista con datos visuales y métricas.</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
