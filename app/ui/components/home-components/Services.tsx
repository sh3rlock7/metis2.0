"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export const Services = () => {
  return (
    <div className="mb-10 flex flex-col relative -top-15 sm:top-0">
      {/* Principal text */}
      <div>
        <h1 className="text-6xl font-semibold md:text-5xl lg:text-7xl text-center lg:font-[450] lg:mt-12 text-black">
          Gemeinsam Ideen verwirklichen
        </h1>
        <h3 className="text-black text-xl sm:text-xl font-bold text-center px-6 md:mt-12 lg:px-64">
          Unsere Mission ist es, weltweit inspirierende und effektive
          Werbekampagnen zu schaffen. Mit unserer globalen Reichweite und
          tiefgehenden lokalen Expertise setzen wir uns dafür ein, Ihr
          Unternehmen erfolgreich zu machen. Lassen Sie uns gemeinsam
          Großartiges erreichen.
        </h3>
        <h4 className="text-xl text-center text-black font-semibold mt-4">
          Marcel Richter
        </h4>
        <h6 className="text-xs text-gray-500 font-extrabold text-center">
          Founder & CEO
        </h6>
      </div>

      {/* Contenedor de servicios */}
      <div className="flex flex-wrap md:flex-wrap justify-center gap-x-18 gap-y-6 mt-10">
        {/* Servicio 1 */}
        <motion.div
          className="relative w-80 aspect-4/3 overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-lg"
          layout
        >
          {/* Imagen de fondo */}
          <motion.div className="w-full h-full">
            <Image
              src="/global.jpg"
              alt="global conection"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-10 flex flex-col justify-end bg-black/60 text-white p-4 rounded-2xl"
          >
            <h2 className="text-xl font-semibold">Professional Hosting</h2>
            <p className="text-sm opacity-90 mb-6">
              Unser managed/unmanaged Hosting bietet Ihnen weltweit zuverlässige und sichere Lösungen, damit Ihre Online-Präsenz jederzeit optimal performt.
            </p>
          </motion.div>
        </motion.div>

        {/* Servicio 2 */}
        <motion.div
          className="relative w-80 aspect-4/3 overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-lg"
          layout
        >
          <motion.div className="w-full h-full">
            <Image
              src="/strategy.jpg"
              alt="office"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex flex-col justify-end bg-black/60 text-white p-4 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-1">Globale Entwicklung</h2>
            <p className="text-sm opacity-90">
             Wir bieten umfassende Entwicklungsdienstleistungen, die alle Arten von Projekten abdecken, um Ihre individuellen Anforderungen präzise und effizient umzusetzen.
            </p>
          </motion.div>
        </motion.div>

        {/* Servicio 3 */}
        <motion.div
          className="relative w-80 aspect-4/3  overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-lg"
          layout
        >
          <motion.div className="w-full h-full">
            <Image
              src="/create.jpg"
              alt="creative image"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex flex-col justify-end bg-black/60 text-white p-4 rounded-2xl"
          >
            <h2 className="text-xl font-semibold mb-1">Branding & Design</h2>
            <p className="text-sm opacity-90 mb-5">
              Unsere modernen Designs und Brandings machen Ihre Marke einzigartig und ansprechend, um Ihre Zielgruppe optimal zu erreichen und zu begeistern.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};