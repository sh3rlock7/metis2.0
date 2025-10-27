"use client"
import Link from "next/link"
import { FaInstagram, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa"
import { motion } from "motion/react"
import { Partner } from "./components/home-components/Partner"


export const Footer = () => {
  return (
    <div className="min-h-[500px] bg-black flex flex-col">
        <div className="text-center mt-18">
            <h1 className="text-2xl lg:text-5xl">Verbinde dich mit uns auf Social Media</h1>
        </div>
        <div className="text-4xl flex items-center justify-center gap-x-5 mt-10">
            <Link target="_blank" href={'https://www.instagram.com/metisorigins/'}>
                <motion.div 
                    whileHover={{background: "white", color:"black"}}
                    whileTap={{background: "white", color:"black"}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-(--buttonsBg) h-[90px] w-[90px] rounded-xl flex items-center justify-center"
                    >
                    <FaInstagram/>
                </motion.div>
            </Link>
            <Link target="_blank" href={'https://www.linkedin.com/company/metisorigins/'}>
                <motion.div 
                    whileHover={{background: "white", color:"black"}}
                    whileTap={{background: "white", color:"black"}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-(--buttonsBg) h-[90px] w-[90px] rounded-xl flex items-center justify-center"
                >
                        <FaLinkedinIn />
                </motion.div>
            </Link>
        </div>

        {/* Division line */}
        <div className="bg-(--buttonsBg) h-px w-[90%] mx-auto mt-18 " /> 

        {/* Partnert section */}

        <Partner />

        <div className="bg-(--buttonsBg) h-px w-[90%] mx-auto mt-6 " /> 

        {/* Footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm ml-10 lg:ml-0 sm:text-center mt-12 mb-18">
            <div>
                <h3 className="text-base font-semibold mb-3">Über uns</h3>
                <ul className="space-y-2">
                <li>
                    <Link
                    href="/ueber-uns"
                    className="hover:underline hover:text-gray-300 transition-colors"
                    >
                    Unsere Geschichte
                    </Link>
                </li>
                </ul>
            </div>
            <div>
                <h3 className="text-base font-semibold mb-3">Rechtliches</h3>
                <ul className="space-y-2">
                <li>
                    <Link
                    href="/imprint"
                    className="hover:underline hover:text-gray-300 transition-colors"
                    >
                    Impressum
                    </Link>
                </li>
                <li>
                    <Link
                    href="/privacy"
                    className="hover:underline hover:text-gray-300 transition-colors"
                    >
                    Datenschutz
                    </Link>
                </li>
                <li>
                    <Link
                    href="/conditions"
                    className="hover:underline hover:text-gray-300 transition-colors"
                    >
                    AGB
                    </Link>
                </li>
                </ul>
            </div>

            {/* Columna 3: Community */}
            <div>
                <h3 className="text-base font-semibold mb-3">Community</h3>
                <ul className="space-y-2">
                <li>
                    <Link
                    href="/kontakt"
                    className="hover:underline hover:text-gray-300 transition-colors"
                    >
                    Kontakt
                    </Link>
                </li>
                </ul>
            </div>
            </div>
    </div>
  )
}
