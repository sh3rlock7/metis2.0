"use client"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { RiCloseFill } from "react-icons/ri"

interface Props {
  open: boolean
  setOpen: () => void
}

export const DrawerMenu = ({ open = false, setOpen }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="
            fixed inset-0 z-50 flex flex-col text-center h-screen
            backdrop-blur-lg
            bg-linear-to-br from-black/50 via-black/30 to-black/50
            border border-white/10
          "
        >
          {/* Contenedor del contenido, con animación de slide */}
          <motion.div
            key="content"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col flex-1"
          >
            {/* Icono de cierre */}
            <div className="flex justify-end p-6" onClick={setOpen}>
              <RiCloseFill className="text-3xl text-white hover:text-gray-300 transition" />
            </div>

            {/* Menú de links */}
            <div className="flex flex-col justify-center gap-y-6 mt-18">
              {[
                { href: "/", label: "Home" },
                { href: "/ueber-uns", label: "About" },
                { href: "/kontakt", label: "Contact" },
              ].map(({ href, label }) => (
                <Link href={href} key={href} onClick={setOpen}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      bg-white/20 
                      hover:bg-white/30 
                      backdrop-blur-md 
                      transition 
                      w-[75%] 
                      mx-auto 
                      p-3 
                      rounded-2xl 
                      shadow-xl
                    "
                  >
                    <p className="text-2xl font-semibold text-white drop-shadow-md tracking-wide">
                      {label}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
