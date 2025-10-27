"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = () => {
    const [activePin, setActivePin] = useState<string | null>(null);
      const [isMobile, setIsMobile] = useState(false);
    
      const pins = [
        {
          city: "Frankfurt",
          description:
            "Unser Hauptserver in Frankfurt dient als zentraler Knotenpunkt für Europa. Er gewährleistet schnelle und zuverlässige Verbindungen und bietet erstklassige Performance für unsere europäischen Kunden.",
          top: "15%",
          left: "50%",
        },
        {
          city: "Heidenheim",
          description:
            "Unsere Hauptniederlassung in Heidenheim ist das Herzstück unseres Unternehmens. Hier koordinieren wir unsere globalen Aktivitäten und bieten umfassenden Support in Deutsch und Englisch, um Ihre Anforderungen optimal zu erfüllen.",
          top: "18%",
          left: "52%",
        },
        {
          city: "Sydney",
          description:
            "Unser Standort in Sydney beherbergt einen unserer leistungsstarken Server. Unsere Ansprechpartner vor Ort stehen Ihnen sowohl in Deutsch als auch in Englisch zur Verfügung, um Ihnen bestmöglichen Support zu bieten.",
          top: "60%",
          left: "92%",
        },
      ];
      //Make the component know when is mobile apply tap and on desktop hover
      useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);
    
  return (
        <section className="relative w-full flex justify-center py-16 lg:-mt-7 xl:-top-13">
          <div className="relative w-[90%] max-w-6xl  rounded-2xl shadow-lg">
            <Image
              src="/map.jpg"
              alt="World map"
              width={1200}
              height={0}
              className="w-full h-full rounded-2xl"
              priority
            />
            {pins.map((pin) => {
              // si está muy a la derecha, movemos tooltip hacia la izquierda
              const isRight = parseFloat(pin.left) > 80;
              const isLeft = parseFloat(pin.left) < 20;
    
              return (
                <div
                  key={pin.city}
                  className="absolute"
                  style={{
                    top: pin.top,
                    left: pin.left,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => !isMobile && setActivePin(pin.city)}
                  onMouseLeave={() => !isMobile && setActivePin(null)}
                  onClick={() =>
                    setActivePin((prev) => (prev === pin.city ? null : pin.city))
                  }
                >
                  {/* Ondas */}
                  <motion.span
                    className="absolute w-10 h-10 rounded-full border  border-amber-200"
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute w-10 h-10 rounded-full border border-amber-200"
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 2 }}
                  />
                  {/* Chincheta */}
                  <FaMapMarkerAlt className="relative text-green-700 text-3xl z-10" />
    
                  {/* Tooltip */}
                  {activePin === pin.city && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={`absolute z-20 flex flex-col bg-white/95 backdrop-blur-md border border-gray-200 px-4 py-3 rounded-lg shadow-xl text-gray-800 text-xs font-medium w-[300px] h-[150px] whitespace-normal leading-snug
                        ${isRight ? "right-6" : isLeft ? "left-6" : "left-1/2 -translate-x-1/2"} 
                        ${parseFloat(pin.top) > 50 ? "bottom-8" : "top-8"}
                      `}
                    >
                      <h1 className="text-sm font-semibold text-gray-900 mb-1">
                        {pin.city}
                      </h1>
                      <p className="text-[12px] text-gray-600">{pin.description}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      );
}

export default Map
