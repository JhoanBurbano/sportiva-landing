'use client'

import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section id="problem" className="section bg-dark-alt">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            El deporte amateur <span className="text-blue-electric glow">no está conectado</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Organizar un partido, encontrar rivales o mantener el registro de tus juegos 
            sigue siendo una tarea complicada y fragmentada. 
            Los grupos de WhatsApp, planillas de Excel y métodos tradicionales 
            no aprovechan la tecnología para mejorar tu experiencia deportiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div 
              className="card p-6"
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(26, 192, 255, 0.2)" }}
            >
              <div className="bg-blue-electric/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Difícil coordinación</h3>
              <p className="text-gray-400">Los mensajes se pierden, la coordinación falla y los partidos se cancelan.</p>
            </motion.div>
            
            <motion.div 
              className="card p-6"
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(26, 192, 255, 0.2)" }}
            >
              <div className="bg-blue-electric/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Falta de comunidad</h3>
              <p className="text-gray-400">No hay forma fácil de encontrar nuevos jugadores o equipos para competir.</p>
            </motion.div>
            
            <motion.div 
              className="card p-6"
              whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(26, 192, 255, 0.2)" }}
            >
              <div className="bg-blue-electric/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sin historial</h3>
              <p className="text-gray-400">Tu progreso, estadísticas y mejoras se pierden sin un registro digital centralizado.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
