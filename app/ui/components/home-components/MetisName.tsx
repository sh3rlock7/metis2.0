"use client"
import { motion, Variants } from "framer-motion"

export const MetisName = () => {
  const text = "metis"

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const letter: Variants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1], // equivalente a "easeOut" pero tip-safe
      },
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-[clamp(4rem,25vw,15rem)] font-semibold mt-10 sm:mt-48 lg:mt-96 text-center mr-5 sm:mr-0 tracking-tight"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
