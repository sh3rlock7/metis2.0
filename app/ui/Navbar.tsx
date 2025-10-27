"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiCloseFill, RiInstagramFill, RiLinkedinFill,  RiMenuFill } from "react-icons/ri";
import { motion } from "motion/react"
import { DrawerMenu } from "./DrawerMenu";


export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
            setScrolled(true);
            } else {
            setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
    //Mobile Navbar
    <>
        <div className=
                {`fixed top-0 left-0 flex w-full justify-between lg:hidden items-center h-20 px-5 lg:mx-8 z-20 transition-colors duration-300
                    ${scrolled ? 'bg-black' : 'bg-transparent'}    
                `}
        >
            <Link href={'/'}>
            <Image
                src="/weiss.png"
                alt="Metis Origins Logo"
                width={130}
                height={130}
                className="object-contain"
                priority
                />
            </Link>

             <div className="w-10 h-10 relative z-50">
            <AnimatePresence >
                {open ? (
                <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center z-50"
                    onClick={() => setOpen(false)}
                >
                    <RiCloseFill className="text-3xl text-black" />
                </motion.div>
                ) : (
                <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setOpen(true)}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <RiMenuFill className="text-3xl" />
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
        
        <AnimatePresence>
            {open && <DrawerMenu open={open} setOpen={() => setOpen(false)}/>}
        </AnimatePresence>

        {/* Drawer mobile menu */}


        {/* // Desktop navbar */}
        <nav className={`hidden fixed top-0 left-0 w-full lg:flex items-center justify-between  px-28 py-3  z-50 ${scrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300 ease-in-out`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image
            src="/weiss.png"
            alt="Metis Origins Logo"
            width={130}
            height={130}
            className="object-contain"
            priority
            />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-x-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/ueber-uns">About</Link>

            {/* Botón "Kontakt" */}
            <motion.div
                whileHover={{scale:1.1}}
                whileTap={{scale:1.1}}
                transition={{duration: 0.5}}
            >

                <Link
                href="/kontakt"
                className="ml-2 inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-5 py-2 font-semibold"
                >
                Kontakt
                </Link>
            </motion.div>

            {/* Iconos sociales */}
            <div className="flex items-center gap-x-4 text-xl ml-2">
            <motion.div
                whileHover={{scale:1.1}}
                whileTap={{scale:1.1}}
                transition={{duration: 0.5}}
            >
                <Link
                    target="_blank"
                    href="https://www.instagram.com/metisorigins/"
                    aria-label="Instagram"
                    className="bg-gray-800 text-white p-5 rounded-full inline-flex items-center justify-center 
                                transition-colors duration-300 
                                hover:bg-white hover:text-black active:bg-white active:text-black"
                    >
                    <RiInstagramFill className="text-xl" />
                </Link>
            </motion.div>
            <motion.div
                  whileHover={{scale:1.1}}
                whileTap={{scale:1.1}}
                transition={{duration: 0.5}}
            >
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/metisorigins/"
                    aria-label="LinkedIn"
                    className="bg-gray-800 text-white p-5 rounded-full inline-flex items-center justify-center 
                    transition-colors duration-300 
                    hover:bg-white hover:text-black active:bg-white active:text-black"
                    >
                    <RiLinkedinFill />
                </Link>
            </motion.div>
            </div>
        </div>
        </nav>
    </>
  );
};
