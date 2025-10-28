"use client";
import Image from "next/image";
import Map from "./Map";
import { CiHardDrive } from "react-icons/ci";
import { FaPencilAlt, FaRegKeyboard } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { motion } from "motion/react"


const MoreAbout = () => {
  return (
    <div className="flex flex-col">
      <p className="text-2xl lg:text-xl mt-10 text-center text-gray-500 font-medium">
        Das ist unser vorgehen
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-center text-black mb-2 font-medium lg:[450]">
        Erfahre mehr über uns
      </h1>
      <div className="flex flex-col lg:flex-row sm:px-7 lg:mt-10 items-center justify-between">
        {/* Map Component */}
        <Map />
        
        <div className="flex flex-col items-start justify-start sm:mt-15  xl:-mt-15 px-5">
          <motion.div
            initial={{opacity:0, y:-50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <Image
              src="/bibiliotheck.jpg"
              alt="bibiliotheck"
              width={1200}
              height={0}
              className="rounded-2xl h-78 md:h-96 lg:h-62 w-[480px] sm:w-[700px] md:ml-5 lg:ml-0  lg:w-[350px] lg:mt-2"
            />
          </motion.div>
          <div className="mx-auto px-4">
            <p className="text-black mt-5 sm:mt-0 text-2xl py-1 font-black">
              Unser Vorgehen
            </p>
            <p className="text-xl lg:text-[16px] text-gray-500 lg:w-[450px] mt-2">
              Unser Ansatz ist strukturiert und zielgerichtet, um Ihre
              Anforderungen optimal zu erfüllen. Wir beginnen mit einer
              ausführlichen Analyse Ihrer Bedürfnisse, gefolgt von einer
              maßgeschneiderten Strategieentwicklung. Unsere Experten setzen die
              Lösungen effizient um und begleiten Sie kontinuierlich, um den
              Erfolg langfristig zu sichern.
            </p>
          </div>
        </div>
      </div>

      <div className="text-green-700 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mb-10 mt-10 lg:px-24 px-5 gap-y-10 gap-x-12">
        {/* Card 1 */}
        <div className="w-full md:w-[45%] lg:w-[190px] flex flex-col justify-start text-left md:border-r md:border-gray-500 lg:border-none">
          <motion.div
            initial={{opacity: 0, y: 5}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <CiHardDrive className="text-7xl text-left" />
          </motion.div>
          <h1 className="text-black text-2xl font-black mt-4 px-2 lg:px-0">
            Hosting / Managed Hosting
          </h1>
          <p className="text-xl lg:text-sm text-gray-500 mt-2 px-2 lg:px-0 text-left">
            Unser Managed Hosting bietet weltweit zuverlässige und sichere
            Lösungen mit lokalem Support in verschiedenen Sprachen. Wir
            gewährleisten hohe Performance, Sicherheit und Verfügbarkeit Ihrer
            Online-Präsenz. Unser Service umfasst die vollständige Verwaltung
            Ihres Hostings, einschließlich Updates, Sicherheit, Backups und
            technischem Support.
          </p>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* Card 2 */}
        <div className="w-full md:w-[45%] lg:w-[190px] flex flex-col justify-start text-left">
          <motion.div
             initial={{opacity: 0, y: 5}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <FaPencilAlt className="text-5xl  text-left md:mt-4" />
          </motion.div>
          <h1 className="text-black text-2xl font-black mt-6 ">Design</h1>
          <p className="text-xl lg:text-sm text-gray-500  py-2">
            Unser Design-Service umfasst die Erstellung von Logos,
            Markenidentitäten, Webdesign und grafischen Elementen für Print- und
            Online-Medien. Wir legen großen Wert auf modernes und ansprechendes
            Design, das Ihre Marke optimal repräsentiert. Unsere Referenzen und
            Fallstudien belegen die Zufriedenheit unserer Kunden und den Erfolg
            unserer Designprojekte.
          </p>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* Card 3 */}
        <div className="w-full md:w-[45%] lg:w-[190px] flex flex-col justify-start text-left md:border-r md:border-gray-500 lg:border-none">
          <motion.div
             initial={{opacity: 0, y: 5}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <FaRegKeyboard className="text-7xl text-left" />
          </motion.div>
          <h1 className="text-black text-2xl font-black mt-4 lg:px-0">
            Entwicklung
          </h1>
          <p className="text-xl lg:text-sm text-gray-500 mt-2">
            Unser Managed Hosting bietet weltweit zuverlässige und sichere
            Lösungen mit lokalem Support in verschiedenen Sprachen. Wir
            gewährleisten hohe Performance, Sicherheit und Verfügbarkeit Ihrer
            Online-Präsenz. Unser Service umfasst die vollständige Verwaltung
            Ihres Hostings, einschließlich Updates, Sicherheit, Backups und
            technischem Support.
          </p>
        </div>

        {/* Desktop Divider */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* Card 4 */}
        <div className="w-full md:w-[45%] lg:w-[190px] flex flex-col justify-start text-left">
          <motion.div
             initial={{opacity: 0, y: 5}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <BiBuildings className="text-7xl text-left" />
          </motion.div>
          <h1 className="text-black text-2xl font-black mt-4 text-nowrap">
            Startups & Branding
          </h1>
          <p className="text-xl lg:text-sm text-gray-500 mt-2">
            Wir bieten umfassende Branding-Dienstleistungen, die Startups
            helfen, starke Markenidentitäten zu entwickeln. Dazu gehören
            Logo-Design, Markenstrategie und visuelle Kommunikation, um Ihre
            Marke im Markt herausragen zu lassen. Unsere Dienstleistungen
            schaffen eine konsistente Identität, die Vertrauen und
            Wiedererkennung fördert.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
