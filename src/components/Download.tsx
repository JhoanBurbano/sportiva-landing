'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Download() {
  return (
    <section id="download" className="section bg-dark-alt relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-electric/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-lime/10 rounded-full blur-3xl -z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Descarga <span className="text-blue-electric glow">Sportiva</span> y comienza a jugar
              </h2>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Disponible para iOS y Android. Descarga gratis la app y transforma tu experiencia deportiva hoy mismo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center gap-2 bg-white hover:bg-opacity-90 text-dark py-3 px-6 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5675 12.0364C17.5558 9.35877 19.7506 8.04826 19.8422 7.99358C18.6185 6.17129 16.7022 5.94266 16.0411 5.92114C14.4735 5.75317 12.9661 6.86298 12.1686 6.86298C11.3532 6.86298 10.1295 5.94266 8.79732 5.97134C7.09356 6.00001 5.52587 6.98948 4.67395 8.49422C2.91102 11.5463 4.2432 16.0154 5.94695 18.6363C6.79171 19.917 7.78118 21.369 9.10334 21.3116C10.3842 21.2543 10.8454 20.4999 12.3844 20.4999C13.9091 20.4999 14.3416 21.3116 15.6781 21.2831C17.0575 21.2543 17.9094 19.9743 18.7255 18.6793C19.7149 17.1888 20.1189 15.7274 20.1332 15.6701C20.1045 15.6557 17.5819 14.6089 17.5675 12.0364Z"/>
                    <path d="M15.0864 4.29645C15.7762 3.4372 16.2232 2.26824 16.0842 1.07776C15.0864 1.12097 13.8341 1.7677 13.1155 2.61267C12.4688 3.36262 11.9219 4.57456 12.0753 5.7363C13.1874 5.82074 14.3679 5.14142 15.0864 4.29645Z"/>
                  </svg>
                  <span>App Store</span>
                </motion.a>
                
                <motion.a 
                  href="#" 
                  className="flex items-center justify-center gap-2 bg-white hover:bg-opacity-90 text-dark py-3 px-6 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.19995 20.8001C3.59995 21.5001 4.19995 22.0001 4.89995 22.0001C5.09995 22.0001 5.29995 21.9001 5.49995 21.8001L12 18.2001L18.5 21.8001C18.7 21.9001 18.9 22.0001 19.1 22.0001C19.8 22.0001 20.4 21.5001 20.8 20.8001L13 16.3001L5.19995 11.8001L3.19995 20.8001Z" />
                    <path d="M21.9 9.79993C21.9 9.09993 21.5 8.59993 20.9 8.29993L5.5 2.09993C5.1 1.89993 4.6 2.09993 4.2 2.49993C3.8 2.99993 3.7 3.59993 3.7 3.99993L5.1 10.4999L21.9 9.79993Z" />
                    <path d="M5.09998 13.7L3.69998 20.2C3.69998 20.7 3.89998 21.2 4.29998 21.6C4.69998 22 5.09998 22.1 5.59998 22.1L12 13.7H5.09998Z" />
                    <path d="M12 13.7L18.4 22.1C18.9 22.1 19.3 21.9 19.7 21.6C20.1 21.2 20.3 20.7 20.3 20.2L18.9 13.7H12Z" />
                  </svg>
                  <span>Google Play</span>
                </motion.a>
              </div>
              
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-blue-electric/50 border border-dark-alt flex items-center justify-center text-xs">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-gray-400">
                  <span className="font-bold text-white">+10,000</span> usuarios activos
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[300px] h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-electric/30 to-green-lime/30 rounded-full blur-2xl"></div>
                  <Image
                    src="/app-logo-3d.png" 
                    alt="Sportiva App Logo" 
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
