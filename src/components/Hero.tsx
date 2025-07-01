'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-blue-electric/20 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-green-lime/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">La app que</span>
              <span className="block text-blue-electric glow"> conecta tu deporte</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Juega más, organiza menos. Encuentra partidos, rivales y comunidad en Sportiva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a 
                href="#download" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descarga la app
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cómo funciona
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-[280px] h-[560px] md:w-[300px] md:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-electric/20 to-green-lime/20 rounded-[40px] blur-lg transform -rotate-6"></div>
              <div className="relative h-full w-full overflow-hidden rounded-[36px] border-4 border-dark-alt shadow-2xl">
                <Image 
                  src="/app-mockup.png" 
                  alt="Sportiva App" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
